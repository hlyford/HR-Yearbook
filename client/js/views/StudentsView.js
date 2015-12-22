var StudentsView = Backbone.View.extend({

  initialize: function() {
  	this.collection.on('change:name', this.render, this);
    this.render();
  },

  render: function() {  	  	
  	console.log(this.collection);
  	
  	$('#page-content-container').append(
  		this.collection.map(function(student) {  		
  			return new StudentEntryView({model: student}).render();
  		})  	  
  	);  
  }
   

});