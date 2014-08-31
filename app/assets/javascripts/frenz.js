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
    this.current_user = new _this.Models.User();
    
    if(this.session.authenticated()) {
      _this.current_user.me();
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
