Frenz.Routers.Users = Backbone.Router.extend({

  routes: {
    "profile": "profile"
  },

  profile: function() {
    var userProfileView =
      Frenz.mainView.subviews.userProfileView = 
      new Frenz.Views.UserProfile({model: Frenz.current_user});

    userProfileView.render();
    Frenz.mainView.$el.append(userProfileView.el);
  },

});
