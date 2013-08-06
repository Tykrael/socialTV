define([
	'jquery',
	], function($){
		var videoJsOptions = {'preload':'none', techOrder: ["flash","html5"], poster: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'};
		var defaults = {
			onReady: $.noop,
			onPlay: $.noop,
			onPause: $.noop,
			onEnded: $.noop,
			onError: $.noop
		}

		window.socialTV.embedSnap = function(id, settings) {
			socialTV.snapPlayers = (socialTV.snapPlayers)?socialTV.snapPlayers : {};
			var options = $.extend({}, defaults, settings);
			var videoPlayerId = id + "-snap-player";
			var videoHtml = '<video id="'+videoPlayerId+'" class="video-js vjs-default-skin player" controls width="'+options.width+'" height="'+options.height+'" ></video>';
			var url = socialTV.videoSnapInfoUrl + options.videoId;
			if (_V_.players[videoPlayerId]) {
				_V_.players[videoPlayerId].destroy();
			}
			$('#'+id).html(videoHtml);
			var daPlayer = _V_(videoPlayerId, videoJsOptions, function(){
				var player = this;
				player.addEvent('error', options.onError);
				$.ajax({
					url : url,
					dataType: "json",
					crossDomain: true,
					cache: true,
					async: true
				}).done(function(data) {
					if (data.ERROR_CODE == 0) {
						player.src([
							{type: "video/mp4", src: data.VIDEO_URL}
						]);
						$('#' + videoPlayerId + ' .vjs-poster').attr('src', data.SNAPSHOT_URL);
						options.onReady();

					} else { //destroy player
						options.onError();
						player.destroy();
					}
				}).fail(function(){
					player.destroy();
					options.onError();
				});
				player.addEvent('play', options.onPlay);
				player.addEvent('pause', options.onPause);
				player.addEvent('ended', options.onEnded);
			});
			
			return(daPlayer);	
		}


		/*function parseDate(dateString) {
			//ex: 2013-03-28 00:00:00
			var year = dateString.substr(0,4);
				month = dateString.substr(5,2);
				day = dateString.substr(8,2);
				hour = dateString.substr(11,2);
				minute = dateString.substr(14,2);
				second = dateString.substr(17,2);
			console.log(year, month, day, hour, minute, second);
			return new Date(year, month, day, hour, minute, second);	
		}*/
	});