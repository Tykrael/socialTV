define([
	'jquery','backbone'
	],function($){
	Mstate = Backbone.Model.extend({
		state : undefined,
		timeout : 0,
		isRunning : false,
		isRefreshing : true,
		horloge : 0,
		horl:  undefined,
		initialize : function(){
			var self = this;
			this.state = 'initialized';
			this.initHorloge();

			appLauncher.vent.on("collection:loaded", function(){
				self.initTimer();
			});
			appLauncher.vent.on("flux:pause", function(){
				self.refreshModeOff();
			});

			appLauncher.vent.on("flux:launch", function(){
				self.refreshModeOn();
			})
		},
		initTimer : function(){
			var self = this;
			self.isRunning = true;
			self.timeout = setTimeout(function(){
					self.refreshSlides();
				}, socialTV.refreshRate);
		},
		refreshModeOn : function(){
			this.isRefreshing = true;
		},
		refreshModeOff : function() {
			this.isRefreshing = false;
		},
		launchTimer : function(){
			// comme initTimer, mais on lance un refresh 2s plus tard (au lieu du refresh rate habituel)
			// ^ provoque un soucis avec l'intégration de vidéos
			var self = this;
			//console.log('launch');
			self.timeout = setTimeout(function() {
				self.refreshSlides();
			}, 2000);
			
		},
		pauseTimer : function(){
			var self = this;
			//console.log('pause');
			clearTimeout(self.timeout);
			self.isRunning = false;
		},
		refreshSlides : function(){
			var self = this;
			if (self.isRunning) {
			appLauncher.vent.trigger("collection:refresh");
			self.timeout = setTimeout(function(){
				self.refreshSlides();
				}, socialTV.refreshRate);
			}
		},
		initHorloge : function(){
			var self = this;
			var srvT = this.getSrvTime();
			//var temp = new Date(srvT);
			this.horloge = new Date(srvT).getTime();
			if(typeof(this.horl)!='undefined'){
				window.clearInterval(this.horl);
			}
			if (typeof(this.resync) != 'undefined') {
				window.clearTimeout(this.resync);
			}
			this.horl = setInterval(function(){
				self.horloge += 1000;
				self.set('horloge',self.horloge)
			},1000);
			if (socialTV.clockResyncRate > 0) {
				this.resync = setTimeout(function(){
					self.initHorloge();
				}, socialTV.clockResyncRate);
			}
		},
		getSrvTime : function(){
			try {
				//FF, Opera, Safari, Chrome
				xmlHttp = new XMLHttpRequest();
			}
			catch (err1) {
				//IE
				try {
					xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
				}
				catch (err2) {
					try {
						xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
					}
					catch (eerr3) {
						//AJAX not supported, use CPU time.
						alert("AJAX not supported");
					}
				}
			}
			xmlHttp.open('HEAD','/favicon.ico?_=' + new Date().getTime(),false);
			xmlHttp.setRequestHeader("Content-Type", "text/html");
			xmlHttp.send('');
			return xmlHttp.getResponseHeader("Date");
		}
	});
});