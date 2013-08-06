define([
	'underscore', 'jquery', 'backbone', 'globals', 'mState', 'flexslider', './modules/slider.sub.edito', './modules/slider.sub.image', './modules/slider.sub.video', './modules/slider.sub.sondage', './modules/slider.sub.social'
	],function(_,$){
	/**
	 * Model de données pour la collection du slider
	 */
	Mslider = Backbone.Model.extend({
		defaults : {
			type : 			undefined,
			itemId : 		undefined,
			socialId : 		undefined,
			image : 		undefined,
			duration : 		undefined,
			begin_date : 	undefined,
			title : 		undefined,
			subtitle : 		undefined,
			content : 		undefined,
			type_social : 	undefined,
			type_video:     undefined,
			nickname : 		undefined,
			date : 			undefined,
			media : 		undefined,
			video : 		undefined,
			copyright : 	undefined,
			bitly : 		undefined,
			answer_1 : 		undefined,
			answer_2 : 		undefined,
			answer_3 : 		undefined,
			answer_4 : 		undefined,
			nb_answer_1 : 	undefined,
			nb_answer_2 : 	undefined,
			nb_answer_3 : 	undefined,
			nb_answer_4 : 	undefined,
			nb_votes : 		0,
			p_answer_1 : 	0,
			p_answer_2 : 	0,
			p_answer_3 : 	0,
			p_answer_4 : 	0,
			c_answer_1 : 	undefined,
			c_answer_2 : 	undefined,
			c_answer_3 : 	undefined,
			c_answer_4 : 	undefined
		}
	});
	/**
	 * collection du slider
	 */
	Cslider = Backbone.Collection.extend({
		model : Mslider,
		initialize : function(){
			var self = this;
			this.loadDatas();
			appLauncher.vent.on("collection:refresh", function() {
					self.refresh()
				});
		},
		loadDatas : function(){
			var self = this;
			$.ajax({
				url: socialTV.WS_SELECTION_URL,
				dataType: "json",
				cache : false,
			}).done(function(datas){
				_.each(datas,function(data,k){
					//console.log(data)
					var item = self._loadItem(data);
					self.add(item);
					if (k == datas.length-1){
						self.trigger('lastItemLoaded');
					}
				});
				
				appLauncher.vent.trigger("collection:loaded");
				//self.trigger('collection:updated',datas.length-1);
			}).fail(function(){
				//console.log('erreur lors de la recuperation des données "Cslider"');
			});
		},
		refresh : function(){
			//$('.flux-updates').html("Refreshing...");
			//console.log("refresh");
			var self = this;
			$.ajax({
				url: socialTV.WS_INDEX_URL,
				cache: false,
				dataType: "json"
			}).done(function(datas){
				var newKeys = [];
				_.each(datas,function(data,k){
					var itemId = Object.keys(data)[0];
					var item = self.get(itemId);
					newKeys[k] = itemId;
					/* NOUVEL ITEM */
					if (!item) {
						$.ajax({
							url : socialTV.WS_FLUX_URL + "/" + itemId + ".json",
							dataType : "json",
							async : false,
							cache : false
						}).done(function(data){
							var item = self._loadItem(data);
							self.add(item);
							if (k == datas.length-1){
								self.trigger('lastItemLoaded');
							} 
						});
					/* MAJ ITEM */	
					}   else if (item.attributes.version < data[itemId]){
						$.ajax({
							url : socialTV.WS_FLUX_URL + "/" + itemId + ".json",
							dataType : "json",
							cache : false
						}).done(function(data){
							var item = self._loadItem(data);
							self.get(itemId).set(item.attributes);
							self.trigger('item:change', item, k);
						});
					}

				});
				/*SUPRESSION ITEM*/
				var oldKeys = self.pluck("id");
				var toDelete = _.difference(oldKeys, newKeys);
				if (toDelete.length > 0) {
					_.each(toDelete, function(itemId,k){
						var item = self.get(itemId);
						self.remove(item);
					});
					updated = true;
					self.trigger('itemsRemoved', datas.length-1);
				}
			});
			
		},
		_loadItem : function(data, jqxhr){
			var self = this;
			var item = new Mslider();
			if(data.type == "son"){
				appLauncher.timer.initHorloge();
				var nb_votes = data.nb_answer_1 + data.nb_answer_2;
				var list = [ {name : "reponse_1" , vote : data.nb_answer_1},{name : "reponse_2" , vote : data.nb_answer_2} ];
				if(data.answer_3!=null){
					nb_votes += data.nb_answer_3;
					list.push({name : "reponse_3" , vote : data.nb_answer_3})
				}
				if(data.answer_4!=null){
					nb_votes += data.nb_answer_4;
					list.push({name : "reponse_4" , vote : data.nb_answer_4})
				}
				var voteMax =  _.max(list, function(reponse){ return reponse.vote; });
				var voteMin =  _.min(list, function(reponse){ return reponse.vote; });
			}

			item.set({
				id : 		    data.id2,
				version : 		data.version, 
				type : 			data.type,
				itemId : 		data.id2,
				socialId : 		data.id,
				image : 		data.image,
				duration : 		data.length,
				begin_date : 	data.begin_date,
				title : 		data.title,
				subtitle : 		data.subtitle,
				content : 		data.content,
				type_social : 	data.type_social,
				type_video:     data.type_video, 
				nickname : 		data.nickname,
				date : 			parseInt(data.date)*1000,
				media : 		data.media,
				video : 		data.video,
				copyright : 	data.copyright,
				bitly : 		data.bitly,
				answer_1 : 		data.answer_1,
				answer_2 : 		data.answer_2,
				answer_3 : 		data.answer_3,
				answer_4 : 		data.answer_4,
				nb_answer_1 : 	data.nb_answer_1,
				nb_answer_2 : 	data.nb_answer_2,
				nb_answer_3 : 	data.nb_answer_3,
				nb_answer_4 : 	data.nb_answer_4,
				timestamp : 	data.timestamp*1000
			});
			if(data.type == "son"){
				if(data.nb_answer_1==voteMax.vote){
					c1 = 'most';
				}else if(data.nb_answer_1==voteMin.vote){
					c1 = 'least';
				}else{
					c1 = '';					
				}
				if(data.nb_answer_2==voteMax.vote){
					c2 = 'most';					
				}else if(data.nb_answer_2==voteMin.vote){
					c2 = 'least';
				}else{
					c2 = '';					
				}
				if(data.nb_answer_3==voteMax.vote){
					c3 = 'most';					
				}else if(data.nb_answer_3==voteMin.vote){
					c3 = 'least';
				}else{
					c3 = '';					
				}
				if(data.nb_answer_4==voteMax.vote){
					c4 = 'most';
				}else if(data.nb_answer_4==voteMin.vote){
					c4 = 'least';
				}else{
					c4 = '';					
				}
				item.set({
					nb_votes : 		nb_votes,
					p_answer_1 : 	Math.round((data.nb_answer_1/nb_votes)*100),
					p_answer_2 : 	Math.round((data.nb_answer_2/nb_votes)*100),
					p_answer_3 : 	Math.round((data.nb_answer_3/nb_votes)*100),
					p_answer_4 : 	Math.round((data.nb_answer_4/nb_votes)*100),
					c_answer_1 : 	c1,
					c_answer_2 : 	c2,
					c_answer_3 : 	c3,
					c_answer_4 : 	c4,
				})
			}
			return item;
		}
	});



	/**
	 * Vue Slider Navigation
	 */
	VsliderNavigation = Backbone.View.extend({
		initialize : function(){
			this.template = $('#template-slider-navigation').html();
		},
		render : function(){
			$('#dynamicEditorial').append(_.template(this.template));
			return this;
		}
	});

	/**
	 * Vue Slider Menu
	 */
	VsliderMenu = Backbone.View.extend({
		initialize : function(){
			this.template = $('#template-slider-menu').html();
		},
		render : function(){
			$('#dynamicEditorial').append(_.template(this.template));
			return this;
		}
	});

	/**
	 * Vue Slider
	 */
	Vslider = Backbone.View.extend({
		timelineItemTemplate : "#template-timeline-item",
		events:{
			/*
			"click #navCarousel #prev" 						: 	"carouselPrevious",
			"click #navCarousel #next" 						: 	"carouselNext",
			"click #sliderMenu ul li.sliderAction.on" 		: 	"sliderActionHandle",
			"click #sliderMenu ul li.pushButton" 			: 	"pushButtonHandle",
			"click .sondageQuestionSlide .options .option" 	: 	"voteHandle",
			"click .fbSlideShare" 							: 	"fbShareThis",
			"click .active .transparent" 					: 	"popInfake"
			 */
			"click .timeline-thumb" : "changeSlide"
		},
		initialize : function(){
			var self = this;
			this.template = $('#template-slider').html();
			this.model = new Mslider();
			this.collection = new Cslider();
			
			this.collection.on('add',function(item){
				self.addItem(item);
			});
			this.collection.on('item:change',function(item, pos){
				self.changeItem(item, pos);
			});
			this.collection.on('remove',function(item){
				self.removeItem(item);
			});
			this.collection.on('itemsRemoved',function(last){
				self._goToSlide(last);
			})
			this.collection.on('lastItemLoaded', function(){
				self.lastItemLoaded();
			})
			socialTV.mainSliderConfig.before=function(slider){ // L'item actif n'est pas toujours correctement setté sur la timeline quand on navigue avec les flèches du main slider
						//console.log('before', slider.animatingTo, slider.slides.length);
	    				$('#slider-timeline ul li.flex-active-slide').removeClass('flex-active-slide');
	    				$(slider.slides[slider.animatingTo]).addClass('flex-active-slide');

	    				appLauncher.vent.trigger('slider:changeSlide'); //prévient les views d'un changement de slide (si view video -> mettre en pause)
	    			};
			socialTV.mainSliderConfig.after = function(slider){
				var itemId = "#" + $('#slider-main .flex-active-slide').attr('id');
				// retire le label 'nouveau' de la TL quand un slide est vu
				$(itemId+"-thumb").removeClass('new');
				//lazy loading des images edito
				self._lazyload(itemId);
				var slideTitle = encodeURIComponent($(itemId + " .item-content .title").text());
				var slideType = itemId.replace('#','').split('_')[0];
				$(itemId + ' img.tagXiti').remove();
				$(itemId).append('<img class="tagXiti" width="1" height="1" alt="" src="http://logc238.xiti.com/hit.xiti?s='+xtsite+'&s2='+xtn2+'&p=SocialTV::notification::on_air::'+slideType+'/'+slideTitle+'&tag='+xt_tags+'&time='+Date.now()+'" />');
			}

		},
		render : function(slideId){
			var self = this;
			this.$el.html(_.template(this.template));
			this.slideTarget = slideId;
			this.timelineSlider = $('#slider-timeline').flexslider(socialTV.timelineSliderConfig).data().flexslider;
			//console.log(this.timelineSlider.asNavFor);
			this.slider = $('#slider-main').flexslider(socialTV.mainSliderConfig).data().flexslider;
			if (socialTV.isIpad()) {
				$('#slider-main .flex-direction-nav').remove();
			}
			return this;
		},
		refreshSlider : function(){
			//socialTV.mySwiper.destroy();
			//socialTV.mySwiper = new Swiper('.swiper-container',socialTV.mySwiper.options);
			return this;
		},
		/*
		*	Appellé à l'ajout d'un item dans la collection
		*/ 
		addItem : function(item){
			var self = this;
			var itemStr = '<li id="'+item.id+'"></li>';
			var newItem = (appLauncher.timer.isRefreshing) ? "" : "new";
			var timelineItem = $.parseHTML( _.template($(self.timelineItemTemplate).html(), {model:item, newItem : newItem}) );
			self.timelineSlider.addSlide(timelineItem);
			self.slider.addSlide(itemStr);
			//self._goToSlide(self.slider.last);
			self._offsetTimeline(self.timelineSlider.slides.length);
			self._updateDates();
			$('.timeline-background').width(self.timelineSlider.itemW * self.timelineSlider.slides.length - 100);
			//console.log('addItem',item.get('type'))
			switch(item.get('type')){
				case "ed":
					switch(item.get('media')){
						case "grande_image":
							new VsliderItemImage({model:item,elId:item.id});
						break;
						case "video":
							new VsliderItemVideo({model:item,elId:item.id});
						break;
						default:
							new VsliderItemEdito({model:item,elId:item.id});
						break;
					}	
				break;
				case "son":
					new VsliderItemSondage({model:item,elId:item.id});
				break;
				case "soc":
					new VsliderItemSocial({model:item,elId:item.id});
				break;
			}
		},
		/*
		*	Appellé à la modification d'un item de la collection (edition de données et/ou de position d'un slide)
		*/
		changeItem : function(item, pos){
			var self = this;
			var oldIndex = self.slider.slides.index($('#'+item.id));
			if (pos != oldIndex) {
				var slideStr = self.slider.slides[oldIndex];
				self.slider.removeSlide(oldIndex);
				self.timelineSlider.removeSlide(oldIndex);

				var timelineItem = $.parseHTML( _.template($(self.timelineItemTemplate).html(), {model:item, newItem : ""}) );
				if (pos > self.slider.last) {
					self.slider.addSlide(slideStr);
					self.timelineSlider.addSlide(timelineItem);
				} else {
					self.slider.addSlide(slideStr, pos);
					self.timelineSlider.addSlide(timelineItem, pos);
				}
				
				
				self._updateDates();
				$('#slider-timeline ul li.flex-active-slide').removeClass('flex-active-slide');
				self._goToSlide(self.slider.last);
			}

			if (pos == self.slider.currentSlide) {
				self._lazyload('#'+item.id);
			}
		},
		/*
		*	Appellé à la suppression d'un item de la collection
		*/
		removeItem : function(item){
			var self= this;
			self.timelineSlider.removeSlide($('#'+item.id+'-thumb'));
			self.slider.removeSlide($('#'+item.id));
			self._offsetTimeline(self.timelineSlider.slides.length);
			//self._goToSlide(self.slider.last);
			var bgWidth = self.timelineSlider.itemW * self.timelineSlider.slides.length - 100
			bgWidth = (bgWidth >= 0)?bgWidth : 0;
			$('.timeline-background').width(bgWidth);
			if(self.slider.slides.length == 0) {
				$('.timeline-controls .flex-next').addClass('flex-disabled');
			}
		},
		/*
		*	Appellé après l'ajout/supression d'un groupe d'items
		*/
		lastItemLoaded : function(){
			var self = this;
			if (appLauncher.timer.isRefreshing) { // On saute à la dernière slide publiée
				var target = 0;
				if (this.slideTarget) {
					target = self.slider.slides.index($('#'+this.slideTarget));
					target = (target <= self.slider.last && target >= 0) ? target : self.slider.last;
					this.slideTarget = null;
				} else {
					target = self.slider.last;
				}
				// Curieux bug qu'on fixe ici
				if (self.slider.currentSlide > self.slider.last) {
					self.slider.currentSlide = self.slider.last;
					self.slider.animatingTo = self.slider.last;
				}
				self._goToSlide(target);
			} else { // On ne déplace que la TL pour afficher la dernière page
				self.timelineSlider.flexAnimate(self.timelineSlider.last, true, true, false);
			}

		},
		/*
		*	Appellé lors du clic sur un item de la timeline pour faire bouger le main slider
		*/
		changeSlide : function(event){
			var self = this;
			//console.log("change slide");
			if (!self.slider.animating) {
				var slideIndex = this.timelineSlider.slides.index(event.target);
				if (slideIndex == -1) {
					slideIndex = this.timelineSlider.slides.index(event.target.parentElement);
				}
				self._goToSlide(slideIndex);
			}
		},
		/*
		* décale les items de la timeline vers la droite si il n'y en a pas assez pour remplir la TL
		*/
		_offsetTimeline : function(nbSlides){
			if (nbSlides <= 4) {
				var tlPadding = 500 - nbSlides * 100;
				$('#slider-timeline .slides').css('margin-left',tlPadding);
			} else {
				$('#slider-timeline .slides').css('margin-left',0);
			}
		},
		/*
		* déplace le slider sur un élément donné (bypasse certains bugs de flexslider)
		*/
		_goToSlide : function(slideIndex){
			var currentSlide = this.slider.currentSlide;
			//console.log('go to slide ' + slideIndex);
			slideIndex = (slideIndex < 0) ? 0 : slideIndex;
			$('#slider-timeline ul li.flex-active-slide').removeClass('flex-active-slide');
			// 'Fix' de bugs de flexslider (slide d'une extrémité à l'autre)
			this.slider.flexAnimate(slideIndex, true, true, true);
			// 'Fix' d'un autre bug (slide active incorrectement affichée sur la TL)
			$(this.timelineSlider.slides[slideIndex]).addClass('flex-active-slide');
		},
		/*
		*	Met à jour l'affichage des ages des items de la timeline
		*/
		_updateDates : function(){
			var self = this;
			//console.log(self);
			//console.log(self.collection);
			_.each(self.collection.models, function(item, k){
				var thumbId = item.id+'-thumb';
				var age = self._readableDate(item.attributes.timestamp, appLauncher.timer.horloge)
				$('#' + thumbId + ' .date-slide').html(age);
			});
		},
		_lazyload : function(itemId){
			$(itemId+ ' img.lazy').attr('src', $(itemId+ ' img.lazy').attr('data-src')).removeAttr('data-src').load(function(){$(this).removeClass('lazy')});
		},
		/*
		*	Formatte une différence de dates (ex : 1m, 3h, 5s, ...)
		*/
		_readableDate : function(past, now){
			var ret = Math.round((now - past)/1000);
			var suffix = '';
			var prefix = 'il y a '
			if(ret>86400){
				ret = Math.round(ret/86400);
				suffix = 'j';
			}else if(ret>3600){
				ret = Math.round(ret/3600);
				suffix = 'h';
			}else if(ret>60){
				ret = Math.round(ret/60);
				suffix = 'm';
			}else{
				prefix = '';
				ret = 'maintenant';
			} 
			return prefix+ret+suffix;
		}

	});
});