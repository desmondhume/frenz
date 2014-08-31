Frenz.Views.Login = Backbone.View.extend({
  tagName: "div",

  className: "page",

  id: "login",

  events: {
    'click #loginWithFacebook': 'login'
  },

  initialize: function() {
    this.parentView = Frenz.mainView;
  },

  render: function() {
    var _template = HandlebarsTemplates['main/login']();
    this.$el.html(_template);
    return this;
  },

  login: function() {
    var _this = this;
    Frenz.session.login(function(response) {
      localStorage.setItem("frenz_access_token", response.get('user')['access_token']);
      Frenz.session.set('accessToken', localStorage.getItem("frenz_access_token"));
      Frenz.current_user.me();
      Backbone.history.navigate('/', {trigger: true});
      _this.remove();
    });
  }
});