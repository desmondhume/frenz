Frenz.Routers.Main = Backbone.Router.extend({

  routes: {
    "": "home"
  },

  home: function() {
    Frenz.mainView.clean();
  },

});
