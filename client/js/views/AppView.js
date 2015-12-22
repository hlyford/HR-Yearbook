var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {

    options.router.on('route:landing', function() {
      console.log('Hit landing Route')
    }.bind(this));

    // options.router.on('route:37'), function() {
    //   console.log('cohort 37')
    // }.bind(this);
    

  },

  renderCohort: function(cohort) {
    // make a studentsView
    var studentCol = new Students({model: Student});
    // REFACTOR THIS TO BE LESS JANKY
    //this.$el.children().detach();
    var makeGroup = function() {
      new StudentsView({collection: studentCol});
    };
    setTimeout(makeGroup, 1000);       
  },

  renderLanding: function() {
      //$('#page-content-container').html(new LandingView().render());   
  }
})