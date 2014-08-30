Frenz.Views.UserProfile = Backbone.View.extend({
  el: '#userProfile',

  tagName: "div",

  className: "user-profile",

  events: {},

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    _template = "<ul>";
    for(attr in this.model.attributes) {
      _template += "<li>"+attr+":"+this.model.get(attr)+"</li>";
    }
    _template += "</ul>";
    this.$el.html(_template);
  }
});
