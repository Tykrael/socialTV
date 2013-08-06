{
    baseUrl: "../js/app",
    name: "master",
    out: "../js/master.min.js",
    optimize : "uglify2",
    inlineText: true,
    findNestedDependencies: true,
    
    paths: {
        //master 			: './master',
        jquery 			: '../lib/jquery/jquery-1.9.1.min',
		underscore		: '../lib/backbone/lo-dash-1.0.1.min',
		backbone		: '../lib/backbone/backbone-0.9.2.min',

		add2home        : '../lib/add2home/add2home.min',
		flexslider		: '../lib/flexslider/jquery.flexslider',
		videojs			: '../lib/video-js/video',
		zeroclipboard	: '../lib/zeroclipboard/jquery.zclip.min', 
		swfobject		: '../lib/swfobject/swfobject',

		mState 			: './modules/state.model',
		globals         : './globals',
		zoomfix         : './tools/ios-zoom-bug-fix.min',
		fbplugin        : './tools/fbplugin',
		snapplayer		: './tools/snap-player',
		webfont			: '../lib/webfont/webfont',

		vHeader 		: './modules/header.view',
		vFooter 		: './modules/footer.view',
		vSlider 		: './modules/slider.view',
		vSplash			: './modules/splash.view',

		vWidget 		: './modules/widget.view',
		Widget 			: '../widgets/ftv.widgetSocial/js/Widget',//js/widgets/ftv.widgetSocial/js/widgetSocial

			text: 			'../widgets/ftv.widgetSocial/js/libs/require/text',
			massrel:		'../widgets/ftv.widgetSocial/js/libs/massrel.stream.2',
			iscroll:		'../widgets/ftv.widgetSocial/js/libs/iscroll.min',
			spinner:		'../widgets/ftv.widgetSocial/js/libs/spinner'
    },
    deps : ['text'],
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
}