define([
	'jquery'
	],function($){

	window.fbAsyncInit = function() {
		//console.log('fbAsyncInit')//apiKeys.facebook);
		FB.init({
			appId      : socialTV.apiKeys.facebook,//336353896453547,//'336353896453547', // App ID
			channelUrl : socialTV.socialLink, // Channel File
			status     : true, // check login status
			cookie     : true, // enable cookies to allow the server to access the session
			xfbml      : true  // parse XFBML
		});
		FB.Event.subscribe('auth.statusChange', function(response) {
			if(response.status=='connected')
				login();
			else
				logout();
		});
		function login(){
			FB.api('/me', function(me){
				$('#popinDisconnectFb .user').html('<img src="//graph.facebook.com/'+me.id+'/picture" /><span class="userName">'+me.name+'</span>')
				$('#fbConnectButton').attr('class', 'connectionButton');
				$('.fb').attr('class', 'fb');
				loggedToFacebook = true;
			})
		}
		function logout(){
			$('#fbConnectButton').attr('class', 'connectionButton unlogged');
			$('.fb').attr('class', 'fb unlogged');
			loggedToFacebook = false;
		}
	};

	function facebook_connection() {
		FB.getLoginStatus(function(response) {
			if (response.authResponse) {
				FB.api({
						method : 'fql.query',
						query : 'SELECT first_name,email, last_name,uid FROM user WHERE uid='
								+ response.authResponse.userID
				},
				function(response) {
					var id = apiKeys.facebook;
					$.ajax({
						type : "POST",
						url : "/facebook.php",
						data : "what=facebook&id="
								+ id
								+ "&uid="
								+ response[0].uid
								+ "&email="
								+ response[0].email
								+ "&name="
								+ response[0].first_name
								+ " "
								+ response[0].last_name,
						success : function() {
							document.location.href = voter_pour;
						}
					});
				});
			}
		});
	}

	function facebook_appel(url, image, alias) {
		FB.ui({
			method : 'feed',
			name : 'FranceTvSocialTv',
			link : url,
			picture : image,
			caption : alias,
			description : url,
			message : alias
		});
	}

	function facebook_getLoginStatus(){
		FB.getLoginStatus(function(response) {
		    if (response.authResponse) {
		    	alert('hjk');
		      document.getElementById("facebook-signout").onclick = function () {
		        FB.logout(function(response) {
		            $.ajax({
		              type: "POST",
		              url: "/deconnection.php",
		              data: "what=facebook",
		              success: function(){document.location.href=voter_pour;}
		            });
		        });
		      };
		    }
		});
	}
});