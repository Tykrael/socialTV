define([
	'jquery',
	'backbone',
	'globals'
	],function($){

	Vsplash = Backbone.View.extend({
		localStorage : undefined,
		template : '#template-splash-screen',
		events : {
			"click .close-splash":"closeSplash"
		},
		initialize : function(datas){
			this.el = $(datas.el);
			var firstTime = this.getFirstTime();
			if (firstTime){
				this.render();
				var self = this;
				this.autoCloseTimeout = setTimeout(function(){
					self.closeSplash();
				},4000);	
			} else {
				this.destroy();
			}
			
			
		},
		render : function(){
			$(this.el).html($(this.template).html());
			this.checkForSnapshot();
			return this;
		},
		closeSplash : function(){
			//e.preventDefault();
			console.log(this);
			if (socialTV.isLocalStorageEnabled) {
				var splashed = {splashed:true};
				console.log(this.localStorage);
				console.log(socialTV.programTitle);
				console.log(this.localStorage[socialTV.programTitle]);
				this.localStorage[socialTV.programTitle].push(splashed);
				localStorage.setItem("ftv.socialTV", JSON.stringify(this.localStorage));
			}
			this.destroy();
		},
		destroy : function(){
			clearTimeout(this.autoCloseTimeout);
			this.remove();
		},
		getFirstTime : function(){
			var firstTime = true;
			if (socialTV.isLocalStorageEnabled) {
				this.localStorage = JSON.parse(localStorage.getItem('ftv.socialTV'));
				if(this.localStorage!=null && this.localStorage[socialTV.programTitle] != null){
					_.each(this.localStorage[socialTV.programTitle],function(val){
						if(Object.keys(val)[0]=='splashed'){
							firstTime = false;
						}
					})
				}else{
					//Si le localStorage est vide on le crée
					this.localStorage = {};
					this.localStorage[socialTV.programTitle] = []
					this.localStorage[socialTV.programTitle].push({"0":0})
					localStorage.setItem("ftv.socialTV", JSON.stringify(this.localStorage));
				}
			}
			return firstTime;
		},
		checkForSnapshot: function(){
			$.ajax({
				url:socialTV.WS_ZONE_PROG_URL,
				cache: false,
				datatype: 'json',
				async: true
			}).done(function(data){
				if (data.type == 'partage_video') {
					$('.splash-partage-video').show();
				}
			});
		}

	});
});