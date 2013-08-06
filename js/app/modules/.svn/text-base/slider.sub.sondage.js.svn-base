define([
	'jquery',
	'backbone'
	],function($){
	VsliderItemSondage = Backbone.View.extend({
		startDate : 0,
		endDate : 0,
		duration : 0,
		localStorage : undefined,
		hasVote : false,
		//horloge : 0,
		events: {
			"click .reponse.on" : "vote",
			"click .fbSlideShare" : "fbSlideShare",
			"click .twSlideShare" : "twSlideShare"
		},
		template : '#template-slider-item-sondage',
		initialize : function(datas){
			this.el = $('#'+datas.elId);
			this.setElement(this.el);
			this.sondageId = $(this.el).attr('id').split('_')[1]
			this.getLocalStorage();

			this.startDate = this.model.get('timestamp');
			this.duration = this.model.get('duration');

			//var start = new Date(this.startDate);
			//var now = new Date(appLauncher.timer.horloge);
			this.endDate = this.startDate + this.duration;
			//var end = new Date(this.endDate);

			this.render();

			var self = this;
			this.model.on('change:version',function(){
				self.getLocalStorage();
				self.render();
			});
			this.listenTo(appLauncher.timer,'change:horloge',function(){
				self.updateTimer();
			});
		},
		/**
			* On transforme la date en date lisible
 			* @param {milliseconds} time Le temps en milliseconds a transformer en format lisible.
		*/
		_readableTime : function(time){
			var tim = Math.floor(time/1000);
			var min = Math.floor(tim/60);
			var sec = (tim-min*60);
			var ret = min+'\’'+ (((sec+"").length>1)?sec:'0'+sec) +'"';
			return ret;
		},
		/**
			* On met a jour le timer du sondage
		*/
		updateTimer : function(){
			var timeLeft = this._readableTime(this.endDate-appLauncher.timer.get('horloge'));
			//console.log('[updateTimer] this.endDate',this.endDate,'-appLauncher.timer.horloge',appLauncher.timer.get('horloge'),'=',timeLeft)
			if((this.endDate-appLauncher.timer.get('horloge'))/1000>=0){
				//On met a jour le timer avec le temps restant
				$(this.el).find('.item-timer').children('.time').text(timeLeft);
			} else {
				//On masque le timer le temps pour voter etant finit puis on arrete d'ecouter l'evenement de mise a jour du timer
				$(this.el).find('.item-timer').hide();
				$(this.el).find('.reponse').removeClass('on').addClass('off')
				this.stopListening(appLauncher.timer,'change:horloge');
			}
		},
		render : function(){
			if(appLauncher.timer.horloge>this.endDate){
				this.template = '#template-slider-item-sondage-results';				
			}

			$(this.el).html(_.template($(this.template).html(),{model:this.model}));

			if(this.hasVote){
				$('#son_'+this.sondageId+'-answer_'+this.choice).addClass('clicked').siblings().removeClass('on').addClass('off')
				$(this.el).find('.item-message').fadeIn();
			}

			return this;
		},
		/**
			* On envoi le vote au serveur
 			* @param {event} e L'evenement lié au click.
		*/
		vote : function(e){
			//On recupere le localStorage
			this.getLocalStorage();

			var self = this;

			var clicked = $(e.currentTarget).attr('id');
			this.answerId = clicked.split('-')[1].split('_')[1];

			if(appLauncher.timer.horloge<=this.endDate&&!this.hasVote){
				//console.log('Dans les temps')
				if(!$(this.el).hasClass('hasVote')){
					$(this.el).addClass('hasVote')
					$(e.currentTarget).addClass('clicked').siblings().removeClass('on').addClass('off')
					if (socialTV.isLocalStorageEnabled) { // si pas de localstorage, on ne prend pas le vote en compte (pour éviter de pouvoir revoter)
						$.ajax({
							url: URL_PATH+'/sondage/'+self.sondageId+'/'+self.answerId+'/updatechange?time='+appLauncher.timer.horloge
						}).done(function(data){
							//On ajoute la classe clicked au choix du vote et la classe off aux autres options
							//On enregistre le vote
							self.voteStore(self.sondageId,self.answerId);
							//On affiche le message
							$(self.el).find('.item-message').fadeIn();
						});
					}
				}
			}else{
				//console.log('Temps depassé')

			}
		},

		/**
 			* On enregistre le vote sur le localStorage.
 			* @param {number} sondage L'id du sondage.
 			* @param {number} vote L'id du vote.			
		*/
		voteStore : function(sondage,vote){
			this.getLocalStorage();
			if(!this.hasVote && socialTV.isLocalStorageEnabled ){
				//On verifie que le vote n'est pas deja enregistré avant de l'enregistrer
				var save = {};
					save[sondage] = parseInt(vote);
				this.localStorage[socialTV.programTitle].push(save);
				localStorage.setItem("ftv.socialTV", JSON.stringify(this.localStorage));
				self.hasVote = true;
				self.choice = save[sondage];
			}
		},
		/**
			* On recuper le localStorage
		*/
		getLocalStorage : function(){
			if (socialTV.isLocalStorageEnabled ) {
				//On recupere le localStorage afin de le parser
				this.localStorage = JSON.parse(localStorage.getItem('ftv.socialTV'));
				var self = this;
				if(this.localStorage!=null && this.localStorage[socialTV.programTitle] != null){
					_.each(this.localStorage[socialTV.programTitle],function(val){
						if(Object.keys(val)[0]==self.sondageId){
							//On enregistre les variable hasVote choice afin de pouvoir s'en servir ailleurs dans la vue
							self.hasVote = true;
							self.choice = val[Object.keys(val)[0]];
						}
					})
				}else{
					//Si le localStorage est vide on le crée
					this.localStorage = {};
					this.localStorage[socialTV.programTitle] = [];
					this.localStorage[socialTV.programTitle].push({"0":0});
					localStorage.setItem("ftv.socialTV", JSON.stringify(this.localStorage));
				}
			}
		},
		fbSlideShare : function(){
			//console.log('fbslideShare');
			/*var objPicture = socialTV.URL + "/" + this.model.get('image');		*/	
			//SBLA
			var objName = this.model.get('title');
			var objcaption = this.model.get('subtitle');
			var objDesc = this.model.get('content');
			var obj = { method: 'feed', link: socialTV.socialLink+'#'+this.model.get('itemId'), /*picture: objPicture,*/ name: objName, caption: objcaption, description: objDesc };

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