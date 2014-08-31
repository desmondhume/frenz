Frenz.Routers.Main = Backbone.Router.extend({

  routes: {
    "": "home"
  },

  initialize: function() {
    Frenz.headerView = new Frenz.Views.Header();
    $('.header').html(Frenz.headerView.render().el);
  },

  home: function() {
    Frenz.mainView.clean();
  },

});
