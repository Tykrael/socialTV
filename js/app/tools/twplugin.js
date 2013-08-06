twttr.anywhere(function(T) {
	var currentUser, screenName, profileImage, user_id, profileImageTag;
	if (T.isConnected()) {
		//alert('Connected');
		currentUser = T.currentUser;
		screenName = currentUser.data('screen_name');
		profileImage = currentUser.data('profile_image_url');
		$('#popinDisconnectTw .user').html('<img src="'+profileImage+'" /><span class="userName">'+screenName+'</span>')
		$('#twConnectButton').unbind('click');
		$('#disconnectTw').bind('click', function() {
			twttr.anywhere.signOut();
			loggedToTwitter = true;
            	$('#popinDisconnectTw').hide();
                $('#popinDisconnectTw .user').html('');
		});
		$('#twConnectButton').attr('class', 'connectionButton');		
	} else {
		//alert('Disconnected');
		$('#disconnectTw').unbind('click');
		$('#twConnectButton').bind('click', function() {
			T.signIn();
			loggedToTwitter = false;
		});
		$('#twConnectButton').attr('class', 'connectionButton unlogged');
	};

	T.bind("authComplete", function(e, user) {
		//alert('AuthComplete');
		$('#popinDisconnectTw .user').html('<img src="'+user.attributes.profile_image_url+'" /><span class="userName">'+user.attributes.screen_name+'</span>')
		$('#twConnectButton').unbind('click');
		$('#disconnectTw').bind('click', function() {
			twttr.anywhere.signOut();
			loggedToTwitter = true;
            	$('#popinDisconnectTw').hide();
                $('#popinDisconnectTw .user').html('');
		});
		$('#twConnectButton').attr('class', 'connectionButton');
	});
	T.bind("signOut", function(e) {
		//alert('Signed out');
		$('#disconnectTw').unbind('click');
		$('#twConnectButton').bind('click', function() {
			T.signIn();
			loggedToTwitter = false;
		});
		$('#twConnectButton').attr('class', 'connectionButton unlogged');
	});

});
