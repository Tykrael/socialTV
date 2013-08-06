require.config( {
	paths:{
		text:'./libs/require/text',
		
		jquery:			'./libs/jquery-1.7.2',
		underscore:		'./libs/underscore/underscore.amd.1.3.3.min',
		massrel:		'./libs/massrel.stream',
		iscroll:		'./libs/iscroll',
		spinner:		'./libs/spinner'
	},
	urlArgs: "bust=" +  (new Date()).getTime()
} );

require([
	"jquery",
	"underscore",
	"text!./templates/scroller.html",
	"text!./templates/popin.html",
	"text!./templates/scrollerFirstItem.html",
	"text!./templates/scrollerItem.html",
	"massrel",
	"iscroll",
	"spinner"
],function($,_,scroller,popin,scrollerFirstItem,scrollerItem,popinTmpl){
/*===============================================================================================================================================================================*\
DEFINITIONS
\*===============================================================================================================================================================================*/
var config = {
	stream : ['massrelevance/glee','ednummr01/flux-jo-sites'],
	limit : 15,
	frequency : 5,
	share : false,
	positionTop : false,
	popin : false
};	
window.fbAsyncInit = function() {
	FB.init({
		appId      : '248802901902507', // App ID
		channelUrl : '//http://widget-tourdefrance.dev.novedia-agency.com/', // Channel File
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		xfbml      : true  // parse XFBML
	});
	// Additional initialization code here
};
/*
Partie partage en haut ou en bas et active inactive
*/
/*===============================================================================================================================================================================*\
/DEFINITIONS
\*===============================================================================================================================================================================*/
/*===============================================================================================================================================================================*\
Widget
\*===============================================================================================================================================================================*/
/*
	var myScroll;
	var stream = {};
	var widget = {};
	if(window.location.hostname=='localhost')
		dir = '/ftv-tdf';
	else
		dir = '';
	var defaultAvatar = 'http://'+window.location.hostname+dir+"/css/images/picto_facebook_30.png";

	if(typeof(config.stream[0]) != 'undefined'){
		stream.a = new massrel.Stream(config.stream[0]);
	}
	if(typeof(config.stream[1]) != 'undefined'){
		stream.b = new massrel.Stream(config.stream[1]);
	}
	if(typeof(config.stream[2]) != 'undefined'){
		stream.c = new massrel.Stream(config.stream[2]);
	}
*/
	(function($,d){
/*------------------------------------------------------------------------------------------------------------------*\
INITIALISATION FACEBOOK
\*------------------------------------------------------------------------------------------------------------------*/
/*
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
		*/
/*------------------------------------------------------------------------------------------------------------------*\
Initialisation template, iscroll, streams
\*------------------------------------------------------------------------------------------------------------------*/
/*
		$('#widgetReseauxSociaux').html(scroller)

		if(config.stream.length>1){
			$('.widgetWrapper .tabs').append('<div class="tab active"><a href="#">Stream 1</a></div><div class="tab"><a href="#">Stream 2</a></div>');
			if(typeof(config.stream[2]) != 'undefined'){
				$('.widgetWrapper .tabs').append('<div class="tab"><a href="#">Stream 3</a></div>');
			}
		}

		$(".up .v-arrow").addClass("disabled");
		$(".itemList").spin("large", "black");
		myScroll = new iScroll('widgetContainer',{hScroll:false,vScroll:true, onScrollEnd:function(){toggleArrowsOnScrollEnd(this,"Y");} });
		var poller = stream.a.poller({ limit: config.limit, frequency: config.frequency });
		poller.batch(function(status){
			ordered = [];
			while(status.length > 0) {
				ordered.push(status.pop());
			}
			$(document).trigger('newBatch')
			widget.newPosts(ordered)
		});
		poller.start();
		$('#widgetReseauxSociaux').bind('mousewheel DOMMouseScroll', function(e) {
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
*/
/*------------------------------------------------------------------------------------------------------------------*\
Affichage du nombre de posts
\*------------------------------------------------------------------------------------------------------------------*/
		/*
		$(document).bind('newBatch',function(){
			$.getJSON("http://tweetriver.com/antuan/test5/meta.json?callback=?",{},function(data) {
				if(!$('#widgetReseauxSociaux .toolbar .dataCount').length)
					$('#widgetReseauxSociaux .toolbar').append('<span class="fright dataCount">'+data.count.approved+' Posts</span>')
				else
					$('#widgetReseauxSociaux .toolbar .dataCount').text(data.count.approved+' Posts')
			});
		})
		*/
/*------------------------------------------------------------------------------------------------------------------*\
Comportements
\*------------------------------------------------------------------------------------------------------------------*/
		/*
		$('#popinReseauxSociaux a.close').live('click', function () {
			$('#popinReseauxSociaux').remove();
			return false;
		});
		//CLOSE POPIN
		$('#popinReseauxSociaux .mask').live('click', function () {
			$('#popinReseauxSociaux').remove();
			return false;
		});
		$('.live .post a,.live .post .react .twit a.hashtagLink').live('click',function(e){
			e.preventDefault();
		})
		$('.live div.react').live('click', function () {
			widget._popin($(this))
		});
		*/
		$('.up .v-arrow').fadeOut(800,function(){$(this).addClass("disabled");$(this).parent().addClass("disabled");});


		$('.nav-column a').bind('click',function(e) {
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
					myScroll.scrollTo(0, delta, 200, true);
				}
			} else if (direction=='up') {
				if (!$(this).hasClass('disabled')) {
					myScroll.scrollTo(0, -delta, 200, true);
				}
			} else if (direction=='left') {
				if (!$(this).hasClass('disabled')) {
					myScroll.scrollTo(-delta, 0, 200, true);
				}
			} else if (direction=='right') {
				if (!$(this).hasClass('disabled')) {
					myScroll.scrollTo(delta, 0, 200, true);
				}
			} 
			else {return false}
			
			return false;

		});
	})(jQuery,document);
