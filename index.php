<?php
	$url = "http://socialtvv2";
	$dossier = '/fprc';
	$title = 'socialTVV2';
	$domain = 'http://ftv.socialtv.local/fprc/';
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
		<!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<!-- CSS -->
<!-- ========================================================================================================================================================================================================== -->
<!-- CSS -->
<!-- ========================================================================================================================================================================================================== -->
	<link media="screen" rel="stylesheet" type="text/css" href="/js/lib/mediaelement/mediaelementplayer.min.css" />
	<link media="screen" rel="stylesheet" type="text/css" href="/js/lib/swiper/swiper-1.5.css" />
 	<link media="screen" rel="stylesheet" type="text/css" href="/js/lib/add2home/add2home.css" />
	<link media="screen" rel="stylesheet" href="/js/widgets/socialModule/css/master_pluginSocialModule.css" type="text/css" />	

	<link media="screen" rel="stylesheet" href="/css/skins/master.css" type="text/css" />
	<link media="screen" rel="stylesheet" href="/css/skins<?= $dossier ?>/custom.css" type="text/css" />
	<link media="screen" rel="stylesheet" href="/css/master_addon_tablet10pouces.css" type="text/css" />	

	<script type="text/javascript" charset="utf-8">
		var URL_PATH = '<?= $url ?>';
		var URL_FOLDER_NAME = '<?= $dossier ?>';
	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- METAS -->
<!-- ========================================================================================================================================================================================================== -->
	<meta property="og:title" content="<?= $title ?>" />
	<meta property="og:type" content="tv_show" />
	<meta property="og:url" content="<?= $url ?><?= $dossier ?>.fdsfsddsgsgsgsd" />
	<meta property="og:image" content="<?= $url ?>/images<?= $dossier ?>.png" />
	<meta property="og:site_name" content="France TV social TV" />
	<meta property="fb:admins" content="106900949470957" />
	<meta http-equiv="content-language" content="fr-FR" />

	<link rel="shortcut icon" type="image/x-icon" href="/css/skins<?= $dossier ?>/img/favicon.ico">
	<title><?= $title ?> - FranceTV - Plateforme Sociale</title>
<!-- ========================================================================================================================================================================================================== -->
<!-- MOBILES -->
<!-- ========================================================================================================================================================================================================== -->
	<meta id="viewport" name="viewport" content="target-densitydpi=device-dpi, width=device-width" />		
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<link rel="apple-touch-icon" href="/css/skins<?= $dossier ?>/img/icon-72.png" />
<!-- ========================================================================================================================================================================================================== -->
<!-- PLUGIN FACEBOOK -->
<!-- ========================================================================================================================================================================================================== -->

</head>
<body>
	<section id="gWrapper">
		<div id="wrap">
			<div id="main">
				<section id="mainContent">
					<div id="channelLogo"></div>
					<div id="topBarContainer">
					</div>
					<div id="mainAreaContainer">
						<div id="dynamicEditorialContainer"></div>
						<div id="editorialContainer">
							<span class="actions">
								<div class="fb-like" data-href="{{ url }}{{ dossier }}" data-send="false" data-layout="button_count" data-show-faces="false" data-font="arial" data-height="68" data-width="93"></div>
								<a href="https://twitter.com/intent/follow?screen_name=<%= followId %>" ><img src="/css/res/img/edito_share_tw_logo.png" alt=" " /><span>Suivre</span></a>
							</span>
						</div>
					</div>
					<div id="socialModuleContainer">
					</div>
				</section>
			</div>
			<div id="fb-root"></div>
		</div>
	</section>
	<div class="popin-fake"></div>
	<img src="http://logc238.xiti.com/hit.xiti?s=475907&s2=25&p=socialTV::accueil_socialTV&hl=18x19x53&vrn=1&ac=&an=&tag=[SocialTV]|[<?= $dossier ?>]&lng=fr&vtag=42008&idp=1819538345028&jv=1&r=1920x1080x24x24&re=1920x910&ref=" width="1" height="1" />
