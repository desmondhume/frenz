Frenz.Views.UserProfile = Backbone.View.extend({

  tagName: "div",

  className: "page",

  id: "userProfile",

  events: {},

  initialize: function() {
    this.parentView = Frenz.mainView;
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var _template = HandlebarsTemplates['users/profile']({user: this.model});
    this.$el.html(_template);
    return this;
  }
});
