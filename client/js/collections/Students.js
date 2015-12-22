var Students = Backbone.Collection.extend({

  model: Student,
  
  initialize: function (options) {
    this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=37' //+ options.cohort;
    this.populateCohort();
  },
  populateCohort: function() {
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!
    var that = this;
    this.fetch({
    	url: this.url,

    	success: function(collection, response, options) {
    		//console.log('API response:', response);    		
    		_.each(response, function(student) {    			
    			new Student({model: student});    			
    		});    		    		    		
    	},
    	error: function(collection, response, options) {
				console.log(response);
    	}

    });

  }
});