</body>
<!-- ========================================================================================================================================================================================================== -->
<!-- LIBRARIES -->
<!-- ========================================================================================================================================================================================================== -->
	<!--<script type="text/javascript" charset="utf-8" src="/js/lib/libs.compiled.js"></script>-->
	<script type="text/javascript" charset="utf-8" src="/js/lib/backbone/json2.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/lib/jquery/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/lib/backbone/lo-dash-0.8.1.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/lib/backbone/backbone-0.9.2.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/lib/iscroll/iscroll_4.2.2.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/lib/spinner/spinner.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/lib/highcharts/highcharts.js"></script>

	<script type="text/javascript" charset="utf-8" src="/js/lib/mediaelement/mediaelement-and-player.min.js"></script>

	<script type="text/javascript" charset="utf-8" src="/js/lib/swiper/swiper-1.5.5.min.js"></script>

	<script type="text/javascript" charset="utf-8" src="/js/lib/add2home/add2home.js"></script>
	
	<script type="text/javascript" src="/js/app/tools/ios-zoom-bug-fix.min.js"></script>
<!-- ========================================================================================================================================================================================================== -->
<!-- APPLICATION -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/javascript" charset="utf-8" src="/js/app/tools/localStorageManager.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/app/globals.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/app/modules/view.header.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/app/modules/view.footer.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/app/modules/view.widget.js"></script>
	
	<script data-main="/js/widgets/socialModule/widget.modulesocial.js" src="/js/widgets/socialModule/lib/require/require-2.0.4.min.js"></script>
	
	<script type="text/javascript" charset="utf-8" src="/js/app/modules/view.slider.js"></script>
	<script type="text/javascript" charset="utf-8" src="/js/app/master.js"></script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE HEADER -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/template" id="template-header">
		<section id="topBar">
			<span class="logo"><img src="/css/res/img/logo.png" alt="francetv" /></span>
			<div class="connect rightMenu">
				<span class="label">Se connecter sur :</span>
				<span title="Connection Twitter" id="twConnectButton" class="connectionButton unlogged"> 
					<img src="/css/res/img/topbar_tw_logo.png" alt=" " />
                </span>
		        <span title="Connection Facebook" id="fbConnectButton" class="connectionButton unlogged">
		        	<img src="/css/res/img/topbar_fb_logo.png" alt=" " />
		        </span>
		        <span id="inviteButton"><span class="label">Inviter un ami</span><span class="thumb"><img src="/css/res/img/invite_button_mail.png" alt=" " /></span></span>
			</div>
			<div id="popinDisconnectFb" class="popinDisconnect">
				<div class="popinWrapper">
					<div class="fleche"></div>
					<div class="row user"></div>
					<a href="#" id="disconnectFb">Se déconnecter</a>
				</div>
			</div>
			<div id="popinDisconnectTw" class="popinDisconnect">
				<div class="popinWrapper">
					<div class="fleche"></div>
					<div class="row user"></div>
					<a href="#" id="disconnectTw">Se déconnecter</a>
				</div>
			</div>
		</section>
	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE FOOTER -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/template" id="template-footer">
		<section id="editorial">
			<div id="infosContainer">
				<span class="thumb"><% if (image) print('<img src="'+socialTV.URL+''+image+'" alt="" />'); %></span>
				<span class="content">
					<span class="title"><%= title %></span>
					<span class="description"><%= content %></span>
				</span>
			
				<span class="postCount">
					<img class="left" src="<% print(socialTV.URL) %>/css/res/img/post_count_bg_left.png" />
					<span class="center"><span class="number"></span> <span class="label">posts</span></span>
					<img class="right" src="<% print(socialTV.URL) %>/css/res/img/post_count_bg_right.png" />
				</span>
			</div>
			<div class="facepileContainer">
				<div class="fb-facepile" data-href="<% print(socialTV.SOCIAL_URL) %>" data-size="small" data-max-rows="1" data-width="300" data-height="150"></div>
			</div>
		</section>
	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE WIDGET -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/template" id="template-widget">
		<section id="socialModule">
			<div class="header">
				<div class="title">R&eacute;actions en direct</div>
				<div class="tabs"></div>
			</div>
			<div class="content">
				<div id="widgetFtvTdf"></div>
			</div>
	
			<div class="footerGradient"></div>

			<div class="postForm toggleFormButton footerButton">
			<span class="arrow"></span>
				<span class="comment-picto">Réagir à cette émission</span>

				  	<textarea id="postFormTextArea"  class="input" rows="2" cols="20" placeholder="Poster un tweet ou actualiser mon statut Facebook …" ></textarea>
				  	
				  	<span class="countdown"></span>


				  <div class="postForm formContent clearfix">
					
					<div class="options">
					
						<span class="buttons">
							<span id="shareOptionTW" class="shareOption active"><img alt=" " src="/css/res/img/social_module_post_tw_logo.png" /></span>
							<span id="shareOptionFB"  class="shareOption"><img alt=" " src="/css/res/img/social_module_post_fb_logo.png" /></span>
						</span>
					</div>
					<div class="actions">
						<span class="cancel toggleFormButton">Annuler</span>
						<span class="ok">Envoyer</span>
					</div>
			
			</div>

			</div>
		</section>
 	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE SLIDER -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/template" id="template-slider">
		<section id="dynamicEditorial">
			<section id="carouselContainer" class="carousel">
				<div class="swiper-container">
					<div class="swiper-wrapper"></div>
				</div>
			</section>
		</section>
	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE SLIDER MENU -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/template" id="template-slider-menu">
		<section id="sliderMenuContainer">
			<div id="sliderMenu">
				<ul>
					<li class="sliderAction on" data-categorie="onair"><a href="#"><span id="slider_menu_selection" ><span class="pastille"></span><img src="/css/res/img/slider_menu_picto_selection.png" /></span></a></li>
					<li class="sliderAction" data-categorie="sondage"><a href="#"><span id="slider_menu_sondage" ><span class="pastille"></span><img src="/css/res/img/slider_menu_picto_sondage.png" /></span></a></li>
					<li class="sliderAction" data-categorie="social"><a href="#"><span id="slider_menu_social" ><span class="pastille"></span><img src="/css/res/img/slider_menu_picto_social.png" /></span></a></li>
					<li class="sliderAction" data-categorie="editorial"><a href="#"><span id="slider_menu_edito" ><span class="pastille"></span><img src="/css/res/img/slider_menu_picto_edito.png" /></span></a></li>
				</ul>
				<span class="motifMenu"><img src="/css/res/img/slider_motif_menu.png" /></span>
			</div>
		</section>
	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE SLIDER NAVIGATION -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/template" id="template-slider-navigation">
		<div id="navCarousel">
			<span id="prev"><img alt=" " src="/css/res/img/slider_fleche_left.png" /></span>
			<span id="indicatorContainer"><span class="current"></span><span>/</span><span class="total"></span></span>
			<span id="next"><img alt=" " src="/css/res/img/slider_fleche_right.png" /></span>
		</div>
	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE SLIDER ITEM -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/template" id="template-slider-item">
		<div class="swiper-slide slide-<%= type %>" data-itemId="<%= itemId %>">
			<div class="slide-<%= type %>-content">
				<div class="typePicto"><img alt=" " src="/css/res/img/slider_menu_picto_edito.png" /></div>
				<div class="thumb"><% if (image) print('<img src="'+image+'" alt="" />'); %></div>
				<div class="description">
					<div class="title"><%= title %></div>
					<div class="subtitle"><%= subtitle %></div>
					<div class="content">
						<%= content %>
					</div>
				</div>
				<% if (copyright != null) print('<p class="copyright">'+copyright+'</p>'); %>
				<% if (begin_date != null){
					var myDate = new Date(begin_date*1000);
					var publi = 'le '+myDate.getDate()+"-"+(myDate.getMonth()<9?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1))+"-"+myDate.getFullYear()+" à "+myDate.getHours()+"h"+(myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes());
					print('<p class="publiDate">'+publi+'</p>');

				}  %>
			</div>
			<div class="slide-<%= type %>-actions">
				<div class="fbSlideShare <% if (!socialTV.loggedToFacebook)print('unlogged'); %>">
					<img src="/css/res/img/slide_share_fb.png" />
				</div>
				<div class="twSlideShare">
					<a href="http://twitter.com/intent/tweet?original_referer=<%= socialTV.global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+socialTV.global.htag_twitter.replace('@', '')+' '+title)) %>">
						<img src="/css/res/img/slide_share_tw.png" />
					</a>
				</div>
			</div>
		</div>
	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE SLIDER ITEM EDITO EDITO -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/template" id="template-slider-item-edito">
		<div class="swiper-slide slide-<%= type %>" data-itemId="<%= itemId %>">
			<div class="slide-<%= type %>-content slide-content">
				<% if (type != undefined){ %><div class="picto picto-<%= type %>"></div><% } %>
				<% if (image != undefined){ %><div class="figure"><img src="<?= $domain ?><%= image %>" alt="" /></div><% } %>
				<% if (title != undefined){ %><div class="title"><%= title %></div><% } %>
				<% if (subtitle != undefined){ %><div class="subtitle"><%= subtitle %></div><% } %>
				<% if (content != undefined){ %><div class="content"><%= content %></div><% } %>
				<% if (copyright != undefined){ %><p class="copyright"><%= copyright %></p><% } %>
				<% if (begin_date != undefined){
					var myDate = new Date(begin_date*1000);
					var publi = 'le '+myDate.getDate()+"-"+(myDate.getMonth()<9?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1))+"-"+myDate.getFullYear()+" à "+myDate.getHours()+"h"+(myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes());
					%><p class="date"><%= publi %></p><% } %>
				<div class="actions">
					<div class="fbSlideShare <% if (!socialTV.loggedToFacebook)print('unlogged'); %>"><img src="/css/res/img/slide_share_fb.png" /></div>
					<div class="twSlideShare"><a href="http://twitter.com/intent/tweet?original_referer=<%= socialTV.global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+socialTV.global.htag_twitter.replace('@', '')+' '+title)) %>"><img src="/css/res/img/slide_share_tw.png" /></a></div>
				</div>
			</div>
		</div>
	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE SLIDER ITEM EDITO SONDAGE -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/template" id="template-slider-item-sondage">
		<div class="swiper-slide slide-<%= type %>" data-itemId="<%= itemId %>">
			<div class="slide-<%= type %>-content slide-content">
				<% if (type != undefined){ %><div class="picto picto-<%= type %>"></div><% } %>
				<% if (image != undefined){ %><div class="figure"><img src="<?= $domain ?><%= image %>" alt="" /></div><% } %>
				<% if (title != undefined){ %><div class="title"><%= title %></div><% } %>
				<% if (subtitle != undefined){ %><div class="subtitle"><%= subtitle %></div><% } %>
				<% if (content != undefined){ %><div class="content"><%= content %></div><% } %>
				<% if (copyright != undefined){ %><p class="copyright"><%= copyright %></p><% } %>
				<% if (begin_date != undefined){
					var myDate = new Date(begin_date*1000);
					var publi = 'le '+myDate.getDate()+"-"+(myDate.getMonth()<9?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1))+"-"+myDate.getFullYear()+" à "+myDate.getHours()+"h"+(myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes());
					%><p class="date"><%= publi %></p><% } %>
				<div class="actions">
					<div class="fbSlideShare <% if (!socialTV.loggedToFacebook)print('unlogged'); %>"><img src="/css/res/img/slide_share_fb.png" /></div>
					<div class="twSlideShare"><a href="http://twitter.com/intent/tweet?original_referer=<%= socialTV.global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+socialTV.global.htag_twitter.replace('@', '')+' '+title)) %>"><img src="/css/res/img/slide_share_tw.png" /></a></div>
				</div>
			</div>
		</div>
	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE SLIDER ITEM EDITO SOCIAL -->
