var StudentEntryView = Backbone.View.extend({

	el: '<div style="display: inline;"></div>',

	template: _.template('<img src="<%= image %>" > <div style="display: inline;"><%= name %></div></div>'),

	initialize: function() {
		this.model.on('change:name', this.render, this);
		this.render();
	}, 
	render: function() {		
		return this.$el.html(this.template(this.model.attributes));		
	}
});