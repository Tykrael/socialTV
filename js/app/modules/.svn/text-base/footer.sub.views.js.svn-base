define([
	'jquery',
	'backbone'
	],function($){


	MvideoFooter = Backbone.Model.extend({
		url : socialTV.WS_ZONE_PROG_URL,
		defaults : {
			id : undefined,
			title : undefined,
			image : undefined,
			content : undefined,
			videoUrl : null,
			videoSnap : null, 
			type : undefined,
			loaded : false,
			error : false
		},
		initialize : function() {
			this.bind("error", function(model, error) {});
			this.bind("checkForDefault", this.loadDatas);
			this.loadDatas();
		},
		loadDatas : function(){
			var self = this;
			$.ajax({
				url: self.url,
				cache: true,
				dataType: "json",
				async: true
			}).done(function(datas){
				self.set({  type : datas.type,
							title : datas.title,
							image : datas.image,
							content : datas.content,
							loaded : true,
							error : false
						 });
			}).fail(function(){
				self.set({ 	loaded : true,
							error : true 
						});
			}).always(function(){
/*				setTimeout(function(){
					self.trigger("checkForDefault");
				}, 10000);*/
			});
		},
		loadVideoSnap	: function(){
			var self = this;
			var delay = 2000;
			//console.log('loadSnap ?');
			$.ajax({
				url: socialTV.videoShareUrl,
				cache: false,
				dataType: 'json',
				async: true,
				timeout: 6000
			}).done(function(datas){
				//console.log(datas);
				if (datas.ERROR_CODE == "0"){
					//delay = datas.VIDEO_ACCESS_DELAY * 1000;
					//console.log('delay',delay);
					//var videoId = datas.VIDEO_URL.split("/")[4].split('.')[0];
					//var smallSnapshot = datas.SNAPSHOT_URL.replace('.jpg','_small.jpg');
					//console.log(smallSnapshot);
					var videoList = [];
					_.each(datas.VIDEOS, function(item, k) {
						var snapItem = {};
						snapItem.videoId = item.VIDEO_FILE.replace('.mp4','');
						snapItem.videoUrl = datas.VIDEO_PATH + item.VIDEO_FILE;
						snapItem.snapshotUrl = item.SNAPSHOT_URL.replace('.jpg','_small.jpg');
						snapItem.shareUrl = socialTV.URL_VIDEO_PLAYER + snapItem.videoId;
						delay = (item.VIDEO_ACCESS_DELAY*1000 > delay) ? item.VIDEO_ACCESS_DELAY * 1000 : delay;
						videoList[item.INDEX-1] = snapItem;
					});
					self.set({ 
						/*videoSnap : {
							errorCode : datas.ERROR_CODE,
							videoUrl : datas.VIDEO_URL,
							videoId : videoId,
							delay : delay,
							videoScreenshotUrl : smallSnapshot
						},*/
						videos : videoList,
						errorCode : datas.ERROR_CODE,
						objPicture : datas.SNAPSHOT_URL,
						//videoUrl : socialTV.URL_VIDEO_PLAYER + videoId,
						//sourcePlayer : URL_PATH + "/player.swf?bufferlength=3&lightcolor=FFFFFF&autostart=true&file=http://partagereplay.francetv.fr/France/"+ videoId +".mp4&provider=http&frontcolor=CCCCCC&backcolor=333333"
					});
					self.trigger("videoSnapLoaded");
				} else {
					self.trigger("videoSnapError");
				}
			}).fail(function(){
				self.trigger("videoSnapError");	
			}).always(function(){
				//console.log('delayferred', delay);
				self.trigger("spinVideoSnap", delay);
			});
		}
	});



	VfooterVideo = Backbone.View.extend({

		events:{
			"click .snapButton" : "toggleSnap",
			"click .fbSnapshotShare" : "fbShareSnapshot",
			"click .twSnapshotShare" : "twShareSnapshot",
			"click .ccSnapshotShare" : "showCCPopin",
			"click .backButton" : "snapVideoClose",
			"click .snap-prev" : "loadPrevVideo",
			"click .snap-next" : "loadNextVideo"
		},
		videoPlayer : null,
		s1Width : 155,
		infoZoneWidth : 243,
		nbTry : 0,
		isSnapped : false,
		currentVideoIndex : -1,
		template : '#template-footer-video',
		ccPopinTemplate : '#template-cc-popin',
		initialize: function(){
			//console.log('VfooterVideo initialize',this.el)
			var self = this;
			this.model = new MvideoFooter();
			
			this.model.on('change:loaded',function(){
				self.render();
			})
			this.model.on('videoSnapLoaded',function(){
				self.videoSnapLoaded();
			})
			this.model.on('videoSnapError',function(){
				self.videoSnapError();
			});
			this.model.on('spinVideoSnap',function(delay){
				self.videoSnapSpin(delay);
			});
			this.model.on('loadVideoSnap',function(){
				self.model.loadVideoSnap();
			});
		},
		render: function(){
			//console.log('VfooterVideo render',this.model)
			var self = this;
			this.isSnapped = false;
			//console.log(this.el)
			_V_.options.flash.params = {wmode : 'transparent'};
			if (this.model.get('error')) {
				this.destroy();
			} else {
				this.$el.html(_.template($(this.template).html(),{model:this.model}));
			}
			
			return this;
		},
		toggleSnap : function(e){
			//console.log('toggleSnap');
			var self = this;
			//console.log('toggleSnap','isSnapped',self.isSnapped);
			if (!self.isSnapped) {
				$('.snapButton').addClass('active');
				self.isSnapped = true;
				self.nbTry = 0;
				self.model.trigger('loadVideoSnap');
				var date = new Date();
				return xt_click(this,'C', xtn2, 'SocialTV::snap_video::enregistrer_video::enregistrement_'+date.getHours()+'h-'+date.getMinutes()+'min','A');
			}
		},
		snapVideoClose : function(e){
			var self = this;
			$('.infoZone').animate({
					width: 'toggle'
				},500,'swing').siblings('.liveZone').animate({
					width:'toggle'
				},500,'swing', function(){
					$('.infoZone').show();
					$('.liveZone').show();
				});	
			
			$('.snapVideoError').hide();
			$('.playVideoError').hide();
			$('.snapVideoMask').show();
			$('.snapVideoClose').hide();
			$('.playerWrapper').hide();
			$('.infoStep2 .infos .infosIllus').addClass('disabled');
			$('.twSnapshotShare').attr('href','#');
			if (self.videoPlayer) {
				self.videoPlayer.pause();
				self.videoPlayer.destroy();
				//self.videoPlayer.destroy();
			}

			self.isSnapped = false;
			VideoJS.players = {};
		},
		snapshotHasChanged : function(e){
			var self = this;
			self.render();
		},
		videoSnapSpin : function(delay){
			var self = this;
			//console.log('spiiiiiin');
			setTimeout(function(){
				$('.playerWrapper').css('display','inline-block');
				$('.infoZone').animate({
					width: 'toggle'
				},500,'swing').siblings('.liveZone').animate({
					width:'toggle'
				},500,'swing', function(){
					$('.infoZone').hide();
					$('.liveZone').hide();
					$('.snapButton').removeClass('active');
				});			
			},delay);
		},
		videoSnapLoaded : function(){
			var self = this;
			var videoPlayerId = "snapPlayer-"+Date.now();
			var videoHtml = "<video id='"+videoPlayerId+"' class='video-js vjs-default-skin player' controls width='208' height='118' ></video>";
			$('.playerWrapper').html(videoHtml);
			self.videoPlayer = _V_(videoPlayerId, {'preload':'none', techOrder: ["flash","html5"]}, function(){
				setTimeout(function(){ // crash ipad sans setTimeout (?)
					var lastVideoIndex = self.model.attributes.videos.length-1; 
					self.loadVideoByIndex(lastVideoIndex);
				},1000);
			});
		},
		loadVideoByIndex : function(index) {
			var self = this;
			if (index >= 0 && index < self.model.attributes.videos.length) {
				self.videoPlayer.pause();
				var video = self.model.attributes.videos[index];
				if (!self.videoPlayer.paused()){
					self.videoPlayer.pause();
				}

				self.videoPlayer.src([
					{ type: "video/mp4", src: video.videoUrl }
				]);
				self.currentVideoIndex = index;
				$(self.videoPlayer.el).find('.vjs-poster').attr('src', video.snapshotUrl).show();
				self.videoPlayer.removeEvent('error');
				self.videoPlayer.addEvent('error', function(){
					self.videoPlayError(self)
				});

				self.videoPlayer.bigPlayButton.show();
				var tweetHref = socialTV.wording.snapShareTw(video.shareUrl);
				$(".twSnapshotShare").attr("href", tweetHref);
				if(swfobject.hasFlashPlayerVersion('1')){
					$('.ccSnapshotShare').zclip('remove');
					$('.ccSnapshotShare').zclip({
						path:URL_STATIC_RES + '/js/lib/zeroclipboard/ZeroClipboard.swf',
						copy:video.shareUrl,
						afterCopy:$.noop
					});
				} else {
					var urlSplit = video.videoUrl.split('/');
					var urlVideo = urlSplit[urlSplit.length -1].replace('#','');
					var monthsText = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
					var snapDate = urlVideo.substr(6,2)+" "+monthsText[parseInt(urlVideo.substr(4,2)) -1 ]+" "+urlVideo.substr(0,4);
					var snapTime = urlVideo.substr(8,2)+'h'+urlVideo.substr(10,2);
					$('.ccSnapshotShare').attr('href',socialTV.wording.snapShareMailto(video.shareUrl, snapDate, snapTime));
				}
				self.isSnapped = false;
				$('.snapshotShare').animate({
					opacity : 1
				}, 500, function(){
					$('.infoStep2 .infos .infosIllus').removeClass('disabled');
				});
				
				if (self.nbTry > 0) {
					self.videoPlayer.play();
				}
				if (index == 0) {
					$('.snap-prev').addClass('disabled');
				} else {
					$('.snap-prev').removeClass('disabled');
				}
				if (index == self.model.attributes.videos.length-1) {
					$('.snap-next').addClass('disabled');
				} else {
					$('.snap-next').removeClass('disabled');
				}
				
			}
		},
		loadPrevVideo: function(e) {
			if(!$(e.target).hasClass('disabled')){
				this.loadVideoByIndex(this.currentVideoIndex - 1 );
			}
		},
		loadNextVideo: function(e) {
			if(!$(e.target).hasClass('disabled')){
				this.loadVideoByIndex(this.currentVideoIndex + 1 );
			}
		},
		videoSnapError: function(){
			//console.log('video snap loaded');
			$('.snapVideoError').show();
			$('.snapshotShare').addClass('disabled');
			$('.snapshotShare').animate({
						opacity : 0.5
					}, 500);
		},
		videoPlayError: function(that){
			//console.log('video snap loaded');
			var self = that; //vue
			if (self.videoPlayer) {
				self.videoPlayer.removeEvent('error');
			}
			if (self.nbTry < 3) {
				setTimeout(function(){
					if (self.videoPlayer) {
						self.videoPlayer.pause();						
					}
					self.loadVideoByIndex(self.currentVideoIndex);
					
					self.nbTry++;
				}, 7000);
			} else {
				if (self.videoPlayer) {
						self.videoPlayer.pause();
						VideoJS.players = {} ;
						self.videoPlayer.destroy();
						
				}
				$('.playVideoError').show();
				$('.snap-next').addClass('disabled');
				$('.snap-prev').addClass('disabled');
				$('.snapshotShare').addClass('disabled');
				$('.snapshotShare').animate({
						opacity : 0.5
					}, 500);
				self.nbTry = 0;
			}
		},
		showCCPopin : function(e){
			if (!$(e.target).hasClass('disabled')) {
				$.ajax({url: socialTV.videoSelect + this.model.attributes.videos[this.currentVideoIndex].videoId});	
				if (swfobject.hasFlashPlayerVersion('1')) {
					var self = this;
					$(".popin-cc").html($.parseHTML(_.template($(this.ccPopinTemplate).html(), {videoUrl : this.model.get('videoUrl')})));
					$(".popin-cc .closeccButton").on('click', this.closeCCPopin);
					setTimeout(self.closeCCPopin, 3000);	
				} 
			} else {
				e.preventDefault();
			}
			
			return xt_click(this,'C', xtn2, 'SocialTV::snap_video::partage_sur-webapp::video_mail','A')
		},
		closeCCPopin : function(){
			$(".popin-cc .closeccButton").off('click');
			$(".popin-cc").empty();
		},
		fbShareSnapshot : function(e){
			var self = this;
			e.preventDefault();
			if (!$(e.target).hasClass('disabled')) {
				$.ajax({url: socialTV.videoSelect + self.model.attributes.videos[self.currentVideoIndex].videoId});				
				var objName = socialTV.wording.snapShareFbTitle;
				var objPicture = self.model.attributes.videos[self.currentVideoIndex].snapshotUrl;
				var objLink = self.model.attributes.videos[self.currentVideoIndex].shareUrl;
				var objcaption = '';

				var objDesc = socialTV.wording.snapShareFbBody;
				var obj = {};
				if(socialTV.videoShareEmbed == true) {
					var sourcePlayer = URL_PATH + "/player.swf?bufferlength=3&lightcolor=FFFFFF&autostart=true&file="+ self.model.attributes.videos[self.currentVideoIndex].videoUrl +"&provider=http&frontcolor=CCCCCC&backcolor=333333";
					obj = { method: 'feed', link: objLink, picture: objPicture, source: sourcePlayer, name: objName, caption: objcaption, description: objDesc, type:"video" };
				}else{
					obj = { method: 'feed', link: objLink, picture: objPicture, name: objName, caption: objcaption, description: objDesc };
				} 
				function callback(response) {  }
				FB.ui(obj, callback);
				return xt_click(this,'C', xtn2, 'SocialTV::snap_video::partage_sur-webapp::video_facebook','A');
			}
		},
		twShareSnapshot : function(e){
			e.preventDefault();
			var twButton = e.target;
			if(!$(twButton).hasClass('disabled')) {
				$.ajax({url: socialTV.videoSelect + this.model.attributes.videos[this.currentVideoIndex].videoId});	
				window.open(twButton.href, 'twitterwindow','height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
				return xt_click(this,'C', xtn2, 'SocialTV::snap_video::partage_sur-webapp::video_twitter','A');
			}
		},
		destroy: function(){
			if (self.videoPlayer) {
				//self.videoPlayer.pause();
				self.videoPlayer.destroy();
			}

			self.isSnapped = false;
			//VideoJS.players = {};
			$(this.el).removeData().unbind();
			$(this.el).empty();
		}
	});
});