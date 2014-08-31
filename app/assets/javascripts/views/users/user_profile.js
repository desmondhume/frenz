Frenz.Views.UserProfile = Backbone.View.extend({

  tagName: "div",

  className: "page",

  id: "userProfile",

  events: {
    'submit #userProfileForm': 'sendForm'
  },

  initialize: function() {
    this.parentView = Frenz.mainView;
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var _template = HandlebarsTemplates['users/profile']({user: this.model});
    this.$el.html(_template);
    return this;
  },

  sendForm: function(e) {
    e.preventDefault();
    var user = this.model;
    this.$el.find('input[name]').each(function() {
      user.set(this.name, this.value);
    });
    $.ajaxSetup({
      headers: { 'access_token' : Frenz.session.get('accessToken') }
    });
    user.save();
  }
});
