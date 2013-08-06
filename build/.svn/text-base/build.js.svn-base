{
    baseUrl: "../js/app",
    name: "./master",
    out: "app-built.js",
    optimize : "uglify",
    inlineText: true,
    findNestedDependencies: true,

    paths: {
        master 			: './master',
        jquery 			: '../lib/jquery/jquery-1.9.1.min',
		underscore		: '../lib/backbone/lo-dash-1.0.0.min',
		backbone		: '../lib/backbone/backbone-0.9.2.min',

		add2home        : '../lib/add2home/add2home.min',
		highcharts		: '../lib/highcharts/highcharts',
		flexslider		: '../lib/flexslider/jquery.flexslider',
		videojs			: '../lib/video-js/video.min',
		zeroclipboard	: '../lib/zeroclipboard/jquery.zclip.min', 

		mState 			: './modules/state.model',
		globals         : './globals',
		zoomfix         : './tools/ios-zoom-bug-fix.min',
		localStorage    : './tools/localStorageManager',
		fbplugin        : './tools/fbplugin',

		tools			: './modules/tools',

		vHeader 		: './modules/header.view',
		vFooter 		: './modules/footer.view',
		vSlider 		: './modules/slider.view',

		vWidget 		: './modules/widget.view',
		Widget 			: '../widgets/ftv.widgetSocial/js/widgetSocial'
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
		vHeader: {
			deps: ['underscore', 'jquery', 'backbone']
		},
		vFooter: {
			deps: ['underscore', 'jquery', 'backbone', 'videojs', 'zeroclipboard', './modules/footer.sub.views']
		},
		vSlider: {
			deps: ['underscore', 'jquery', 'backbone', 'mState', 'flexslider', './modules/slider.sub.edito', './modules/slider.sub.image', './modules/slider.sub.video', './modules/slider.sub.sondage', './modules/slider.sub.social']
		},
		/*
		vWidget: {
			deps: ['underscore','jquery'],
            exports : 'vWidget'
		}
		*/
	}
}