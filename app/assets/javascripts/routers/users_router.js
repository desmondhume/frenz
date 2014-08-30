Frenz.Routers.Users = Backbone.Router.extend({

  routes: {
    "profile": "profile"
  },

  profile: function() {
    var userProfileView = new Frenz.Views.UserProfile({model: current_user});
    userProfileView.render();
  },

});