<!-- ========================================================================================================================================================================================================== -->
	<script type="text/template" id="template-slider-item-social">
		<div class="swiper-slide slide-<%= type %>" data-itemId="<%= itemId %>">
			<div class="slide-<%= type %>-content slide-content">
				<% if (type != undefined){ %><div class="picto picto-<%= type %>"></div><% } %>
				<% if (image != undefined){ %><div class="thumb"><img src="<?= $domain ?><%= image %>" alt="" /></div><% } %>
				<% if (title != undefined){ %><div class="title"><%= title %></div><% } %>
				<% if (subtitle != undefined){ %><div class="subtitle"><%= subtitle %></div><% } %>
				<% if (content != undefined){ %><div class="content"><%= content %></div><% } %>
				<% if (copyright != undefined){ %><p class="copyright"><%= copyright %></p><% } %>
				<% if (begin_date != undefined){
					var myDate = new Date(begin_date*1000);
					var publi = 'le '+myDate.getDate()+"-"+(myDate.getMonth()<9?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1))+"-"+myDate.getFullYear()+" à "+myDate.getHours()+"h"+(myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes());
					%><p class="publiDate"><%= publi %></p><% } %>
				<div class="actions">
					<div class="fbSlideShare <% if (!socialTV.loggedToFacebook)print('unlogged'); %>"><img src="/css/res/img/slide_share_fb.png" /></div>
					<div class="twSlideShare"><a href="http://twitter.com/intent/tweet?original_referer=<%= socialTV.global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+socialTV.global.htag_twitter.replace('@', '')+' '+title)) %>"><img src="/css/res/img/slide_share_tw.png" /></a></div>
				</div>
			</div>
		</div>
	</script>
