Frenz.Views.Header = Backbone.View.extend({

  initialize: function() {
    this.listenTo(Frenz.current_user, "change", this.render);
  },

  render: function() {
    var _template = HandlebarsTemplates['main/header']({authenticated: Frenz.session.authenticated(), current_user: Frenz.current_user});
    this.$el.html(_template);
    return this;
  }
});