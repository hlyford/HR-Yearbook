var NavBarView = Backbone.View.extend({
  
  el: '#navbar-container',
  initialize: function() {
    this.render();
  },

  render: function() {
  	this.$el.html('<span class="home"><a href="/"> HOME</a></span><span class="options"><a>HR 36</a> -- <a href="/thirtyseven">HR 37</a></span>');
  }

});