/*------------------------------------------------------------------------------------------------------------------*\
Traitement des données objet widget
\*------------------------------------------------------------------------------------------------------------------*/
(function($){
	/*
	widget = {
		newPosts:function(data){
			var listPosts = [];
			var $this = this;
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
					//console.log('fb',fmtd)
					var post = {
						"userName":val.from.name,
						"userId":val.from.id,
						"timestamp":fmtd + 3590000,
						"network":val.network,
						"message":val.message,
						"messageId":val.id,
						"avatar" :val.picture,
						"date":$this._readableDate(fmtd + 3590000),
						"oDate":val.created_time
					};
				}else{
					var d1 = val.created_at.split(' ');
					var d = new Date(d1[1] + ' ' + d1[2] + ', ' + d1[5] + ' ' + d1[3]);
					var fmtDate = new Date(d).getTime();
					//console.log('tw',fmtDate + 3590000)
					var post = {
						"name":val.user.name,				//Ajout SBLA
						"userName":val.user.screen_name,
						"userId":val.user.id_str,
						"timestamp":(fmtDate + 3590000),
						"network":"twitter",
						"message":val.text,
						"messageId":val.entity_id,
						"avatar" :val.user.profile_image_url,
						"date":$this._readableDate(parseInt(fmtDate)+3590000),
						"oDate":val.created_at
					};
				}
				listPosts.push(post)
			})
			if(!$(".itemList").children('.live').length)
				this.firstPrintPosts(listPosts)
			else
				this.printPosts(listPosts)


		},
		firstPrintPosts:function(data){
			//console.log(val)
			var $this = this;
			$.each(data,function(k,val){
				$(".itemList").spin(false);
				var avatar = val.avatar;
					avatar =  (avatar === undefined) ? defaultAvatar : val.avatar;
				var texto_modif = '';
				if(typeof(val.message)!='undefined'){				
					texto_modif = val.message.replace(/((ftp|http|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.-]*(\?\S+)?)?)?)/gm,'<a href="$1" target="_blank" class="twit-color">$1</a>');
					texto_modif = texto_modif.parseHashtag();
					texto_modif = texto_modif.replace(/@(\w+)/gm,'<a class="twit-color" href="http://twitter.com/$1" target="_blank">@$1</a>');
				}
				val.avatar = strstr(avatar,"http://");
				val.avatar = val.avatar.substring(7);
				val.texto_modif = texto_modif;

				var template = _.template(scrollerFirstItem,{"val":val});

				$(template).prependTo('.itemList').show(0,function(){
					myScroll.refresh();
				});
			})
			myScroll.refresh();
		},
		printPosts:function(data){
			//console.log(val)
			var $this = this;
			$.each(data,function(k,val){
				
				$(".itemList").spin(false);
				var avatar = val.avatar; avatar =  (avatar === undefined) ? defaultAvatar : val.avatar;
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

				var template = _.template(scrollerItem,{"val":val,"k":k});

				$(template).prependTo('.itemList');
			})
			var displayNew = setInterval(function() {
					if($('.new').length){
						$('.new-0').slideDown('slow',function(){
							$(this).removeClass('new').removeClass('new-0')
							for(i=1;i<=$('.new').length;i++){
								$('.new-'+i).removeClass('new-'+i).addClass('new-'+(i-1))
							}
							$(".itemList").children('.live:visible').each(function(k,val){
								$(this).find('.ago').text($this._readableDate($(this).find('.ago').attr('data-time')))
								if(k>29)
									$(this).remove();
							})
							myScroll.refresh();
						})
					}else{
						clearInterval(displayNew)
					}
			}, 3000);
			//On supprime tous les items >30
			$(".itemList").children('.live:visible').each(function(k,val){
				$(this).find('.ago').text($this._readableDate($(this).find('.ago').attr('data-time')))
				if(k>29)
					$(this).remove();
			})
			myScroll.refresh();
		},
		_readableDate: function(miliseconds){
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
			if(!$('#popinReseauxSociaux').length){
				$('body').append(_.template( popinTmpl,content ))
			}
			$('#popinReseauxSociaux').css('left', '0px').css('top', '0px').show();
		},
		firstPrintPostsTPL : function(val){
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
		},
		printPostsTPL : function(val,k){
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
	}
	*/
})(jQuery)








