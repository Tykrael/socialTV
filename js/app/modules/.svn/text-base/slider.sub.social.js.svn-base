define([
	'jquery',
	'backbone'
	],function($){
	VsliderItemSocial = Backbone.View.extend({
		template : '#template-slider-item-social',
		events : {
			"click .fbSlideShare" : "fbSlideShare",
			"click .twSlideShare" : "twPopup",
			"click .twitter .answer" : "twPopup",
			"click .twitter .forward" : "twPopup",
			"click .twitter .favorite" : "twPopup",
			"click .twitter .website" : "twPopup"
		},
		initialize : function(datas){
			var self = this;
			// Date de publication
			this.pubDate = this.model.get('date');
			this.el = $('#'+datas.elId)
			this.setElement(this.el);
			this.render();
			
			this.model.on('change:version',function(){
				self.render();
			});
			this.listenTo(appLauncher.timer,'change:horloge',function(){
				self.updateTimer();
			});
		},
		render : function(){
			var texto_modif = '';
			if(typeof(this.model.get('content'))!='undefined'){
				var content = this.model.get('content');
				if (content) {
					texto_modif = content.replace(/((ftp|http|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.-]*(\?\S+)?)?)?)/gm,'<a href="$1" class="hashtagLink twit-color" target="_blank" class="twit-color">$1</a>');
					texto_modif = texto_modif.parseHashtag()
					texto_modif = texto_modif.replace(/@(\w+)/gm,'<a class="hashtagLink twit-color" href="http://twitter.com/$1" target="_blank">@$1</a>');
				}
			}
			$(this.el).html(_.template($(this.template).html(),{model:this.model,texto_modif:texto_modif}));
			return this;
		},
		/* Met a jour le compte du temps depuis la publication du tweet */
		updateTimer : function(){
			var time = this._readableTime(appLauncher.timer.get('horloge') - this.pubDate);
			$(this.el).find('.date').children('.time').text(time);
		},
		/**
			* On transforme la date en date lisible
 			* @param {milliseconds} time Le temps en milliseconds a transformer en format lisible.
		*/
		_readableTime : function(time){
			var ret = Math.round(time/1000);
			//console.log('ret',ret)
			var suffix = ' s';
			if(ret>86400){
				ret = Math.round(ret/86400);
				suffix = ' j';
			}else if(ret>3600){
				ret = Math.round(ret/3600);
				suffix = ' h';
			}else if(ret>60){
				ret = Math.round(ret/60);
				suffix = ' m';
			}
			if(ret<0)
				ret = 0;
			return ret+suffix;
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

		twPopup : function(e){
			var twButton = $(e.target).closest('a');
			if (!$(twButton).hasClass('website')){
				e.preventDefault();
				window.open($(twButton).attr('href'), 'twitterwindow','height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
				return false;
			}

		}
	});
});