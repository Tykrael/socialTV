define([
	'jquery',
	'backbone'
	],function($){
	Vheader = Backbone.View.extend({
		initialize: function(){ this.render(); },
		render: function(){            
			var self = this;
			$(self.el).html(_.template($('#template-header').html()));
			return this;
		}
	});
});