Frenz.Models.Session = Backbone.Model.extend({
  urlRoot: Frenz.Config.apiUrl + 'sessions',
  defaults: {
    accessToken: localStorage.getItem("frenz_access_token") || null
  },

  options: {
    scope: ['public_profile'],
    autoFetch: true,
    protocol: location.protocol
  },

  login: function(callback) {
    var _session = this;
    FB.login(function(response) {
      _session.save({accessToken: response.authResponse.accessToken}, {
        success: function(session) {
          callback(session);
        }
      })
    }, {scope: this.options.scope.join(',') });
  },

  authenticated: function() {
    return !!(this.get('accessToken'));
  },

  logout: function(){
    FB.logout();
  },

  updateLoginStatus: function(){
    FB.getLoginStatus(this.onLoginStatusChange);
  },

  onLoginStatusChange: function(response) {
    if(this._loginStatus === response.status) return false;

    var event;

    if(response.status === 'not_authorized') {
      event = 'facebook:unauthorized';
    } else if (response.status === 'connected') {
      event = 'facebook:connected';
      if(this.options.autoFetch === true) this.fetch();
    } else {
      event = 'facebook:disconnected';
    }

    this._loginStatus = response.status;
    this.trigger(event, this, response);
  },

});
