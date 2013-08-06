requirejs.config({
	baseUrl :  URL_STATIC_RES + '/js/app/',
	paths:{
		jquery          :  URL_STATIC_RES + '/js/lib/jquery/jquery-1.9.1.min',
		underscore		:  URL_STATIC_RES + '/js/lib/backbone/lo-dash-1.0.1.min',
		backbone		:  URL_STATIC_RES + '/js/lib/backbone/backbone-0.9.2.min',

		mState 			:  URL_STATIC_RES + '/js/app/modules/state.model',

		globals         :  URL_STATIC_RES + '/js/app/globals',
		zoomfix         :  URL_STATIC_RES + '/js/app/tools/ios-zoom-bug-fix.min',
		add2home        :  URL_STATIC_RES + '/js/lib/add2home/add2home.min',
		fbplugin        :  URL_STATIC_RES + '/js/app/tools/fbplugin',
		webfont			:  URL_STATIC_RES + '/js/lib/webfont/webfont',
		
		flexslider		:  URL_STATIC_RES + '/js/lib/flexslider/jquery.flexslider',
		videojs			:  URL_STATIC_RES + '/js/lib/video-js/video',//testé
		zeroclipboard	:  URL_STATIC_RES + '/js/lib/zeroclipboard/jquery.zclip.min',//testé
		swfobject		:  URL_STATIC_RES + '/js/lib/swfobject/swfobject',
		snapplayer		:  URL_STATIC_RES + '/js/app/tools/snap-player',

		vHeader 		:  URL_STATIC_RES + '/js/app/modules/header.view',
		vFooter 		:  URL_STATIC_RES + '/js/app/modules/footer.view',
		vSlider 		:  URL_STATIC_RES + '/js/app/modules/slider.view',
		vSplash			:  URL_STATIC_RES + '/js/app/modules/splash.view',

		vWidget 		:  URL_STATIC_RES + '/js/app/modules/widget.view',
		Widget 			:  URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/Widget',
		//Widget 			:  URL_STATIC_RES + '/build/widget.min'

			text 			: URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/require/text',
			massrel 		: URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/massrel.stream.2',
			iscroll 		: URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/iscroll',
			spinner 		: URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/spinner'
	},
	shim: {
		jquery : { exports : '$' },
		underscore : { exports : '_' },
		backbone: {
            deps: ['underscore', 'jquery'],
            exports : 'Backbone'
        },
		mState: {
			deps: ['underscore', 'jquery', 'backbone'],
			exports : 'mState'
		},
		flexslider : {
			deps:['jquery']
		},
		zeroclipboard : {
			deps:['jquery']
		},
		snapplayer : {
			deps:['jquery', 'videojs', 'underscore','globals']
		},
		vHeader: {
			deps: ['underscore', 'jquery', 'backbone']
		},
		vFooter: {
			deps: ['underscore', 'jquery', 'backbone', 'videojs', 'zeroclipboard', 'swfobject','modules/footer.sub.views']
		},
		vSlider: {
			deps: ['underscore', 'jquery', 'backbone', 'mState', 'flexslider', 'modules/slider.sub.edito', 'modules/slider.sub.image', 'snapplayer', 'modules/slider.sub.video', 'modules/slider.sub.sondage', 'modules/slider.sub.social']
		},
		vWidget: {
			deps: ['underscore','jquery','Widget'],
            exports : 'vWidget'
		},
		Widget: {
			deps: ['underscore', 'jquery', 'text','massrel','iscroll','spinner'],
			exports : 'Widget'
		},
		spinner: {
			deps: ['jquery'],
			exports: 'spinner'
		}
	}
});

