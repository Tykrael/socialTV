{
    baseUrl: "../js/app",
    name: "../video-share/video-share",
    out: "../js/video-share.min.js",
    optimize : "uglify2",
    inlineText: true,
    findNestedDependencies: true,
   paths:{
		jquery          :  '../lib/jquery/jquery-1.9.1.min',
		videojs			:  '../lib/video-js/video.min',
		fbplugin		:  '../app/tools/fbplugin',
		webfont			:  '../lib/webfont/webfont',
		zeroclipboard 	:  '../lib/zeroclipboard/jquery.zclip',
		swfobject		:  '../lib/swfobject/swfobject',
		globals         :  '../app/globals',
		snapplayer		:  '../app/tools/snap-player'
	},
	deps:["jquery","videojs","fbplugin","webfont","zeroclipboard","swfobject","globals","snapplayer"],
	shim: {
		jquery : { exports : '$' },
		zeroclipboard : {
			deps:['jquery']
		},
		snapplayer : {
			deps:['jquery', 'videojs']
		}
	}
	
}