require.config( {
	baseUrl :  URL_STATIC_RES + '/js/app/',
	paths:{
		jquery          :  URL_STATIC_RES + '/js/lib/jquery/jquery-1.9.1.min',
		videojs			:  URL_STATIC_RES + '/js/lib/video-js/video.min',
		fbplugin		:  URL_STATIC_RES + '/js/app/tools/fbplugin',
		webfont			:  URL_STATIC_RES + '/js/lib/webfont/webfont',
		zeroclipboard 	:  URL_STATIC_RES + '/js/lib/zeroclipboard/jquery.zclip',
		swfobject		:  URL_STATIC_RES + '/js/lib/swfobject/swfobject',
		globals         :  URL_STATIC_RES + '/js/app/globals',
		snapplayer		:  URL_STATIC_RES + '/js/app/tools/snap-player'
	},
	shim: {
		jquery : { exports : '$' },
		zeroclipboard : {
			deps:['jquery']
		},
		snapplayer : {
			deps:['jquery', 'videojs']
		}
	}
} );

require([
	"jquery",
	"videojs",
	"fbplugin",
	"webfont",
	"zeroclipboard",
	"swfobject",
	"globals",
	"snapplayer"
	],function($){
		WebFont.load({
			custom: { 
				families: ['heldR', 'heldRI', 'heldD', 'heldDI', 'heldB','clan-bla-webfont'],
				urls: [ 
					//URL_STATIC_RES + '/css/fonts/ft-heldustry_regular.css',
					//URL_STATIC_RES + '/css/fonts/ft-heldustry_regular_italic.css',
					URL_STATIC_RES + '/css/fonts/ft-heldustry_demi.css',
					//URL_STATIC_RES + '/css/fonts/ft-heldustry_demi_italic.css',
					//URL_STATIC_RES + '/css/fonts/ft-heldustry_black.css',
					//URL_STATIC_RES + '/css/fonts/ft-clan_bla.css'
				]
			}
		});
		_V_.options.flash.swf = URL_STATIC_RES + '/js/lib/video-js/video-js.swf';
		initSocialIncludes();
		fbAsyncInit();
		var urlSplit = document.location.href.split('/');
		var urlVideo = urlSplit[urlSplit.length -1].replace('#','');
		var url = window.location.href.replace('#','');	
		$('#toCopy').attr('value', url);		
		$('.fbSnapshotShare').on('click', function(e){

			if(!$('.fbSnapshotShare').hasClass('disabled')){				
				var objName = socialTV.wording.snapShareFbTitle;
				var objcaption = '';
				var objDesc = socialTV.wording.snapShareFbBody;
				var objPicture = $('.vjs-poster').attr('src').replace('.jpg','_small.jpg');
				//var objPicture = URL_FACEBOOK + URL_STATIC_RES + '/css/skins/' + socialTV.programTitle + '/img/' + socialTV.programTitle + '.png';
				var sourcePlayer = URL_PATH + "/player.swf?bufferlength=3&lightcolor=FFFFFF&autostart=true&file=http://partagereplay.francetv.fr/France/"+ urlVideo +".mp4&provider=http&frontcolor=CCCCCC&backcolor=333333";
				var obj = {};
				if(socialTV.videoShareEmbed == true) {
					obj = { method: 'feed', link: url, picture: objPicture, source: sourcePlayer, name: objName, caption: objcaption, description: objDesc, type:"video" };
				}else{
					obj = { method: 'feed', link: url, picture: objPicture, name: objName, caption: objcaption, description: objDesc };
				} 
				function callback(response) {  };
				FB.ui(obj, callback);
				return xt_click(this,'C', xtn2, 'SocialTV::snap_video::partage-sur-lien::video_facebook','A');
			}

		});

		var tweetHref = socialTV.wording.snapShareTw(url);
		$('.twSnapshotShare').on('click', function(e){
			
			e.preventDefault();

			var twButton = e.target;
			if (!$('.twSnapshotShare').hasClass('disabled')){
				
				window.open(tweetHref, 'twitterwindow','height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
				return xt_click(this,'C', xtn2, 'SocialTV::snap_video::partage-sur-lien::video_twitter','A');
				
			}
			return false;
		});





		$('.ccSnapshotShare').on('click', function(e){
			if (swfobject.hasFlashPlayerVersion('1')) {
				$('.popin-wrapper').show();
				$(".popin-cc #toCopy").select();
				e.preventDefault();
				setTimeout(function(){
					$('.popin-wrapper').hide();
				}, 3000);
			}
			
			return xt_click(this,'C', xtn2, 'SocialTV::snap_video::partage-sur-lien:video_mail','A')
		});

		$('.closeccButton').on('click', function(){
			$('.popin-wrapper').hide();
		});

		/*_V_.options.techOrder = ["flash","html5"];*/
		if ($('#video-player').length > 0) {
			socialTV.embedSnap('video-player', {
				videoId: urlVideo,
				width: 640,
				height: 360,
				onError: function(){
					$('.snapshotShare').addClass('disabled');
					$('.playVideoError').show();
				},
				onReady: function(){
					$('meta[property="og:image"]').attr('content', $('.vjs-poster').attr('src').replace('.jpg','_small.jpg'));
				}
			});
		} else {
			$('.playVideoError').show();
		}

		// ex 20130128162823_5_8 > 2013/01/28 16:28:23
		var monthsText = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
		var year = urlVideo.substr(0,4);
		console.log(year);
		var month = urlVideo.substr(4,2);
		console.log(month);
		var day = urlVideo.substr(6,2);
		var hour = urlVideo.substr(8,2);
		var minute = urlVideo.substr(10,2);
		var snapDate = day+" "+monthsText[parseInt(month) -1 ]+" "+year;
		console.log(snapDate);
		var snapTime = hour+'h'+minute;
		console.log($('.programDate'));
		$('.programDate').html(snapDate);
		$('.snapTime').append(snapTime);

		function ccSnapshotShare(){
			if(!$('.ccSnapshotShare').hasClass('disabled')){
				$('.cc-popin-wrapper #ccPopin #toCopy').attr('value', url);
				$('.cc-popin-wrapper').show();
				return xt_click(this,'C', xtn2, 'SocialTV::snap_video::partage-sur-lien:video_mail','A');
			}
		}

		if(swfobject.hasFlashPlayerVersion('1')){
				$('.ccSnapshotShare').zclip({
					path:URL_STATIC_RES + '/js/lib/zeroclipboard/ZeroClipboard.swf',
						copy:url,
						afterCopy:function(){}
					});
			} else {
				$('.ccSnapshotShare').attr('href',socialTV.wording.snapShareMailto(url, snapDate, snapTime));
			}
		function initSocialIncludes(){
			var fileref2=document.createElement("script");
			fileref2.setAttribute("src", "http://widgets.twimg.com/j/2/widget.js");
			if (typeof fileref2!="undefined") {
				document.getElementsByTagName("head")[0].appendChild(fileref2);
			}

			var fileref3 = document.createElement("script");
			fileref2.setAttribute("src", "/js/app/tools/fbplugin.js");
			if (typeof fileref3!="undefined") {
				document.getElementsByTagName("head")[0].appendChild(fileref3);
			}

/*			setTimeout(function(){
				var fileref1=document.createElement("script");
				fileref1.setAttribute("type", "text/javascript");
				fileref1.setAttribute("charset", "utf-8");
				fileref1.setAttribute("src", URL_STATIC_RES+  "/js/app/tools/twplugin.js");
				if (typeof fileref1!="undefined") {
					document.getElementsByTagName("head")[0].appendChild(fileref1);
				}
			}, 1000);*/
		}

	
	});