require([
	'jquery','underscore','backbone','globals','zoomfix','mState','vSplash','vHeader','vFooter','vSlider','add2home','fbplugin','webfont','vWidget','flexslider'
	],function(){

		WebFont.load({
			custom: { 
				families: [/*'heldR', 'heldRI', */'heldD'/*, 'heldDI', 'heldB','clan-bla-webfont'*/],
				urls: [ 
					//URL_STATIC_RES + '/css/fonts/ft-heldustry_regular.css',
					//URL_STATIC_RES + '/css/fonts/ft-heldustry_regular_italic.css',
					URL_STATIC_RES + '/css/fonts/ft-heldustry_demi.css'
					//URL_STATIC_RES + '/css/fonts/ft-heldustry_demi_italic.css',
					//URL_STATIC_RES + '/css/fonts/ft-heldustry_black.css',
					//URL_STATIC_RES + '/css/fonts/ft-clan_bla.css'
				]
			}
		});

	appLauncher = Backbone.Router.extend({
		routes : {
			':slideId' : 'home',
			'*path' : 'home'
		},
		initialize : function(){
			appLauncher.timer = new Mstate();
			fbAsyncInit();
			v_header = new Vheader({el:"#topBarContainer"});
			v_footer = new Vfooter({el:"#siteFooter"});
			v_widget = new Vwidget({el:"#socialModuleContainer"});
			v_slider = new Vslider({el:"#dynamicEditorialContainer"});
		},
		home : function(slideId){
			v_slider.render(slideId);
			/*if(slideId!=''){
				v_slider.collection.on('lastItemLoaded', function(){
					var index = v_slider.slider.slides.index($('#'+slideId));
					v_slider._goToSlide(index);
				})
			}*/
		}
	});
	
	appLauncher.vent = _.extend({}, Backbone.Events);


	$(function(){
		v_splash = new Vsplash({el:"#splash-container"});
		_V_.options.flash.swf = URL_STATIC_RES + '/js/lib/video-js/video-js.swf';
		router = new appLauncher();
		Backbone.history.start();
		initYouTubeApi();
		initDailymotionApi();
		if(navigator.appName == 'Microsoft Internet Explorer'){
			$.support.cors = true;
			if(!$('body').hasClass('isie')) {
				$('body').addClass('isie');
			}
			return true;
		}else{
			$('body').addClass('noie')
			return false;
		}
	});

	function initYouTubeApi() {
		var tag = document.createElement('script');
		tag.src = "//www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	function initDailymotionApi() {
		var e = document.createElement('script'); e.async = true;
        e.src = document.location.protocol + '//api.dmcdn.net/all.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
        
	}

	dmAsyncInit = function() {
		//console.log('dailymotion api ready');
		socialTV.dailymotionReady = true;
		appLauncher.vent.trigger('dailymotionApiReady');
	}

	onYouTubeIframeAPIReady = function(){
		//console.log('youtube api ready');
		socialTV.youtubeReady = true;
		appLauncher.vent.trigger('youtubeApiReady');
	}
},function(err){
    var failedId = err.requireModules && err.requireModules[0];
    if (failedId === 'jquery') {
        requirejs.undef(failedId);
        requirejs.config({
            paths: {
                jquery: URL_STATIC_RES + '/js/lib/jquery/jquery-1.9.1.min'
            }
        });
        require(['jquery'], function () {});
	}else if (failedId === 'underscore') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        underscore: URL_STATIC_RES + '/js/lib/backbone/lo-dash-1.0.0.min'
		    }
		});
		require(['underscore'], function () {});
	}else if (failedId === 'backbone') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        backbone: URL_STATIC_RES + '/js/lib/backbone/backbone-0.9.2.min'
		    }
		});
		require(['backbone'], function () {});
	}else if (failedId === 'mState') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        mState 			:  URL_STATIC_RES + '/js/app/modules/state.model'
		    }
		});
		require(['mState'], function () {});
	}else if (failedId === 'globals') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        globals         :  URL_STATIC_RES + '/js/app/globals'
		    }
		});
		require(['globals'], function () {});
	}else if (failedId === 'zoomfix') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        zoomfix         :  URL_STATIC_RES + '/js/app/tools/ios-zoom-bug-fix.min'
		    }
		});
		require(['zoomfix'], function () {});
	}else if (failedId === 'add2home') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        add2home        :  URL_STATIC_RES + '/js/lib/add2home/add2home.min'
		    }
		});
		require(['add2home'], function () {});
	}else if (failedId === 'fbplugin') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        fbplugin        :  URL_STATIC_RES + '/js/app/tools/fbplugin'
		    }
		});
		require(['fbplugin'], function () {});
	}else if (failedId === 'webfont') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        webfont			:  URL_STATIC_RES + '/js/lib/webfont/webfont'
		    }
		});
		require(['webfont'], function () {});
	}else if (failedId === 'flexslider') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        flexslider		:  URL_STATIC_RES + '/js/lib/flexslider/jquery.flexslider'
		    }
		});
		require(['flexslider'], function () {});
	}else if (failedId === 'videojs') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        videojs			:  URL_STATIC_RES + '/js/lib/video-js/video.min'
		    }
		});
		require(['videojs'], function () {});
	}else if (failedId === 'zeroclipboard') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        zeroclipboard	:  URL_STATIC_RES + '/js/lib/zeroclipboard/jquery.zclip.min'
		    }
		});
		require(['zeroclipboard'], function () {});
	}else if (failedId === 'vHeader') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        vHeader 		:  URL_STATIC_RES + '/js/app/modules/header.view'
		    }
		});
		require(['vHeader'], function () {});
	}else if (failedId === 'vFooter') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        vFooter 		:  URL_STATIC_RES + '/js/app/modules/footer.view'
		    }
		});
		require(['vFooter'], function () {});
	}else if (failedId === 'vSlider') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        vSlider 		:  URL_STATIC_RES + '/js/app/modules/slider.view'
		    }
		});
		require(['vSlider'], function () {});
	}else if (failedId === 'vSplash') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        vSplash			:  URL_STATIC_RES + '/js/app/modules/splash.view'
		    }
		});
		require(['vSplash'], function () {});
	}else if (failedId === 'vWidget') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        vWidget 		:  URL_STATIC_RES + '/js/app/modules/widget.view'
		    }
		});
		require(['vWidget'], function () {});
	}else if (failedId === 'Widget') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        Widget 			:  URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/Widget'
		    }
		});
		require(['Widget'], function () {});
    }else if (failedId === 'text') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        text 			:  URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/require/text'
		    }
		});
		require(['text'], function () {});
    }else if (failedId === 'massrel') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        massrel 			:  URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/massrel.stream.2'
		    }
		});
		require(['massrel'], function () {});
    }else if (failedId === 'iscroll') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        iscroll 			:  URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/iscroll'
		    }
		});
		require(['iscroll'], function () {});
    }else if (failedId === 'spinner') {
		requirejs.undef(failedId);
		requirejs.config({
		    paths: {
		        spinner 			:  URL_STATIC_RES + '/js/widgets/ftv.widgetSocial/js/libs/spinner'
		    }
		});
		require(['spinner'], function () {});
    }else {
    	console.log('Erreur de chargement des fichiers',failedId)
    }
});


