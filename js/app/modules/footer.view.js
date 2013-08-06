define([
	'jquery',
	'backbone','underscore', 'videojs', 'zeroclipboard', 'modules/footer.sub.views'
	],function($){
	Mfooter = Backbone.Model.extend({
		v_footerVideo : undefined,
		defaults : {
			type : 			undefined,
			title : 		undefined,
			content : 		undefined,
			image : 		undefined
		},
		url : socialTV.WS_ZONE_PROG_URL,
		initialize : function(){ 
			this.loadData();
			this.bind('checkForSnapshot', this.loadData, this); 
		},
		loadData : function(){
			var self = this;
			$.ajax({
				url: self.url,
				cache: false,
				dataType: "json",
				async: true
			}).done(function(datas){
				self.set({title : datas.title,
					image : datas.image,
					content : datas.content,
					type : datas.type });

			}).fail(function(e){
				// Force un rendu en mode défaut si la zone_prog n'est pas dispo
				self.set({type : 'default' });
				self.set({content : '' });
			}).always(function(){
				setTimeout(function(){
					self.trigger("checkForSnapshot");
				}, 10000);
			});
		}
	});
	Vfooter = Backbone.View.extend({
		rendered : false,
		initialize: function(){
			var self = this;
			this.model = new Mfooter();
			this.model.on('change:type',function(){
				self.render();
			})
		},
		render: function(){
			var self = this;
			
			if(this.model.get('type') == "partage_video"){
				this.rendered = false;
				this.v_footerVideo = new VfooterVideo({el:'#'+this.$el.attr('id')});
			} else {
				if (!this.rendered) {
					if (this.v_footerVideo) {
						this.v_footerVideo.destroy();
					}	
					$(this.el).html(_.template($('#template-footer').html())({model : this.model}));
					this.rendered = true;
				}
			}
			return this;
		}
	});
});