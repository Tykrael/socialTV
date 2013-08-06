define([
	'jquery'
	],function($){
		/* SBLA AJOUT METHOD AU PROTO STRING POUR FORMATTER LES TWEETS */
	String.prototype.parseHashtag = function(){
		return this.replace(/[#]+[A-Za-z0-9-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ_]+/g, function(t) {
			var tag = t.replace('#','');
			return '<a class="extern" href="http://twitter.com/hashtag/'+tag+'" target="_blank">#'+tag+'</a>';
		});
	};

	String.prototype.parseTweetAuthor = function(){
		return this.replace(/@(\w+)/gm,'<a class="extern" href="http://twitter.com/$1" target="_blank">@$1</a>');
	};

	String.prototype.parseTweetLinks = function(){
		return this.replace(/((ftp|http|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.-]*(\?\S+)?)?)?)/gm,'<a href="$1" class="extern" target="_blank">$1</a>');
	};

	/* Ajout de la méthode Object.keys() pour parser le JSON pour les navigateurs qui ne l'implementent pas */

	Object.keys = Object.keys || (function () {
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !{toString:null}.propertyIsEnumerable("toString"),
			DontEnums = [ 
				'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty',
				'isPrototypeOf', 'propertyIsEnumerable', 'constructor'
			],
			DontEnumsLength = DontEnums.length;

		return function (o) {
			if (typeof o != "object" && typeof o != "function" || o === null)
				throw new TypeError("Object.keys called on a non-object");

		var result = [];
		for (var name in o) {
			if (hasOwnProperty.call(o, name))
				result.push(name);
			}

			if (hasDontEnumBug) {
				for (var i = 0; i < DontEnumsLength; i++) {
					if (hasOwnProperty.call(o, DontEnums[i]))
						result.push(DontEnums[i]);
				}   
			}

			return result;
		};
	})();

	socialTV.isIpad = function(){ // (ou iphone, ou android hein, on est ouverts d'esprit)
		return (navigator.platform.indexOf("iPad") != -1)	||
			   (navigator.platform.indexOf("iPhone") != -1) ||
			   (navigator.platform.indexOf("iPod") != -1) 	||
			   (navigator.platform.indexOf("android") != -1);
	}

	function parseUri (str) {
		var	o   = parseUri.options,
			m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
			uri = {},
			i   = 14;

		while (i--) uri[o.key[i]] = m[i] || "";

		uri[o.q.name] = {};
		uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
			if ($1) uri[o.q.name][$1] = $2;
		});

		return uri;
	};

	socialTV.wording = {};
	socialTV.wording.snapShareFbTitle = "Vu à l'instant sur " + socialTV.readableTitle;
	socialTV.wording.snapShareFbBody = "Extrait de l'émission capturé en direct via " + socialTV.readableTitle;
	socialTV.wording.snapShareTw = function(videoUrl){
		return "http://twitter.com/intent/tweet?original_referer="+socialTV.global.socialShort+"&text=Vu%20%C3%A0%20l'instant%20sur%20"+encodeURIComponent(socialTV.global.htag_twitter.replace('@', ''))+"&url="+ encodeURIComponent(videoUrl);
	};
	socialTV.wording.snapShareMailto = function(videoUrl, snapDate, snapTime){
		return 'mailto:?subject=Voici%20mon%20extrait%20vid%C3%A9o%20de%20%22'+encodeURIComponent(socialTV.readableTitle)+'%22%20captur%C3%A9%20%C3%A0%20l\'instant'+
				'&body=Mon%20extrait%20vid%C3%A9o%20%22'+encodeURIComponent(socialTV.readableTitle)+'%22%20du%20'+encodeURIComponent(snapDate)+'%20%C3%A0%20'+encodeURIComponent(snapTime)+'%0A%0D%0A%0D'+encodeURIComponent(videoUrl);
	}
	socialTV.wording.snapShareCC = "";

	socialTV.isLocalStorageEnabled = true;
	// Teste si le localStorage est dispo (pour Safari iOs 5 en navigation privée par ex)
	try {
		localStorage['_tmptest'] = 'tmpval';
		localStorage.removeItem('_tmptest');
	}catch(localStorageError){
		socialTV.isLocalStorageEnabled = false;
	}

	parseUri.options = {
		strictMode: false,
		key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
		q:   {
			name:   "queryKey",
			parser: /(?:^|&)([^&=]*)=?([^&]*)/g
		},
		parser: {
			strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
			loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
		}
	};
});