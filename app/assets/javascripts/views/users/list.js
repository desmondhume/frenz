Frenz.Views.Users = Backbone.View.extend({
  tagName: "div",

  id: "usersList",

  initialize: function() {
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function() {
    var _template = HandlebarsTemplates['users/list']({users: this.collection.models});
    this.$el.html(_template);
    return this;
  }
});