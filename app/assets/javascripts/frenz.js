window.Frenz = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var _this = this;
    $('#login_with_facebook').on('click', function() {
      user = new _this.Models.User();
      userProfileView = new Frenz.Views.UserProfile({
        model: user
      });
      user.login(user.signup);
    })
  }
};

$(document).ready(function() {
  Frenz.initialize();
})