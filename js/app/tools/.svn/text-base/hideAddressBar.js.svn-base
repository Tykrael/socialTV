var isAndroid=false;
var viewportwidth = 0;
/*=======================================================================================================================================*\
	On vas traiter ici le redimensionnement automatique avec le scale du viewport
\*=======================================================================================================================================*/
$(document).ready(function(){
	
	if (isTablet){
		alert('is tablet')
		setTimeout( function(){ window.scrollTo(0, 1); }, 2000 );
		document.addEventListener("touchmove", function(e){e.preventDefault();}); //A remettre pour empecher le scroll sur la page
	}

	var viewportmeta = document.querySelector('meta[name="viewport"]');
	var ua = navigator.userAgent.toLowerCase();
	isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid){
	/*----------------------------------------------------------------------------*\
		Redimensionnement au chargement pour android galaxyTab 10
	\*----------------------------------------------------------------------------*/
		if(window.localStorage.getItem('orgWidth')==null){
			orgWidth=screen.width;
			orgHeight=screen.height;
			window.localStorage.setItem('orgWidth',orgWidth)
			window.localStorage.setItem('orgHeight',orgHeight)
		} else {
			orgWidth=parseInt(window.localStorage.getItem('orgWidth'));
			orgHeight=parseInt(window.localStorage.getItem('orgHeight'));
			if(orgWidth<screen.width){
				orgWidth=screen.width;
				orgHeight=screen.height;
				window.localStorage.setItem('orgWidth',orgWidth)
				window.localStorage.setItem('orgHeight',orgHeight)
			}
		}
		function reScale(){
			var vpHeight = 768;
			switch(window.orientation){
				case 0:
				case 180:
					var vpWidth = 1400;
					var nScale=screen.width/vpWidth;
					var transx=((orgWidth-vpWidth)/2)/nScale;
					var transy=((orgHeight-vpHeight)/2)/nScale;
				break;
				case 90:
				case -90:
					var vpWidth = 1024;
					var nScale=screen.width/vpWidth;
					var transx = ((screen.width-vpWidth)/2)/nScale;//'-145'//((vpWidth-orgWidth)/2)*nScale//((screen.width-vpWidth)/2)/nScale
					var transy = ((orgHeight-vpHeight)/2)/nScale;
				break;
			}
			if(orgHeight/vpHeight<nScale){
				nScale=orgHeight/vpHeight;
			}
			if(orgHeight/nScale-vpHeight>0){
				transy=transy-(orgHeight/nScale-768)/2
			}
			if(nScale!=1){
				document.getElementById('body').style.webkitTransform="scale("+nScale+","+nScale+") translate("+transx+"px, "+transy+"px)";
				document.getElementById('body').style.width=vpWidth+"px";
			}
		}
		reScale();
	/*----------------------------------------------------------------------------*\
		Redimensionnement sur le orientationchange
	\*----------------------------------------------------------------------------*/
		$(window).bind('orientationchange', function(){
			reScale();
		});
	} else {
	/*----------------------------------------------------------------------------*\
		Redimensionnement au chargement pour iPad
	\*----------------------------------------------------------------------------*/
		viewportmeta.content = 'width=1024, user-scalable=no';
	/*----------------------------------------------------------------------------*\
		Redimensionnement sur le orientationchange
	\*----------------------------------------------------------------------------*/
		$(document).bind('orientationchange', function(){//iPad
			switch(window.orientation){
				case 0: case 180: viewportwidth = 800;break;
				case 90: case -90: viewportwidth= 1024;break;
			}
			viewportmeta.content = 'width='+viewportwidth+', user-scalable=no';
		});
	}
	var orgWidth;
	var orgHeight;



})