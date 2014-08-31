[![Code Climate](https://codeclimate.com/github/desmondhume/frenz/badges/gpa.svg)](https://codeclimate.com/github/desmondhume/frenz)
##Frenz
###TODO

- Make Session a Non-ActiveRecord model, used by User model
- Tests for Backbone login/signup flow
- Tests for UsersController
- Replace js functions with underscore helpers
- Redirects on backbone routes
  - User is logged in
    - /login -> /
  - User not logged in
    - /profile -> /login
- Create api resources presenters
- Pass Rails CSRF token to Backbone 