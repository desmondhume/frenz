Frenz.Views.UserProfile = Backbone.View.extend({
  el: '#userProfile',

  tagName: "div",

  className: "user-profile",

  events: {},

  initialize: function() {
    this.listenTo(this.model, "signup", this.render);
  },

  render: function() {
    _template = "<ul>";
    for(attr in this.model.profile) {
      _template += "<li>"+attr+":"+this.model.profile[attr]+"</li>";
    }
    _template += "</ul>";
    this.$el.html(_template);
  }
});
