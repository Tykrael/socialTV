	require.config( {
		paths:{
			text:'./lib/require/text',
			
			jquery:			'../../lib/jquery/jquery-1.7.2.min',
			underscore:		'./lib/underscore/lodash.0.8.1.min',
			spinner:		'./lib/spinner/spinner',
			massrel:		'./lib/massrelevance/massrel.stream',
			iscroll:		'../../lib/iscroll/iscroll'//,
		}
	} );
	
	require([
		"underscore",
		"jquery",
		"text!templates/scroller.html",
		"text!templates/scrollerFirstItem.html",
		"text!templates/scrollerItem.html",
		"text!templates/popin.html",
		"massrel",
		"iscroll"
	],function(_,$,scroller,scrollerFirstItem,scrollerItem,popinTmpl){
//fgnass.github.com/spin.js#v1.2.5
(function(a,b,c){function g(a,c){var d=b.createElement(a||"div"),e;for(e in c)d[e]=c[e];return d}function h(a){for(var b=1,c=arguments.length;b<c;b++)a.appendChild(arguments[b]);return a}function j(a,b,c,d){var g=["opacity",b,~~(a*100),c,d].join("-"),h=.01+c/d*100,j=Math.max(1-(1-a)/b*(100-h),a),k=f.substring(0,f.indexOf("Animation")).toLowerCase(),l=k&&"-"+k+"-"||"";return e[g]||(i.insertRule("@"+l+"keyframes "+g+"{"+"0%{opacity:"+j+"}"+h+"%{opacity:"+a+"}"+(h+.01)+"%{opacity:1}"+(h+b)%100+"%{opacity:"+a+"}"+"100%{opacity:"+j+"}"+"}",0),e[g]=1),g}function k(a,b){var e=a.style,f,g;if(e[b]!==c)return b;b=b.charAt(0).toUpperCase()+b.slice(1);for(g=0;g<d.length;g++){f=d[g]+b;if(e[f]!==c)return f}}function l(a,b){for(var c in b)a.style[k(a,c)||c]=b[c];return a}function m(a){for(var b=1;b<arguments.length;b++){var d=arguments[b];for(var e in d)a[e]===c&&(a[e]=d[e])}return a}function n(a){var b={x:a.offsetLeft,y:a.offsetTop};while(a=a.offsetParent)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}var d=["webkit","Moz","ms","O"],e={},f,i=function(){var a=g("style");return h(b.getElementsByTagName("head")[0],a),a.sheet||a.styleSheet}(),o={lines:12,length:7,width:5,radius:10,rotate:0,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto"},p=function q(a){if(!this.spin)return new q(a);this.opts=m(a||{},q.defaults,o)};p.defaults={},m(p.prototype,{spin:function(a){this.stop();var b=this,c=b.opts,d=b.el=l(g(0,{className:c.className}),{position:"relative",zIndex:c.zIndex}),e=c.radius+c.length+c.width,h,i;a&&(a.insertBefore(d,a.firstChild||null),i=n(a),h=n(d),l(d,{left:(c.left=="auto"?i.x-h.x+(a.offsetWidth>>1):c.left+e)+"px",top:(c.top=="auto"?i.y-h.y+(a.offsetHeight>>1):c.top+e)+"px"})),d.setAttribute("aria-role","progressbar"),b.lines(d,b.opts);if(!f){var j=0,k=c.fps,m=k/c.speed,o=(1-c.opacity)/(m*c.trail/100),p=m/c.lines;!function q(){j++;for(var a=c.lines;a;a--){var e=Math.max(1-(j+a*p)%m*o,c.opacity);b.opacity(d,c.lines-a,e,c)}b.timeout=b.el&&setTimeout(q,~~(1e3/k))}()}return b},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=c),this},lines:function(a,b){function e(a,d){return l(g(),{position:"absolute",width:b.length+b.width+"px",height:b.width+"px",background:a,boxShadow:d,transformOrigin:"left",transform:"rotate("+~~(360/b.lines*c+b.rotate)+"deg) translate("+b.radius+"px"+",0)",borderRadius:(b.width>>1)+"px"})}var c=0,d;for(;c<b.lines;c++)d=l(g(),{position:"absolute",top:1+~(b.width/2)+"px",transform:b.hwaccel?"translate3d(0,0,0)":"",opacity:b.opacity,animation:f&&j(b.opacity,b.trail,c,b.lines)+" "+1/b.speed+"s linear infinite"}),b.shadow&&h(d,l(e("#000","0 0 4px #000"),{top:"2px"})),h(a,h(d,e(b.color,"0 0 1px rgba(0,0,0,.1)")));return a},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),!function(){function a(a,b){return g("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',b)}var b=l(g("group"),{behavior:"url(#default#VML)"});!k(b,"transform")&&b.adj?(i.addRule(".spin-vml","behavior:url(#default#VML)"),p.prototype.lines=function(b,c){function f(){return l(a("group",{coordsize:e+" "+e,coordorigin:-d+" "+ -d}),{width:e,height:e})}function k(b,e,g){h(i,h(l(f(),{rotation:360/c.lines*b+"deg",left:~~e}),h(l(a("roundrect",{arcsize:1}),{width:d,height:c.width,left:c.radius,top:-c.width>>1,filter:g}),a("fill",{color:c.color,opacity:c.opacity}),a("stroke",{opacity:0}))))}var d=c.length+c.width,e=2*d,g=-(c.width+c.length)*2+"px",i=l(f(),{position:"absolute",top:g,left:g}),j;if(c.shadow)for(j=1;j<=c.lines;j++)k(j,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(j=1;j<=c.lines;j++)k(j);return h(b,i)},p.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}):f=k(b,"animation")}(),a.Spinner=p})(window,document);

(function($) {
	$.fn.spin = function(opts, color) {
		var presets = {"large": { lines: 10, length: 8, width: 4, radius: 8 }};
		if (Spinner){
			return this.each(function(){
				var $this = $(this),data = $this.data();
				if (data.spinner) {data.spinner.stop();delete data.spinner;}
				if (opts !== false){
					if (typeof opts === "string"){if (opts in presets){opts = presets[opts];} else {opts = {};}if (color){opts.color = color;}}
						data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
					}
			});
		} else {throw "Spinner class not available.";}
	};
})(jQuery);
	/*===============================================================================================================================================================================*\
	Widget
	\*===============================================================================================================================================================================*/
		 var myScroll;
		 var myScroll2;
		 var myScroll3;
		if(window.location.hostname=='localhost')
			dir = '/ftv-tdf';
		else
			dir = '';
			
		var defaultAvatar ='./plg/socialModule/res/img/picto_facebook_30.png';//'http://'+window.location.hostname+dir+"/css/images/picto_facebook_30.png";
		var stream = new massrel.Stream(socialTV.massRelevanceUrls[0].value);
		if (socialTV.massRelevanceUrls.length>1)
			var stream2 = new massrel.Stream(socialTV.massRelevanceUrls[1].value);
		if (socialTV.massRelevanceUrls.length>2)
			var stream3 = new massrel.Stream(socialTV.massRelevanceUrls[2].value);
	/*------------------------------------------------------------------------------------------------------------------*\
	Initialisation template, iscroll, streams
	\*------------------------------------------------------------------------------------------------------------------*/
				
		(function($){
			$('#widgetFtvTdf').html(scroller);
			$(".up .v-arrow").addClass("disabled");
			
			$("#tab-content").spin("large", "black");
			
			myScroll = new iScroll('widgetContainer',{
				hScrollbar: false, 
				vScrollbar:true,
				vScroll:true,
				onScrollEnd:function(){/*toggleArrowsOnScrollEnd(this,"Y");*/}
			});
			
			var poller = stream.poller({ limit: 30, frequency: 5 });
			poller.batch(function(status){
				ordered = [];
				while(status.length > 0) {
					ordered.push(status.pop());
				}
				$(document).trigger('newBatch')
				widget.newPosts(ordered, "")
			});
			poller.start();
			
			if (stream2){
				myScroll2 = new iScroll('widgetContainer2',{ 
					hScrollbar: true,
					vScroll:true, 
					onScrollEnd:function(){/*toggleArrowsOnScrollEnd(this,"Y");*/} 
				});
			
				var poller2 = stream2.poller({ limit: 30, frequency: 30 });
				poller2.batch(function(status){
					ordered2 = [];
					while(status.length > 0) {
						ordered2.push(status.pop());
					}
					$(document).trigger('newBatch')
					widget.newPosts(ordered2, "2");
				});
				poller2.start();
			}else{
				$('#widgetContainer2').remove();
			}
			
			if (stream3){
				myScroll3 = new iScroll('widgetContainer3',{ 
					hScrollbar: false,
					vScroll:true, 
					snap:false,
					onScrollEnd:function(){/*toggleArrowsOnScrollEnd(this,"Y");*/} 
				});
				
				var poller3 = stream3.poller({ limit: 30, frequency: 30 });
				poller3.batch(function(status){
					ordered3 = [];
					while(status.length > 0) {
						ordered3.push(status.pop());
					}
					$(document).trigger('newBatch')
					widget.newPosts(ordered3, "3");
				});
				poller3.start();
			}else{
				$('#widgetContainer3').remove();
			}
			if (socialTV.massRelevanceUrls.length>1){
				$('.tabs span').live('click', function(e) {
					var curTarget = $(e.currentTarget);
					$(".tabs span").attr('class', '');
					curTarget.attr('class', 'active');
					
					var target = curTarget.attr('id').replace('socialTab', '');
					
					$('.scroller').hide();
					$('#widgetContainer'+target).show();
					
					myScroll.refresh();
					if (myScroll2)
						myScroll2.refresh();
					if (myScroll3)
						myScroll3.refresh();

					if (massRelevanceUrls.length == 3){
						$('#socialTab2').css('border-left', 'none');
						$('#socialTab2').css('border-right', 'none');
						if (target == '3'){
							$('#socialTab2').css('border-left', '1px solid #888888');
						} else if (target == ''){
							$('#socialTab2').css('border-right', '1px solid #888888');
						}
					}
				});
			}

			$('#widgetFtvTdf').bind('mousewheel DOMMouseScroll', function(e) {
				var scrollTo = null;

				if (e.type == 'mousewheel') {
					scrollTo = (e.originalEvent.wheelDelta * -1);
				}
				else if (e.type == 'DOMMouseScroll') {
					scrollTo = 40 * e.originalEvent.detail;
				}

				if (scrollTo) {
					e.preventDefault();
					$(this).scrollTop(scrollTo + $(this).scrollTop());
				}
			});
		})(jQuery);
		
	/*------------------------------------------------------------------------------------------------------------------*\
	Affichage du nombre de posts
	\*------------------------------------------------------------------------------------------------------------------*/
		(function($){
			function addSeparator(inNumber){
				var text = inNumber + '';
				var result = '';
				for (var i = 1; i<=text.length; i++){
					result = text.charAt(text.length-i) + result;
					if (i%3 == 0)
						result = ' '+result;
				}
				return result;
			}
			
			$(document).bind('newBatch',function(){
				var total = 0;
				if (socialTV.massRelevanceUrls.length>0){
					$.getJSON("http://tweetriver.com/"+socialTV.massRelevanceUrls[0].value+"/meta.json?callback=?",{},function(data) {
						total += data.count.approved;
						
						if (socialTV.massRelevanceUrls.length==2){
							$.getJSON("http://tweetriver.com/"+socialTV.massRelevanceUrls[1].value+"/meta.json?callback=?",{},function(data1) {
								total += data1.count.approved;
								$('#editorial #infosContainer .postCount span.number').html(addSeparator(total));
							});
						} else if (socialTV.massRelevanceUrls.length==3){
							$.getJSON("http://tweetriver.com/"+socialTV.massRelevanceUrls[1].value+"/meta.json?callback=?",{},function(data1) {
								total += data1.count.approved;
								$.getJSON("http://tweetriver.com/"+socialTV.massRelevanceUrls[1].value+"/meta.json?callback=?",{},function(data2) {
									total += data2.count.approved;
									$('#editorial #infosContainer .postCount span.number').html(addSeparator(total));
								});
							});
						}else
							$('#editorial #infosContainer .postCount span.number').html(addSeparator(total));
						
						$('#editorial #infosContainer .postCount .center .label').show();
					});
					
				}
			})
		})(jQuery);
			
	/*------------------------------------------------------------------------------------------------------------------*\
	Comportements
	\*------------------------------------------------------------------------------------------------------------------*/
		(function($){
			$('#popinFtvTdf a.close').live('click', function (e) {
		
				$('#popinFtvTdf').remove();
				return false;
			});
			//CLOSE POPIN
			$('#popinFtvTdf .mask').live('click', function (e) {

				$('#popinFtvTdf').remove();
				return false;
			});
			/*$('#popinFtvTdf .mask').live('touch', function () {
				$('#popinFtvTdf').remove();
				return false;
			});*/
			$('.live .post a,.live .post .react .twit a.hashtagLink').live('click',function(e){
				e.preventDefault();
			})
	
			$('.up .v-arrow').fadeOut(800,function(){$(this).addClass("disabled")});
	
			$('.live div.react').live('click', function () {
				widget._popin($(this))
			});
		})(jQuery);
		
	/*------------------------------------------------------------------------------------------------------------------*\
	Traitement des données objet widget
	\*------------------------------------------------------------------------------------------------------------------*/
		var widget = {
			indexString : "undefined",
			newPosts:function(data, inIndexString){
				this.indexString = inIndexString;
				var listPosts = [];
				var $this = this;
				$.each(data,function(k,val){
					if(typeof(val.facebook_id)!='undefined'){
						var fmtDate = new Date(val.created_time).getTime();
						var d1 = val.created_time.split('T')
						var dd1 = d1[0].split('-')
						var dd2 = d1[1].split('+')
						var d = new Date(dd1[0] + ' ' + dd1[1] + ', ' + dd1[2] + ' ' + dd2[0]);
						var post = {
							"userName":val.from.name,
							"userId":val.from.id,
							"timestamp":fmtDate,
							"network":val.network,
							"message":val.message,
							"messageId":val.id,
							"avatar" :val.picture,
							"date":$this._readableDate(fmtDate),
							"oDate":val.created_time
						};
					}else{
						var d1 = val.created_at.split(' ');
						var d = new Date(d1[1] + ' ' + d1[2] + ', ' + d1[5] + ' ' + d1[3]);
						//var fmtDate = new Date(val.created_at).getTime();
						var fmtDate = new Date(d).getTime();
						
						var post = {
							"name":val.user.name,				//Ajout SBLA
							"userName":val.user.screen_name,
							"userId":val.user.id_str,
							"timestamp":(fmtDate),
							"network":"twitter",
							"message":val.text,
							"messageId":val.entity_id,
							"avatar" :val.user.profile_image_url,
							"date":$this._readableDate(fmtDate),
							"oDate":val.created_at
						};
					}
					listPosts.push(post);
				})
				if(!$("#tab-content"+$this.indexString).children('.live').length){
					this.firstPrintPosts(listPosts)
				}else{
					this.printPosts(listPosts)
				}
			},
			firstPrintPosts:function(data){
				$.each(socialTV.massRelevanceUrls,function(k,val){
					if(k==0){
						if($('#socialTab').length)
							$('#socialTab').html(val.label)
						else
							$('#socialModule .header .tabs').append('<span id="socialTab" class="active">'+val.label+'</span>');
					}else{
						if($('#socialTab'+ (k+1)).length)
							$('#socialTab'+ (k+1)).html(val.label)
						else
							$('#socialModule .header .tabs').append('<span id="socialTab'+ (k+1) +'">'+val.label+'</span>');
					}
				});
				if (socialTV.massRelevanceUrls.length == 3){
					$('#socialTab2').css('border-left', 'none');
					$('#socialTab2').css('border-right', '1px solid #888888');
				}
				var widthToSet = 100;
				
				if (socialTV.massRelevanceUrls.length>1){
					if (socialTV.massRelevanceUrls.length == 3)
						widthToSet = 100;
					else if (socialTV.massRelevanceUrls.length == 2)
						widthToSet = 150;
					widthToSet-=6;//bordures
					
					$('#socialModule .tabs span').css('width', widthToSet+"px");
				}else{
					$('#socialModule .tabs span').css('width', "296px").css('-webkit-border-radius', "0px 0px 0px 0px").css('border-radius', "0px 0px 0px 0px");
				}

				var $this = this;
				
				$.each(data,function(k,val){
					$("#tab-content"+$this.indexString).spin(false);
					var avatar = val.avatar;
						avatar =  (avatar === undefined) ? defaultAvatar : val.avatar;
					var texto_modif = '';
					if(typeof(val.message)!='undefined'){				
						texto_modif = val.message.replace(/((ftp|http|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.-]*(\?\S+)?)?)?)/gm,'<a href="$1" target="_blank" class="twit-bleu">$1</a>');
						texto_modif = texto_modif.parseHashtag();
						texto_modif = texto_modif.replace(/@(\w+)/gm,'<a class="tagLink" href="http://twitter.com/$1" target="_blank">@$1</a>');
					}
					val.k = k;
					val.avatar = avatar;
					val.texto_modif = texto_modif;
					$( _.template( scrollerFirstItem, val )).prependTo('#tab-content'+$this.indexString).show(0,function(){
						setTimeout(
							function(){
								myScroll.refresh();
								if (myScroll2)
									myScroll2.refresh();
								if (myScroll3)
									myScroll3.refresh();
							}, 1000);
					});
				});
				
				myScroll.refresh();
				if (myScroll2)
					myScroll2.refresh();
				if (myScroll3)
					myScroll3.refresh();
				
			},
			printPosts:function(data){
				var $this = this;
				$.each(data,function(k,val){
					
					$("#tab-content"+$this.indexString).spin(false);
					var avatar = val.avatar; avatar =  (avatar === undefined) ? defaultAvatar : val.avatar;
					var texto_modif = '';
					if(typeof(val.message)!='undefined'){
						texto_modif = val.message.replace(/((ftp|http|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.-]*(\?\S+)?)?)?)/gm,'<a href="$1" class="hashtagLink" target="_blank" class="twit-bleu">$1</a>');
						texto_modif = texto_modif.parseHashtag()
						texto_modif = texto_modif.replace(/@(\w+)/gm,'<a class="hashtagLink tagLink" href="http://twitter.com/$1" target="_blank">@$1</a>');
					}
					val.k = k;
					val.avatar = avatar;
					val.texto_modif = texto_modif;
					$( _.template( scrollerItem, val )).prependTo('#tab-content'+$this.indexString);
				})
				var displayNew = setInterval(function() {
						if($('.new').length){
							$('.new-0').slideDown('slow',function(){
								$(this).removeClass('new').removeClass('new-0')
								for(i=1;i<=$('.new').length;i++){
									$('.new-'+i).removeClass('new-'+i).addClass('new-'+(i-1))
								}
								$("#tab-content"+$this.indexString).children('.live:visible').each(function(k,val){
									$(this).find('.ago').text($this._readableDate($(this).find('.ago').attr('data-time')))
									if(k>29)
										$(this).remove();
								})
								myScroll.refresh();
								if (myScroll2)
									myScroll2.refresh();
								if (myScroll3)
									myScroll3.refresh();
							})
						}else{
							clearInterval(displayNew)
						}
				}, 3000);
				//On supprime tous les items >30
				$("#tab-content"+$this.indexString).children('.live:visible').each(function(k,val){
					$(this).find('.ago').text($this._readableDate($(this).find('.ago').attr('data-time')))
					if(k>29)
						$(this).remove();
				});
	
				myScroll.refresh();
				if (myScroll2)
					myScroll2.refresh();
				if (myScroll3)
					myScroll3.refresh();
			},
			_readableDate: function(miliseconds){
					var today = new Date();
					var ret = Math.round((today.getTime() - miliseconds)/1000);
					var suffix = 's';
					if(ret>3600){
						ret = Math.round(ret/3600);
						suffix = 'h';
					}else if(ret>60){
						ret = Math.round(ret/60);
						suffix = 'm';
					} 
					return ret+suffix;
			},
			_popin:function(el){
				var content = {
							"post_id":el.children('.post_id').val(),
							"post":el.html(),
							"type":el.children('#network:hidden').text(),
							"name":el.children('#novisible_screen_name').html(),
							"id":el.children('#novisible_id').html()
						};
				if(!$('#popinFtvTdf').length){
					$('body').append(_.template( popinTmpl,content ))
				}
				$('#popinFtvTdf').css('left', '0px').css('top', '0px').show();
			}
		}
			
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*\
	Fonctions utilisées pour le widget
	\*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
		String.prototype.parseHashtag = function() {
			return this.replace(/[#]+[A-Za-z0-9-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ_]+/g, function(t) {
							  var tag = t;
							  tag = tag.replace("#","");
							  return '<a class="tagLink" href="http://search.twitter.com/search?q='+tag+'" target="_blank">#'+tag+'</a>';
			});
		};
	});
