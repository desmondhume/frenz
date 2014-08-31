Frenz.Views.Login = Backbone.View.extend({
  tagName: "div",

  className: "page",

  id: "login",

  events: {},

  initialize: function() {
    this.parentView = Frenz.mainView;
  },

  render: function() {
    var _template = HandlebarsTemplates['main/login']();
    this.$el.html(_template);
    return this;
  }
});