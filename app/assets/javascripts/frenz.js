window.Frenz = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var _this = this;
    $('#login_with_facebook').on('click', function() {
      var user = new _this.Models.User();
      user.login();
    })
  }
};

$(document).ready(function() {
  Frenz.initialize();
})