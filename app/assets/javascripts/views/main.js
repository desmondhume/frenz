Frenz.Views.Main = Backbone.View.extend({
  el: '#pagesWrapper',

  initialize: function() {
    this.subviews = {};
  },

  clean: function() {
    for (view in this.subviews) {
      this.subviews[view].remove();
    }
  }
});