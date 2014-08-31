Frenz.Collections.Users = Backbone.Collection.extend({
  model: Frenz.Models.User,
  url: Frenz.Config.apiUrl + 'users',

  parse: function(payload) {
    return payload.users;
  }
});