/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*\
Fonctions utilisées pour le widget
\*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	/*
	function toggleArrowsOnScrollEnd(obj,direction){
		switch(direction){
			case "Y" :
				var delta = obj.maxScrollY - obj.y;
				var $arrowDownA = $("#"+obj.wrapper.id+" .nav-column.down a");
				var $arrowUpA = $("#"+obj.wrapper.id+" .nav-column.up a");
				//console.log(obj,"     ",obj.maxScrollY, obj.y, delta,"     ",Math.abs(obj.maxScrollY));
				if ( obj.y == 0 ){
					//top
					//console.log("top",obj.maxScrollY, obj.y, delta,"     ",Math.abs(obj.maxScrollY));
					$arrowUpA.addClass("disabled").hide();
					$arrowUpA.parent().addClass("disabled").hide();
					$arrowDownA.removeClass("disabled").show();
				} else if ( Math.abs(obj.maxScrollY) == Math.abs(obj.y) ){
					//console.log("bottom",obj.maxScrollY, obj.y, delta,"     ",Math.abs(obj.maxScrollY));
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
				//console.log('scrollEnd X','left',$arrowLeftA,'right',$arrowRightA);
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
	};
	*/
	function fbShare() {
		var obj = {
			method: 'feed',
			link:'http://'+window.location.hostname,
			picture: $('#popinReseauxSociaux #popin-content .content .post').children('.avatar').attr('src'),
			name: $('#popinReseauxSociaux #popin-content .content .post .author').children('.name').text(),
			caption: $('#popinReseauxSociaux #popin-content .content .post .author').children('.twit').text(),
	        //show_error: true
		};

		function callback(response) {
			//On ne fait rien
		}

		FB.ui(obj, callback);
	}
/*
	String.prototype.parseHashtag = function() {
		return this.replace(/[#]+[A-Za-z0-9-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ_]+/g, function(t) {
			var tag = t;
			return '<a class="twit-color" href="http://search.twitter.com/search?q='+tag+'" target="_blank">'+tag+'</a>';
		});
	};
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
	*/
});
