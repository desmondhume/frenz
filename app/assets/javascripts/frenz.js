window.Frenz = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Config: {
    apiUrl: '/api/v1/'
  },
  initialize: function() {
    var _this = this;
    this.session = new this.Models.Session();
    current_user = new _this.Models.User();
    if(this.session.authenticated()) {
      current_user.me();
    } else {
      $('#login_with_facebook').on('click', function() {
        _this.session.login(function(response) {
          localStorage.setItem("frenz_access_token", response.get('user')['access_token']);
          _this.session.set('accessToken', localStorage.getItem("frenz_access_token"));
          current_user.me();
        });
      })
    }

    var userProfileView = new this.Views.UserProfile({model: current_user});

  }
};
