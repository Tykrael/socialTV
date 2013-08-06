define([
	'jquery',
	'backbone',
	'snapplayer'
	],function($){

	VsliderItemVideo = Backbone.View.extend({
		template : '#template-slider-item-video',
		events : {
			"click .fbSlideShare" : "fbSlideShare",
			"click .twSlideShare" : "twSlideShare"
		},
		playing: false,
		playerInit : false, // au cas où l'event de changement de slide passe avant d'être unbind
		initialize : function(datas){
			var self = this;
			this.el = $('#'+datas.elId)
			this.model = datas.model;
			this.model.bind('remove',function(){
				self.destroy();
			});
			this.setElement(this.el);
			this.render();
			
			this.model.on('change',function(){
				//console.log('change');
				self.playerInit = false;
				self.render();
			});
		},
		render : function(){
			var self = this;
			this.videoPlayerId = this.model.get('itemId') + "-video";
			this._parseVideoUrl(this.model.get('video'));
			$(this.el).removeData().unbind();
			if (this.model.get('type_video') == 'youtube' && this.player) { // je ferais bien la même chose avec DM, mais l'api est daubée
				this.player.destroy();
			}
			$(this.el).html(_.template($(this.template).html(),{model:this.model}));
			if (this.videoId){
				if (this.model.get('type_video') == 'youtube'){
					if (socialTV.youtubeReady) {
						this.initYTPlayer();
					} else {
						appLauncher.vent.on('youtubeApiReady',self.initYTPlayer, self);
					}
				} else if (this.model.get('type_video') == 'dailymotion') {
					if (socialTV.dailymotionReady) {
						this.initDMPlayer();
					} else {
						appLauncher.vent.on('dailymotionApiReady',self.initDMPlayer, self);
					}
				} else if (this.model.get('type_video') == 'snap') {
					this.initSnapPlayer();
				} else {
					$(this.el).find('.video-error').show();
				}
			} else {
				$(this.el).find('.video-error').show();
			}

			return this;
		},
		initYTPlayer : function(video){
			var self = this;
			this.off('youtubeApiReady');
			this.player = new YT.Player(this.videoPlayerId, {
										width: '100%',
										height: '383',
										videoId: this.videoId,
										playerVars : {
											wmode: "opaque"
										},
										events: {
											onReady : function(event){
												self.playerInit = true;
												self.listenTo(appLauncher.vent, 'slider:changeSlide', self.stopVideo);
											},
											onStateChange : function(event){
												var state = event.data;
												if (state == YT.PlayerState.PLAYING || state == YT.PlayerState.BUFFERING) {
													appLauncher.vent.trigger("flux:pause");
													self.playing = true;
												} else if (state == YT.PlayerState.ENDED || state == YT.PlayerState.PAUSED) {
													appLauncher.vent.trigger("flux:launch");
													self.playing = false;
												}

											},
											onError : function(event){
												$(self.el).find('.video-error').show();
											}
										}
						});	
		},
		initDMPlayer : function(){
			var self = this;
			this.off('dailymotionApiReady');
			this.player = DM.player(this.videoPlayerId, {
									video: this.videoId, 
									width: "100%", 
									height: "383"}
									);
			this.player.addEventListener("apiready", function(){
				self.playerInit = true;
				self.listenTo(appLauncher.vent, 'slider:changeSlide', self.stopVideo);
			});
			this.player.addEventListener("play", function(){
				appLauncher.vent.trigger("flux:pause");
				self.playing = true;
			});
			this.player.addEventListener("ended", function(){
				appLauncher.vent.trigger("flux:launch");
				self.playing = false;
			});
			this.player.addEventListener("pause", function(){
				appLauncher.vent.trigger("flux:launch");
				self.playing = false;
			});
			this.player.addEventListener("onError", function(){
				$(self.el).find('.video-error').show();
			});

			
		},
		initSnapPlayer : function(){
			var self = this;
			$('#'+this.videoPlayerId).width('100%'); // wat ?
			self.player = socialTV.embedSnap(this.videoPlayerId, {
				videoId: self.videoId,
				width: "716", 
				height: "383",
				onReady: function(){
					self.playerInit = true;
					self.listenTo(appLauncher.vent, 'slider:changeSlide', self.stopVideo);
				},
				onPlay: function(){
					appLauncher.vent.trigger("flux:pause");
					self.playing = true;
				},
				onPause: function(){
					appLauncher.vent.trigger("flux:launch");
					self.playing = false;
				},
				onEnded: function(){
					appLauncher.vent.trigger("flux:launch");
					self.playing = false;
				},
				onError: function(){
					$(self.el).find('.video-error').show();
					self.player = null; //Supprime la ref vers le player (qui se sera fait hara kiri dans son coin en cas d'erreur)
				}
			});
		},
		stopVideo : function() {
			if (this.player && this.playerInit && this.playing){
				switch(this.model.get('type_video')){
					case 'youtube' :
						this.player.pauseVideo();
						break;
					case 'dailymotion' :
						this.player.pause();
						break;
					case 'snap' :
						this.player.pause();
				}
				
			}
		},
		fbSlideShare : function(){
			//console.log('fbslideShare');
			var objPicture = socialTV.URL + "/" + this.model.get('image');			
			//SBLA
			var objName = this.model.get('title');
			var objcaption = this.model.get('subtitle');
			var objDesc = this.model.get('content');
			var obj = { method: 'feed', link: socialTV.socialLink+'#'+this.model.get('itemId'), picture: objPicture, name: objName, caption: objcaption, description: objDesc };

			function callback(response) { /*document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];*/ }
			FB.ui(obj, callback);
		},

		twSlideShare : function(e){
			e.preventDefault();
			var twButton = e.target.parentElement;
			window.open(twButton.href, 'twitterwindow','height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
			//console.log('twSlideShare');
		},
		_parseVideoUrl : function(videoUrl) {
			var self = this;
			videoUrl = (videoUrl.substr(0,7) != 'http://') ? 'http://' + videoUrl : videoUrl;
			// créer un élément a permet de plus facilement parser l'url
			var parser = document.createElement('a');
			parser.href = videoUrl;
			var pathname;
			if (parser.pathname.substr(0,1) != '/') { // IE fait pas pareil que ses potes...
				pathname = "/" + parser.pathname;
			} else {
				pathname = parser.pathname;
			}
			if (this.model.get('type_video') == 'snap') {
				var path = pathname.split('/');
				self.videoId = path[path.length -1];
			} else {
				switch(parser.hostname) {
					case 'www.youtube.com' :
						// Dans le cas d'une slide créée avant l'implémentation de type_video
						if (this.model.get('type_video') != 'youtube') {
							this.model.set('type_video','youtube');
						}
						//ex : http://www.youtube.com/watch?v=dQw4w9WgXcQ (id voulue : dQw4w9WgXcQ)
						var path = pathname.split('/');
						if (path[0] == 'embed') {
							self.videoId = path[1];
						} else {
							if (parser.search) {
								self.videoId = parser.search.split('v=')[1].split('&')[0];
							}
						}
						break;
					case 'youtu.be' :
						// Dans le cas d'une slide créée avant l'implémentation de type_video
						if (this.model.get('type_video') != 'youtube') {
							this.model.set('type_video','youtube');
						}
						// ex : http://youtu.be/dQw4w9WgXcQ (id voulue : dQw4w9WgXcQ)
						self.videoId = parser.pathname.replace('/','');
						break;
					case 'www.dailymotion.com' :
						// Dans le cas d'une slide créée avant l'implémentation de type_video
						if (this.model.get('type_video') != 'dailymotion') {
							this.model.set('type_video','dailymotion');
						}
						// ex : http://www.dailymotion.com/video/x5ykzv_rick-roll_music (id voulue : x5ykzv)		
						var path =  pathname.split('/');
						switch(path[1]) {
							case 'video' : 
								self.videoId = path[2].split('_')[0];
								break;
							case 'playlist' :
								self.videoId = parser.hash.split('video=')[1];
								break;
						}
						break;
					default :
						self.videoId = '';
						break;
				}
			}
		},
		destroy : function() {
			var self = this;
			self.playerInit = false;
			$(this.el).removeData().unbind();
			if ((this.model.get('type_video') == 'youtube' || this.model.get('type_video') == 'snap') && this.player) {
				this.player.destroy();
			}
			
		}
	});
});