<!-- ========================================================================================================================================================================================================== -->
<!-- TEMPLATE SLIDER ITEM -->
<!-- ========================================================================================================================================================================================================== -->




	
	<!-- DYNAMIC EDITORIAL SLIDE TEMPLATE -->
	<script type="text/template" id="template-dynamicEditorialSlideSondageAnswer">
		<li id="slideSondageAnswer_<%= inId %>" data-inId="<%= inId %>">
			<div class="sondageAnswerSlide">
				<span class="typePicto"><img alt=" " src="/css/res/img/slider_menu_picto_sondage.png" /></span>
				<span class="thumb"><% if (image) print('<img src="'+image+'" alt="" />'); %></span>
				<span class="content"><%= title %></span>
				
				<div class='diagramContainer'>
					<span id="slideSondageAnswerDiagram_<%= inId %>" class="diagram">
					</span>
					<span class="options">
						<div class="sondRes clearfix">
							<span class="percentage inlBlo"><%= percent1 %>%</span>
							<span class="pellet inlBlo"></span>
							<span id="options_1" class='inlBlo option'><div class="text"><%= answer1 %></div></span>
						</div>
				
						<div class="sondRes clearfix">
							<span class="percentage"><%= percent2 %>%</span>
							<span class="pellet"></span>
							<span id="options_2" class='option'><div class="text"><%= answer2 %></div></span>
						</div>
						<% if (answer3) { %>
						<div class="sondRes clearfix">
							<span class="percentage"><%= percent3 %>%</span>
							<span class="pellet"></span>
							<span id="options_3" class='option'><div class="text"><%= answer3 %></div></span>
						</div>

						<% } if (answer4) { %>
						<div class="sondRes clearfix">
							<span class="percentage"><%= percent4 %>%</span>
							<span class="pellet"></span>
							<span id="options_4" class='option'><div class="text"><%= answer4 %></div></span>
						</div>
						<% } %>
					</span>
				</div>
				<div class="counter">
					<span class="label"><img alt="" src="/css/res/img/clock.png" /> <span>3min 10s</span></span>
					<span class="progressBar"><span class="progress"></span></span>
				</div>

				<% if (copyright != null) print('<p class="copyright">'+copyright+'</p>'); %>
				<% if (publiDate != null){

					var myDate = new Date(publiDate*1000);
				
					var publi = 'le '+myDate.getDate()+"-"+(myDate.getMonth()<9?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1))+"-"+myDate.getFullYear()+" à "+myDate.getHours()+"h"+(myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes());

						print('<p class="publiDate">'+publi+'</p>');

				}  %>
			</div>
			
			<span class="slideShareActions">
				<span class="fbSlideShare <% if (!loggedToFacebook)print('unlogged'); %>">
					<img src="/css/res/img/slide_share_fb.png" />
				</span>
								<span class="twSlideShare"><a href="http://twitter.com/intent/tweet?original_referer=<%= global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+global.htag_twitter.replace('@', '')+' '+title)) %>"><img src="/css/res/img/slide_share_tw.png" /></a></span>
			</span>
		</li>
	</script>
	
	<script type="text/template" id="template-dynamicEditorialSlideSondageAnswerUpdate">
			<div class="sondageAnswerSlide">
				<span class="typePicto"><img alt=" " src="/css/res/img/slider_menu_picto_sondage.png" /></span>
				<span class="thumb"><% if (image) print('<img src="'+image+'" alt="" />'); %></span>
				<span class="content"><%= title %></span>
				
				<div class='diagramContainer'>
					<span id="slideSondageAnswerDiagram_<%= inId %>" class="diagram">
					</span>
					<span class="options">
						<div class="sondRes clearfix">
							<span class="percentage inlBlo"><%= percent1 %>%</span>
							<span class="pellet inlBlo"></span>
							<span id="options_1" class='inlBlo option'><div class="text"><%= answer1 %></div></span>
						</div>
				
						<div class="sondRes clearfix">
							<span class="percentage"><%= percent2 %>%</span>
							<span class="pellet"></span>
							<span id="options_2" class='option'><div class="text"><%= answer2 %></div></span>
						</div>
						
						<% if (answer3) { %>
						<div class="sondRes clearfix">
							<span class="percentage"><%= percent3 %>%</span>
							<span class="pellet"></span>
							<span id="options_3" class='option'><div class="text"><%= answer3 %></div></span>
						</div>

						<% } if (answer4) { %>
						<div class="sondRes clearfix">
							<span class="percentage"><%= percent4 %>%</span>
							<span class="pellet"></span>
							<span id="options_4" class='option'><div class="text"><%= answer4 %></div></span>
						</div>
						<% } %>
					</span>
				</div>
					<div class="counter">
						<span class="label"><img alt="" src="/css/res/img/clock.png" /> <span></span></span>
						<span class="progressBar"><span class="progress"></span></span>
					</div>

					<% if (copyright != null) print('<p class="copyright">'+copyright+'</p>'); %>
					<% if (publiDate != null){

						var myDate = new Date(publiDate*1000);
					
						var publi = 'le '+myDate.getDate()+"-"+(myDate.getMonth()<9?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1))+"-"+myDate.getFullYear()+" à "+myDate.getHours()+"h"+(myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes());

							print('<p class="publiDate">'+publi+'</p>');

					}  %>
			</div>
			
			<span class="slideShareActions">
				<span class="fbSlideShare <% if (!loggedToFacebook)print('unlogged'); %>"><img src="/css/res/img/slide_share_fb.png" /></span>
						<span class="twSlideShare"><a href="http://twitter.com/intent/tweet?original_referer=<%= global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+global.htag_twitter.replace('@', '')+' '+title)) %>"><img src="/css/res/img/slide_share_tw.png" /></a></span>
			</span>

	</script>
	
	<script type="text/template" id="template-dynamicEditorialSlideSondageQuestion">
		<li id="slideSondageQuestion_<%= inId %>" data-inId="<%= inId %>">
			<div class="sondageQuestionSlide">
				<div class="topAnswer">
					<span class="typePicto"><img alt=" " src="/css/res/img/slider_menu_picto_sondage.png" /></span>
					<span class="thumb"><% if (image) print('<img src="'+image+'" alt="" />'); %></span>
					<span class="content"><%= title %></span>
				</div>
				<div class="botAnswer">
					<div class="options clearfix">
						<div id="options_1" class='option leftBtn'><span class="text"><%= answer1 %></span></div>
						<div id="options_2" class='option'><span class="text"><%= answer2 %></span></div>
						<% if (answer3) { %>
							<div id="options_3" class='option leftBtn'><span class="text"><%= answer3 %></span></div>
						<% } %>
						<% if (answer4) { %>
							<div id="options_4" class='option'><span class="text"><%= answer4 %></span></div>
						<% } %>
					</div>
				</div>
				<div class="counter">

						<span class="label"><img alt="" src="/css/res/img/clock.png" /> <span>3min 10s</span></span>
						<span class="progressBar"><span class="progress"></span></span>
					</div>

				<% if (copyright != null) print('<p class="copyright">'+copyright+'</p>'); %>
				<% if (publiDate != null){

					var myDate = new Date(publiDate*1000);
				
					var publi = 'le '+myDate.getDate()+"-"+(myDate.getMonth()<9?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1))+"-"+myDate.getFullYear()+" à "+myDate.getHours()+"h"+(myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes());

						print('<p class="publiDate">'+publi+'</p>');

				}  %>
			</div>
			<span class="slideShareActions">
				<span class="fbSlideShare <% if (!loggedToFacebook)print('unlogged'); %>"><img src="/css/res/img/slide_share_fb.png" /></span>
									<span class="twSlideShare"><a href="http://twitter.com/intent/tweet?original_referer=<%= global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+global.htag_twitter.replace('@', '')+' '+title)) %>"><img src="/css/res/img/slide_share_tw.png" /></a></span>
			</span>			
			
		</li>
	</script>
	<!-- TEMPLATE EDITO DEFAUT -->
	<script type="text/template" id="template-dynamicEditorialSlideEdito">
		<li data-inId="<%= inId %>">
			<div class="editoSlide">
				<span class="typePicto"><img alt=" " src="/css/res/img/slider_menu_picto_edito.png" /></span>
				<span class="thumb"><% if (image) print('<img src="'+image+'" alt="" />'); %></span>
				<span class="description">
					<span class="title"><%= title %></span>
					<span class="subtitle"><%= subtitle %></span>
					<span class="content">
					
						<%= content %>
					</span>
				</span>
				<% if (copyright != null) print('<p class="copyright">'+copyright+'</p>'); %>
				<% if (publiDate != null){

					var myDate = new Date(publiDate*1000);
				
					var publi = 'le '+myDate.getDate()+"-"+(myDate.getMonth()<9?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1))+"-"+myDate.getFullYear()+" à "+myDate.getHours()+"h"+(myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes());

						print('<p class="publiDate">'+publi+'</p>');

				}  %>
			</div>
			<span class="slideShareActions">
				<span class="fbSlideShare <% if (!loggedToFacebook)print('unlogged'); %>"><img src="/css/res/img/slide_share_fb.png" /></span>
								<span class="twSlideShare"><a href="http://twitter.com/intent/tweet?original_referer=<%= global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+global.htag_twitter.replace('@', '')+' '+title)) %>"><img src="/css/res/img/slide_share_tw.png" /></a></span>
			</span>
		</li>
	</script>
	<!-- TEMPLATE EDITO IMAGE -->
	<script type="text/template" id="template-dynamicEditorialSlideEditoImage">
		<li data-inId="<%= inId %>">
			<div class="editoSlide grande_image">
				<span class="typePicto"><img alt=" " src="/css/res/img/slider_menu_picto_edito.png" /></span>
				
				<span class="description">
					<span class="title"><%= title %></span>
					<span class="content">
						<% if (image) print('<img src="'+image+'" alt="" />'); %>
						<p class="caption"><%= subtitle %></p>
					</span>
				</span>
			</div>

			<% if (copyright != null) print('<p class="copyright">'+copyright+'</p>'); %>

			<% if (publiDate != null){

				var myDate = new Date(publiDate*1000);
			
				var publi = 'le '+myDate.getDate()+"-"+(myDate.getMonth()<9?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1))+"-"+myDate.getFullYear()+" à "+myDate.getHours()+"h"+(myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes());

					print('<p class="publiDate">'+publi+'</p>');

			}  %>

			<span class="slideShareActions">
				<span class="fbSlideShare <% if (!loggedToFacebook)print('unlogged'); %>"><img src="/css/res/img/slide_share_fb.png" /></span>
								<span class="twSlideShare"><a href="http://twitter.com/intent/tweet?original_referer=<%= global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+global.htag_twitter.replace('@', '')+' '+title)) %>"><img src="/css/res/img/slide_share_tw.png" /></a></span>
			</span>
		
			

		</li>
	</script>

	<!-- TEMPLATE EDITO VIDEO -->
	<script type="text/template" id="template-dynamicEditorialSlideEditoVideo">
		<li data-inId="<%= inId %>">
			<div class="editoSlide video">
				<span class="typePicto"><img alt=" " src="/css/res/img/slider_menu_picto_edito.png" /></span>
				<span class="description">
					<span class="title"><%= title %></span>
					<span class="content">

					<% 
						if(video !=null){

							player = video.split('.')
		
							if(player[1] == 'youtube'){
	
								video_id = video.split('v=')[1];
								ampersandPosition = video_id.indexOf('&');

								if(ampersandPosition != -1) {
								  video_id = video_id.substring(0, ampersandPosition);
								}
								print('<iframe width="420" height="315" src="http://www.youtube.com/embed/'+video_id+'?wmode=transparent" frameborder="0"></iframe>') 

							}else if(player[1] == 'dailymotion'){
								
								video_id_dailyMotion = video.split('video/')[1];
								video_id_dailyMotion = video_id_dailyMotion.split('_')[0];
						
								print('<iframe width="420" height="315" src="http://www.dailymotion.com/embed/video/'+video_id_dailyMotion+'" frameborder="0"></iframe>') 
							}

						}
					%>
					<p class="caption"> <%= subtitle %></p>

					</span>
				</span>
			</div>

			<% if (copyright !=null) print('<p class="copyright">'+copyright+'</p>'); %>

			<% if (publiDate != null){
				var myDate = new Date(publiDate*1000);
			
				var publi = 'le '+myDate.getDate()+"-"+(myDate.getMonth()<9?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1))+"-"+myDate.getFullYear()+" à "+myDate.getHours()+"h"+(myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes());

					print('<p class="publiDate">'+publi+'</p>');

			}  %>

			<span class="slideShareActions">
				<span class="fbSlideShare <% if (!loggedToFacebook)print('unlogged'); %>"><img src="/css/res/img/slide_share_fb.png" /></span>
									<span class="twSlideShare"><a href="http://twitter.com/intent/tweet?original_referer=<%= global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+global.htag_twitter.replace('@', '')+' '+title)) %>"><img src="/css/res/img/slide_share_tw.png" /></a></span>
			</span>
			
			
		</li>
	</script>
	
	<script type="text/template" id="template-dynamicEditorialSlideSocial">
		<li id="slideSocial_<%= inId %>" data-inId="<%= inId %>">
			<div class="socialSlide">
				<span class="typePicto"><img alt=" " src="/css/res/img/slider_menu_picto_social.png" /></span>
				<div class="postContent">
					<span class="quoteLeft"></span>
					<span class="quoteRight"></span>
					<span class="title">
						<a class="accountname" title="<%= title %>" href="https://twitter.com/<%= nickname %>" target="_blank"><%= title %></a>
						<a class="nickname" title="<%= nickname %>" href="https://twitter.com/<%= nickname %>" target="_blank">@<%= nickname %></a>
					</span>
					<span class="thumb"><% if (image) print('<a title="'+title+'" href="https://twitter.com/'+nickname+'" target="_blank"><img src="'+image+'" alt="" /></a>'); %></span>
					<span class="content"><%= content %></span>
					<a class="timeago" title="" href="https://twitter.com/<%= nickname %>/status/<%= socialId %>" target="_blank">
						<span class="time">Il y a <span class="value"></span><img alt="" src="/css/res/img/slide_social_<% if (typeSocial == 'twitter') print('tw'); else print('fb');%>_logo.png" /></span>
					</a>
				</div>
				<div class="options">
					<% if (typeSocial == 'twitter'){ %>
					<div class="twitter">
						<a class="answer" title="R&eacute;pondre" href="https://twitter.com/intent/tweet?in_reply_to=<%= socialId %>"><img alt="" src="/css/res/img/tw_ans.png" />R&eacute;pondre</a>
						<a class="forward" title="Retweeter" href="https://twitter.com/intent/retweet?tweet_id=<%= socialId %>"><img alt="" src="/css/res/img/tw_retw.png" /> Retweeter</a>
						<a class="favorite" title="Favoris" href="https://twitter.com/intent/favorite?tweet_id=<%= socialId %>"><img alt="" src="/css/res/img/tw_fav.png" />Favoris</a>
						<a class="website last" title="Voir sur Twitter" href="https://twitter.com/<%= nickname %>/status/<%= socialId %>" target="_blank"><img alt="" src="/css/res/img/tw_prev.png" />Voir sur Twitter</a>
					</div>
					<% } else { %>
					<div class="facebook">
						<a onclick="FB.share(); return false;" title="Partager" class="share" target="_self">Partager</a>
					</div>
					<% } %>
				</div>
				<% if (copyright !=null) print('<p class="copyright">'+copyright+'</p>'); %>
			</div>
			<span class="slideShareActions">
				<% if ( typeSocial == 'twitter' || typeSocial == 'social' ){ %>
					<span class="fbSlideShare <% if (!loggedToFacebook)print('unlogged'); %>"><img src="/css/res/img/slide_share_fb.png" /></span>
				<% } %>
				<% if ( typeSocial == 'facebook' || typeSocial == 'social' ){ %>
										<span class="twSlideShare"><a href="http://twitter.com/intent/tweet?original_referer=<%= global.socialShort %>&url=<% print(encodeURIComponent(bitly)) %>&text=<% print(encodeURIComponent('#'+global.htag_twitter.replace('@', '')+' '+title)) %>"><img src="/css/res/img/slide_share_tw.png" /></a></span>
		
				<% } %>
			</span>
			
			
		</li>
	</script>

	


</html>