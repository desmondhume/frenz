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

    this.mainView = new Frenz.Views.Main();

    var mainRouter = new Frenz.Routers.Main();
    var usersRouter = new Frenz.Routers.Users();

    Backbone.history.start({pushState: true});

    $('body').on('click', 'a[data-route]', function(e) {
      e.preventDefault();
      Backbone.history.navigate($(this).attr('href'), {trigger: true});
    })
  }
};
