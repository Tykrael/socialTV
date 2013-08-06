define([
	'jquery',
	'backbone'
	],function($){

	VsliderItemEdito = Backbone.View.extend({
		template : '#template-slider-item-edito',
		events : {
			"click .fbSlideShare" : "fbSlideShare",
			"click .twSlideShare" : "twSlideShare"
		},
		initialize : function(datas){
			var self = this;
			this.el = $('#'+datas.elId);
			this.render();
			this.model.on('change:version',function(){
				self.render();
			});
		},
		render : function(){
			$(this.el).html(_.template($(this.template).html(),{model:this.model}));
			this.setElement(this.el);
			return this;
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
		}
	});
});