Frenz.Models.User = Backbone.Model.extend({

  urlRoot: Frenz.Config.apiUrl + 'users',

  me: function() {
    $.ajaxSetup({
      headers: { 'access_token' : Frenz.session.get('accessToken') }
    });
    this.url = this.urlRoot + '/me.json';
    this.fetch();
  },

  authenticated: function() {
    return !!(Frenz.session.get('accessToken'));
  },

});