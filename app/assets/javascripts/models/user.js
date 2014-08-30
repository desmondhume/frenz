Frenz.Models.User = Backbone.Model.extend({

  urlRoot: Frenz.Config.apiUrl + 'users',
  _loginStatus: null,

  me: function() {
    $.ajaxSetup({
      headers: { 'access_token' : Frenz.session.get('accessToken') }
    });
    this.url = this.urlRoot + '/me.json';
    this.fetch();
  },

  parse: function(payload) {
    return payload.user;
  },

  isConnected: function() {
    return this._loginStatus === 'connected';
  },

});