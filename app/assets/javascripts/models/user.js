Frenz.Models.User = Backbone.Model.extend({
  initialize: function(attributes, options) {
    options || (options = {});
    this.options = _.defaults(options, this.defaultOptions);

    _.bindAll(this, 'onLoginStatusChange');

    FB.Event.subscribe('auth.authResponseChange', this.onLoginStatusChange);
  },

  options: null,

  defaultOptions: {
    scope: ['public_profile'],
    autoFetch: true,
    protocol: location.protocol
  },

  _loginStatus: null,

  isConnected: function() {
    return this._loginStatus === 'connected';
  },

  signup: function(response) {
    var _fb_response = FB.getAuthResponse();
    $.post('/api/v1/users.json', {
      token: _fb_response['accessToken'],
      fb_uid: _fb_response['userID']
    }, function(data) {
      localStorage.setItem("frenz_fb_access_token", data.long_token);
    });
  },

  login: function(callback){
    if (typeof callback === 'undefined') {
      callback = function() {};
    }
    FB.login(this.signup, { scope: this.options.scope.join(',') });
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

  sync: function(method, model, options) {
    if(method !== 'read') throw new Error('FacebookUser is a readonly model, cannot perform ' + method);

    var callback = function(response) {
      if(response.error) {
        options.error(response);
      } else {
        options.success(response);
      }
      return true;
    };

    var request = FB.api('/me', callback);
    model.trigger('request', model, request, options);
    return request;
  }
});
