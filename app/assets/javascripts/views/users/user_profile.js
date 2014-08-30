Frenz.Views.UserProfile = Backbone.View.extend({
  el: '#userProfile',

  tagName: "div",

  className: "user-profile",

  events: {},

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var _template = HandlebarsTemplates['users/profile']({user: this.model});
    this.$el.html(_template);
  }
});
