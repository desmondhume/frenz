Frenz.Routers.Main = Backbone.Router.extend({

  routes: {
    "": "home",
    "login": "login"
  },

  login: function() {
    Frenz.mainView.clean();
    var loginView =
      Frenz.mainView.subviews.loginView = 
      new Frenz.Views.Login();

    loginView.render();
    Frenz.mainView.$el.append(loginView.el);
  },

  initialize: function() {
    Frenz.headerView = new Frenz.Views.Header();
    $('.header').html(Frenz.headerView.render().el);
  },

  home: function() {
    Frenz.mainView.clean();
  },

});
