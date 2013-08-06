requirejs.config( {
	baseUrl :  URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js',
	paths:{
		text: 			URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/require/text',
		
		//config:			URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/widgetConfig',
		jquery:			URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/jquery-1.7.2',
		underscore:		URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/underscore/lo-dash-1.0.0.min',
		massrel:		URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/massrel.stream',
		iscroll:		URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/iscroll',
		spinner:		URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/spinner',
		require:		URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/require-2.1.2.min'
	},
	//urlArgs: "bust=" +  (new Date()).getTime(),
	shim : {
		'spinner':{
			deps: ['jquery'],
			exports: 'spinner'
		}
	},
	deps : [/*'config',*/'jquery','underscore','massrel','spinner','iscroll']
} );

define([
	"text!./templates/scroller.html",
	"text!./templates/popin.html",
	"text!./templates/scrollerItem.html",
	"text!./templates/shareForm.html",
	/*'config',*/'jquery','underscore','massrel','spinner','iscroll'
],function(scrollerTmpl,popinTmpl,itemTmpl,shareTmpl){
		return ModuleSocial = function(extConf){
			/**
			 * VARIABLES D'INITIALISATION
			 */
			var myScroll = [];
			var config = {
			    "stream": [
			        {
			            "flux": "ednummr01/stade2",
			            "title": "Flux JO"
			        }
			    ],
			    "limit": 15,
			    "frequency": 5,
			    "share": true,
			    "positionTop": false,
    			"navButtons": false,
			    "popin": false,
			    "element": "#widgetReseauxSociaux",
			    "defaultAvatar": "http://ftv.widgetsocial.local/css/images/picto_facebook_30.png",
			    "titre": "En direct des réseaux sociaux",
			    "htag": {
			    	"facebook" : socialTV.global.htag_facebook,
			    	"twitter" : socialTV.global.htag_twitter
			    },
			    "url": "http://ftv.widgetsocial.local",
			    "apiKeys": {
			        "facebook": "248802901902507",
			        "twitter": null,
			        "disqus": null
			    }
			};
			var templates = {};
			var streams = [];
			var widget = {};
			var module = this;
			var loggedToFacebook = false;



			function facebookConnect(){
				var js, id = 'facebook-jssdk', ref = document.getElementsByTagName('script')[0];
				if (document.getElementById(id)) {return;}
				js = document.createElement('script'); js.id = id; js.async = true;
				js.src = "//connect.facebook.net/en_US/all.js";
				ref.parentNode.insertBefore(js, ref);

				/*FB.init({
					appId      : config.apiKeys.facebook,// App ID
					channelUrl : config.url, // Channel File
					status     : true, // check login status
					cookie     : true, // enable cookies to allow the server to access the session
					xfbml      : true  // parse XFBML
				});
*/
				FB.getLoginStatus(function(response) {
					if (response.authResponse) {
						FB.api({
								method : 'fql.query',
								query : 'SELECT first_name,email, last_name,uid FROM user WHERE uid='
										+ response.authResponse.userID
						},
						function(response) {
							var id = config.apiKeys.facebook;
							$.ajax({
								type : "POST",
								url : "/facebook.php",
								data : "what=facebook&id="
										+ id
										+ "&uid="
										+ response[0].uid
										+ "&email="
										+ response[0].email
										+ "&name="
										+ response[0].first_name
										+ " "
										+ response[0].last_name,
								success : function() {
									document.location.href = voter_pour;
								}
							});
						});
					}
				});
			}

			/**
			 * Fonction d'initialisation du plugin permet le passage d'une config lors de l'initialisation du plugin
			 * @param  {objet} extConf [Configuration externe au plugin]
			 */
			function _initialize(extConf){
				config.stream 			= extConf.stream;
				config.limit 			= extConf.limit;
				config.frequency 		= extConf.frequency;
				config.share 			= extConf.share;
				config.positionTop 		= extConf.positionTop;
				config.navButtons 		= extConf.navButtons;
				config.popin 			= extConf.popin;
				config.element 			= extConf.element;
				config.titre 			= extConf.titre;
				config.htag.facebook	= extConf.htag.facebook;
				config.htag.twitter		= extConf.htag.twitter;
				config.url 				= extConf.url;
				config.defaultAvatar 	= extConf.defaultAvatar;
				config.apiKeys.facebook = extConf.apiKeys.facebook
				config.apiKeys.twitter 	= extConf.apiKeys.twitter;
				config.apiKeys.disqus 	= extConf.apiKeys.disqus;

				templates.scroller 	= scrollerTmpl;
				templates.item 		= itemTmpl;
				templates.popin 	= popinTmpl;
				templates.share 	= shareTmpl;

				facebookConnect();
				_.each(config.stream,function(stream,k){
					var s = new massrel.Stream(stream.flux)
					streams.push(s);
					$(document).on('click','.tab a',function(e){
						e.preventDefault();
						$('.tab').removeClass('active');
						$($(this).parent()).addClass('active')
						myScroll[$(this).attr('href').split('#widgetContainer')[1]].refresh();
						$('.up .v-arrow').fadeOut(800,function(){$(this).addClass("disabled");$(this).parent().addClass("disabled");});
						$('.widgetContainer').hide()
						$($(this).attr('href')).show()
					})

					$(document).on('click','.nav-column a',function(e) {
						var delta = 250;
						var theDirection = $(this).parent()[0].className;
						var direction = "";
						if(theDirection.match("up")){
							direction = "up";
						} else if (theDirection.match("down")){
							direction = "down";
						} else if (theDirection.match("left")){
							direction = "left";
						} else if (theDirection.match("right")){
							direction = "right";
						}
						if (direction=='down') {
							if (!$(this).hasClass('disabled')) {
								myScroll[k].scrollTo(0, delta, 200, true);
							}
						} else if (direction=='up') {
							if (!$(this).hasClass('disabled')) {
								myScroll[k].scrollTo(0, -delta, 200, true);
							}
						} else if (direction=='left') {
							if (!$(this).hasClass('disabled')) {
								myScroll[k].scrollTo(-delta, 0, 200, true);
							}
						} else if (direction=='right') {
							if (!$(this).hasClass('disabled')) {
								myScroll[k].scrollTo(delta, 0, 200, true);
							}
						} 
						else {return false}
						
						return false;

					});
				})

				$('.up .v-arrow').fadeOut(800,function(){$(this).addClass("disabled");$(this).parent().addClass("disabled");});

				$(document).on('click','#popinReseauxSociaux a.close',function (e) {
					$('#popinReseauxSociaux').remove();
					return false;
				});
				$(document).on('click','#popinReseauxSociaux .footer.twitter a',function (e) {
					var twButton = $(e.target).closest('a');
					if (!$(twButton).hasClass('website')){
						e.preventDefault();
						window.open($(twButton).attr('href'), 'twitterwindow','height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
						return false;
					}
				});
				//CLOSE POPIN
				$(document).on('click','#popinReseauxSociaux .mask',function (e) {
					$('#popinReseauxSociaux').remove();
					return false;
				});
				$(document).on('click','.live .post a,.live .post .react .twit a.hashtagLink',function(e){
					e.preventDefault();
				})
					
				$(document).on('click', 'div.react',function () {
					module.popin($(this))
				});

				module.render();
			}



	/*
			function firstPrintPostsTPL(val){
				var template = '<div class="live" rel="post-'+val.messageId+'" style="display:none;"><div class="post"><div class="react" title="reagissez"><div class="row clearfix item">'+
								'<img class="avatar" src="http://'+val.avatar+'" alt="'+val.userName+'" />'+
								'<div class="author"><span class="name tor">'+
								'<a href="http://twitter.com/'+val.userName+'" target="_blank">@'+val.userName+'</a>'+
								'</span>'+
								'<span class="twit">'+val.texto_modif+'</span>'+
								'</div></div><div class="row clearfix footer">'+
								'<div class="time fleft">il y a <span class="ago" data-time="'+val.timestamp+'">'+val.date+'</span></div>';
				if(val.network=='twitter') {
					template += '<div class="twitter fleft clearfix">'+
								'<a class="forward" title="Retweeter" target="_blank" href="https://twitter.com/intent/retweet?tweet_id='+val.messageId+'">Retweeter</a>'+
								'<a class="answer" title="Répondre" target="_blank" href="https://twitter.com/intent/tweet?in_reply_to='+val.messageId+'">Répondre</a>'+
								'</div>';
				} else {
					template += '<div class="facebook fleft clearfix">'+
								'<a onclick="fbShare(); return false;" title="Partager" class="share" target="_self">Partager</a>'+
								'</div>';
				}
				template += '</div><div style="display:none;">'+
							'<div id="novisible_id" style="display:none;">'+val.userId+'</div>'+
							'<div id="novisible_screen_name" style="display:none;">'+val.userName+'</div>'+
							'<div id="network" style="display: none;">'+val.network+'</div>'+
							'<input type="hidden" name="post_id" class="post_id" value="'+val.messageId+'" />'+
							'</div></div>'+
							'<span class="icon-'+val.network+'"></span>'+
							'</div></div>';
				return template;
			}
	*/

	/*
			function printPostsTPL(val,k){
				var template = '<div class="live new new-'+k+'" rel="post-'+val.messageId+'" style="display:none;"><div class="post"><div class="react" title="reagissez"><div class="row clearfix item">'+
								'<img class="avatar" src="http://'+val.avatar+'" alt="'+val.userName+'" />'+
								'<div class="author"><span class="name tor">'+
								'<a href="http://twitter.com/'+val.userName+'" target="_blank">@'+val.userName+'</a>'+
								'</span>'+
								'<span class="twit">'+val.texto_modif+'</span>'+
								'</div></div><div class="row clearfix footer">'+
								'<div class="time fleft">il y a <span class="ago" data-time="'+val.timestamp+'">'+val.date+'</span></div>';
				if(val.network=='twitter') {
					template += '<div class="twitter fleft clearfix">'+
								'<a class="forward" title="Retweeter" target="_blank" href="https://twitter.com/intent/retweet?tweet_id='+val.messageId+'">Retweeter</a>'+
								'<a class="answer" title="Répondre" target="_blank" href="https://twitter.com/intent/tweet?in_reply_to='+val.messageId+'">Répondre</a>'+
								'</div>';
				} else {
					template += '<div class="facebook fleft clearfix">'+
								'<a onclick="fbShare(); return false;" title="Partager" class="share" target="_self">Partager</a>'+
								'</div>';
				}
				template += '</div><div style="display:none;">'+
							'<div id="novisible_id" style="display:none;">'+val.userId+'</div>'+
							'<div id="novisible_screen_name" style="display:none;">'+val.userName+'</div>'+
							'<div id="network" style="display: none;">'+val.network+'</div>'+
							'<input type="hidden" name="post_id" class="post_id" value="'+val.messageId+'" />'+
							'</div></div>'+
							'<span class="icon-'+val.network+'"></span>'+
							'</div></div>';
				return template;
			}
	*/

			function _popin(el){
				var content = {
							"post_id":el.children('.post_id').val(),
							"post":el.html(),
							"type":el.children('#network:hidden').text(),
							"name":el.children('#novisible_screen_name').html(),
							"id":el.children('#novisible_id').html()
						};
				if(!$('#popinReseauxSociaux').length){
					$('body').append(_.template( popinTmpl,content ))
				}
				$('#popinReseauxSociaux').css('left', '0px').css('top', '0px').show();
			}
			function _readableDate(miliseconds){
				if(typeof(appLauncher)!='undefined')
					var today = new Date(appLauncher.timer.horloge).getTime();
				else
					var today = new Date().getTime();
				var ret = Math.round((today - miliseconds)/1000);
				var suffix = 's';
				if(ret>86400){
					ret = Math.round(ret/86400);
					suffix = 'j';
				}else if(ret>3600){
					ret = Math.round(ret/3600);
					suffix = 'h';
				}else if(ret>60){
					ret = Math.round(ret/60);
					suffix = 'm';
				} 
				if(ret<0)
					ret = 0;
				return ret+suffix;
			}

			function strstr(haystack, needle, bool) {
				// http://kevin.vanzonneveld.net
				// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
				// +   bugfixed by: Onno Marsman
				// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
				// *     example 1: strstr('Kevin van Zonneveld', 'van');
				// *     returns 1: 'van Zonneveld'
				// *     example 2: strstr('Kevin van Zonneveld', 'van', true);
				// *     returns 2: 'Kevin '
				// *     example 3: strstr('name@example.com', '@');
				// *     returns 3: '@example.com'
				// *     example 4: strstr('name@example.com', '@', true);
				// *     returns 4: 'name'
				var pos = 0;

				haystack += '';
				pos = haystack.indexOf(needle);
				if (pos == -1) {
					return false;
				} else {
					if (bool) {
						return haystack.substr(0, pos);
					} else {
						return haystack.slice(pos);
					}
				}
			}
			function toggleArrowsOnScrollEnd(obj,direction){
				switch(direction){
					case "Y" :
						var delta = obj.maxScrollY - obj.y;
						var $arrowDownA = $("#"+obj.wrapper.id+" .nav-column.down a");
						var $arrowUpA = $("#"+obj.wrapper.id+" .nav-column.up a");
						if ( obj.y == 0 ){
							//top
							$arrowUpA.addClass("disabled").hide();
							$arrowUpA.parent().addClass("disabled").hide();
							$arrowDownA.removeClass("disabled").show();
						} else if ( Math.abs(obj.maxScrollY) == Math.abs(obj.y) ){
							//bottom
							$arrowUpA.removeClass("disabled").show();
							$arrowUpA.parent().removeClass("disabled").show();
							$arrowDownA.addClass("disabled").hide();
							$arrowDownA.parent().addClass("disabled").hide();
						}else{ 
							$arrowUpA.removeClass("disabled").show();
							$arrowDownA.removeClass("disabled").show();
							$arrowUpA.parent().removeClass("disabled").show();
							$arrowDownA.parent().removeClass("disabled").show();
						};
						break;
					case "X" :
						var delta = obj.maxScrollX - obj.x;
						var $arrowLeftA = $("#"+obj.wrapper.id).siblings("a.arrow.left");
						var $arrowRightA = $("#"+obj.wrapper.id).siblings("a.arrow.right");
						if (obj.wrapper.id != 'scroller_time_line')
						{
							if (  obj.x == 0 ){//left
								$arrowLeftA.addClass("disabled");
								$arrowRightA.removeClass("disabled");
							} else if ( Math.abs(obj.maxScrollX) == Math.abs(obj.x) ){//right
								$arrowLeftA.removeClass("disabled");
								$arrowRightA.addClass("disabled");
							}else{ 
								$arrowLeftA.removeClass("disabled");
								$arrowRightA.removeClass("disabled");
							};
						} else {
							if (  obj.x == 0 ){//left
								$arrowLeftA.addClass("disabled").hide();
								$arrowRightA.removeClass("disabled").show();
							} else if ( Math.abs(obj.maxScrollX) == Math.abs(obj.x) ){//right
								$arrowLeftA.removeClass("disabled").show();
								$arrowRightA.addClass("disabled").hide();
							}else{ 
								$arrowLeftA.removeClass("disabled").show();
								$arrowRightA.removeClass("disabled").show();
							};
						}
						break;
				}
			}
			function initTabs(){
				//if(config.stream.length>1){
					_.each(config.stream,function(stream,k){
						var t = $('<div class="tab"><a href="#widgetContainer'+k+'">'+stream.title+'</a></div>').appendTo(config.element+' header .tabs');
						if(k==0)
							t.addClass('active')
					})
					/*
				}else{
					//$('.tabs').hide();
				}
				*/
			}
			function initPollers(){
				var pollers = [];
				_.each(streams,function(stream,k){
					pollers.push(stream.poller({ limit: config.limit, frequency: config.frequency }))
					var container = $(config.element+' #widgetContainer').clone();
					$(container).attr({'id':'widgetContainer'+k}).hide().appendTo('.widgetWrapper');
				})
				$('#widgetContainer').remove();
				$('#widgetContainer0').show();
				//var poller = stream.a.poller({ limit: config.limit, frequency: config.frequency });
				_.each(pollers,function(poller,k){
					poller.batch(function(status){
						ordered = [];
						while(status.length > 0) {
							ordered.push(status.pop());
						}
						$(document).trigger('newBatch')
						module.newPosts(ordered,k)
					});
					poller.start();
				})
			}

			function initShareZone(){
				
				var template = _.template(templates.share);
				$(config.element+' .share').append(template);
				if (config.positionTop){
					$(config.element).prepend($(config.element+' .share').addClass('top').detach())
					
				}


				/*On affiche les boutons si click sur la zone*/
				$(document).on('click','.widgetSharer .title, #postFormTextArea',function(e){
					if(!$('.shareForm .actionsZone').is(':visible')){
						$('.shareForm .actionsZone').show();
						$('#postFormTextArea').val('#'+config.htag.twitter);
					}
				})
				/*on masque les boutons si on annule*/
				$(document).on('click','.widgetSharer .actions .cancel',function(e){
					$('.countdown, .formContent').hide()
					$('.actionsZone').fadeOut();
					$('.widgetSharer textarea#postFormTextArea').val('');
				})
				/*On calcule le limiter*/
				$(document).on('keyup','#postFormTextArea',function(e){
					var textLen = $("#postFormTextArea").val().length;
					if(textLen>=140){
						$("#postFormTextArea").val($("#postFormTextArea").val().substr(0, 140));
					}
					if(textLen<140){
						$(".countdown").text(140-textLen);
					}else{
						$(".countdown").text(0);
					}
				})
				$(document).on('click','.widgetSharer .actions .ok',function(e){
					var self = this;
					var formType = ($('#postFormTextArea').hasClass('TW'))?'TW':'FB';
					var isFBMessage = (formType == 'FB');
					if (isFBMessage){
						if(loggedToFacebook){
							var body = $('#postFormTextArea').val();
							FB.api('/me/feed', 'post', { message: body }, function(response) {
								module.closeForm();
							});	
						}else{
							FB.login(function (response){
								if(response.status=='connected'){
									var body = $('#postFormTextArea').val();
									FB.api('/me/feed', 'post', { message: body }, function(response) {
										if(typeof(response.id)==='string'){
											$('.actionsZone').fadeOut();
											$('#postFormTextArea').removeClass('active').val('');
										}else{
											//alert('Une erreur s\'est produite lors de votre requête. Veuillez réessayer plus tard.');
										}
									});
								}else{
									//alert('Une erreur s\'est produite lors de votre requête. Veuillez réessayer plus tard.');
								}
							}, {scope: 'publish_stream'});
						}
					}else{
						var url = config.url;
						var text = $('#postFormTextArea').val();
						window.open("http://twitter.com/intent/tweet?original_referer=" + url + "&text="+encodeURIComponent(text), 'Publier', "width=700,height=400");
							module.closeForm();
					}
					$('.formContent').hide();
				})

				$(document).on('click','.widgetSharer .buttons .shareOption',function(e){
					var curTarget = $(e.currentTarget);
					var $ta = $('#postFormTextArea');
					$('.widgetSharer .buttons .shareOption').removeClass('active');
					curTarget.addClass('active');
					var formType = curTarget.attr('id').replace('shareOption', '');
					if(formType =='FB'){
						$('.widgetSharer .title').html($('.widgetSharer .title').data('text')+' sur Facebook')
						$('.countdown').hide()
						if(!$ta.hasClass('FB')){
							$ta.val(''+config.htag.facebook)
							$ta.removeClass('TW')
							$ta.addClass('FB')
						}
					}
					if(formType == 'TW'){
						$('.widgetSharer .title').html($('.widgetSharer .title').data('text')+' sur Twitter')
						$('.countdown').show()
						if(!$ta.hasClass('TW')){
							$ta.val('#'+config.htag.twitter)
							$ta.removeClass('FB')
							$ta.addClass('TW')
						}
					}
				})

			}

			this.render = function(){
				$(config.element).html( _.template(templates.scroller,{"titre":config.titre}));
				$(".up .v-arrow").addClass("disabled");
				$(".itemList").spin("large", "black");
				initTabs();
				initPollers();
				if(config.share)
					initShareZone();

				_.each(streams,function(stream,k){
					var s = new iScroll('widgetContainer'+k,{hScroll:false,vScroll:true, onScrollEnd:function(){ 
						if(config.navButtons){toggleArrowsOnScrollEnd(this,"Y");}  
					} })
					myScroll.push(s);
				})

				$(config.element).bind('mousewheel DOMMouseScroll', function(e) {
					var scrollTo = null;
					if (e.type == 'mousewheel') {
						scrollTo = (e.originalEvent.wheelDelta * -1);
					} else if (e.type == 'DOMMouseScroll') {
						scrollTo = 40 * e.originalEvent.detail;
					}

					if (scrollTo) {
						e.preventDefault();
						$(this).scrollTop(scrollTo + $(this).scrollTop());
					}
				});
			}

			this.newPosts = function(data,index){
				var listPosts = [];
				$.each(data,function(k,val){
					if(typeof(val.facebook_id)!='undefined'){
						var test = new Date(val.created_time);
						var fmtDate = new Date(val.created_time).getTime();
						var d1 = val.created_time.split('T')
						var dd1 = d1[0].split('-');
						var dd2 = d1[1].split('+');
						var ddd2 = dd2[0].split(':')
						var d = new Date(dd1[0],dd1[1]-1,dd1[2],ddd2[0],ddd2[1],ddd2[2]);
						var fmtd = d.getTime();
						var post = {
							"userName":val.from.name,
							"userId":val.from.id,
							"timestamp":fmtd + 3590000,
							"network":val.network,
							"message":val.message,
							"messageId":val.id,
							"avatar" :val.picture,
							"date": _readableDate(fmtd + 3590000),
							"oDate":val.created_time
						};
					}else{
						var d1 = val.created_at.split(' ');
						var d = new Date(d1[1] + ' ' + d1[2] + ', ' + d1[5] + ' ' + d1[3]);
						var fmtDate = new Date(d).getTime();
						var post = {
							"name":val.user.name,				//Ajout SBLA
							"userName":val.user.screen_name,
							"userId":val.user.id_str,
							"timestamp":(fmtDate + 3590000),
							"network":"twitter",
							"message":val.text,
							"messageId":val.entity_id,
							"avatar" :val.user.profile_image_url,
							"date": _readableDate(parseInt(fmtDate)+3590000),
							"oDate":val.created_at
						};
					}
					listPosts.push(post)
				})
				module.printPosts(listPosts,index)
			}
			this.printPosts = function(data,index){
				var firstRun = ($('#widgetContainer'+index+' .itemList').children('.live').length)?false:true;
				$.each(data,function(k,val){
					$(".itemList").spin(false);
					var avatar = val.avatar; avatar =  (avatar === undefined) ? config.defaultAvatar : val.avatar;
					var texto_modif = '';
					if(typeof(val.message)!='undefined'){
						texto_modif = val.message.replace(/((ftp|http|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.-]*(\?\S+)?)?)?)/gm,'<a href="$1" class="hashtagLink" target="_blank" class="twit-color">$1</a>');
						texto_modif = texto_modif.parseHashtag()
						texto_modif = texto_modif.replace(/@(\w+)/gm,'<a class="hashtagLink twit-color" href="http://twitter.com/$1" target="_blank">@$1</a>');
					}
					val.k = k;
					val.avatar = strstr(avatar,"http://");
					val.avatar = val.avatar.substring(7);
					val.texto_modif = texto_modif;

					var template = _.template(templates.item,{"val":val,"k":k});
					if(!firstRun)
						$(template).prependTo('#widgetContainer'+index+' .itemList');
					else{
						$(template).prependTo('#widgetContainer'+index+' .itemList').removeClass('new').removeClass('new-'+k).show(0,function(){
							myScroll[index].refresh();
						});
					}
				})
				if(!firstRun){
					var displayNew = setInterval(function() {
							if($('.new').length){
								$('.new-0').slideDown('slow',function(){
									$(this).removeClass('new').removeClass('new-0')
									for(i=1;i<=$('.new').length;i++){
										$('.new-'+i).removeClass('new-'+i).addClass('new-'+(i-1))
									}
									$(".itemList").children('.live:visible').each(function(k,val){
										$(this).find('.ago').text(_readableDate($(this).find('.ago').attr('data-time')))
										if(k>29)
											$(this).remove();
									})
									myScroll[index].refresh();
								})
							}else{
								clearInterval(displayNew)
							}
					}, 3000);
					//On supprime tous les items >30
					$(".itemList").children('.live:visible').each(function(k,val){
						$(this).find('.ago').text(_readableDate($(this).find('.ago').attr('data-time')))
						if(k>29)
							$(this).remove();
					})
				}
				myScroll[index].refresh();
			}

			this.closeForm = function(){
				//$('.countdown, .formContent').hide()
				//$('.actionsZone').fadeOut();
				$('.widgetSharer textarea#postFormTextArea').val('');
			}

			this.popin = function(el){
				var content = {
							"post_id":el.find('.post_id').val(),
							"post":el.html(),
							"type":el.find('#network:hidden').text(),
							"name":el.find('#novisible_screen_name').html(),
							"id":el.find('#novisible_id').html(),
							"path": config.url
						};
				if(!$('#popinReseauxSociaux').length){
					$('body').append(_.template( templates.popin,content ))
				}
				$('#popinReseauxSociaux').css('left', '0px').css('top', '0px').show();
			}

			_initialize(extConf);
		}


		//On instancie
		//moduleSocial = new ModuleSocial(config);

});

	String.prototype.parseHashtag = function() {
		return this.replace(/[#]+[A-Za-z0-9-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ_]+/g, function(t) {
			var tag = t;
			return '<a class="twit-color" href="https://twitter.com/hashtag/'+tag.split('#')[1]+'" target="_blank">'+tag+'</a>';
		});
	};
	function fbShare() {
		var obj = {
			method: 'feed',
			link:'http://'+window.location.hostname,
			picture: $('#popinFtvTdf #popin-content .content .post').children('.avatar').attr('src'),
			name: $('#popinFtvTdf #popin-content .content .post .author').children('.name').text(),
			caption: $('#popinFtvTdf #popin-content .content .post .author').children('.twit').text()//,
	        //show_error: true
		};

		function callback(response) {
			//On ne fait rien
		}

		FB.ui(obj, callback);
	}