Frenz.Routers.Main = Backbone.Router.extend({

  routes: {
    "": "home",
    "login": "login",
    "logout": "logout"
  },

  initialize: function() {
    Frenz.headerView = new Frenz.Views.Header();
    $('.header').html(Frenz.headerView.render().el);
    Frenz.usersCollection = new Frenz.Collections.Users();
  },

  login: function() {
    Frenz.mainView.clean();
    var loginView =
      Frenz.mainView.subviews.loginView = 
      new Frenz.Views.Login();

    loginView.render();
    Frenz.mainView.$el.append(loginView.el);
  },

  logout: function() {
    Frenz.session.logout();
  },

  home: function() {
    Frenz.mainView.clean();
    var usersView = 
      Frenz.mainView.subviews.usersView =
      new Frenz.Views.Users({collection: Frenz.usersCollection});

    Frenz.usersCollection.fetch({reset: true});
    Frenz.mainView.$el.append(usersView.el);
  },

});
