define([
	'jquery','underscore', 'jquery', 'text','massrel','iscroll','spinner','Widget'
	],function($){
/**********************************************
TODO  :  VERIFIER LE CHARGEMENT DU WIDGET
**********************************************/
	Vwidget = Backbone.View.extend({
		total : 0,
		formType: 'TW',
		initialize: function(){
			this.render();
		},
		render: function(){
			$(this.el).html(_.template($('#template-widget').html()));
				var config = {
					"stream": [],
    				"share": true,
					"navButtons": false,
					"element": "#widgetReseauxSociaux",
					"defaultAvatar": "http://ftv.socialtvv2.local/css/images/picto_facebook_30.png",
					"titre": "Réactions en direct",
					"htag": {
						"facebook" : socialTV.global.htag_facebook,
						"twitter" : socialTV.global.htag_twitter
					},
					"url": "http://ftv.socialtvv2.local/",
					"apiKeys": {
						"facebook": "248802901902507",
						"twitter": null,
						"disqus": null
					}
				};
				_.each(socialTV.massRelevanceUrls,function(val){
					config['stream'].push(val)

				})
				moduleSocial = new ModuleSocial(config);
			var total = 0;
			return this;
		}
		/*,
		printPostsTotal : function(){
			var self = this;
			$.getJSON("http://tweetriver.com/"+socialTV.massRelevanceUrls[0].flux+"/meta.json?callback=?",{},function(datas) {
				console.log('meta',datas)
				self.total += datas.count.approved;
				console.log(self.total)
				$('#socialModuleContainer .postCount span.number').html(self.total);
			});
		}
		*/
	});
});