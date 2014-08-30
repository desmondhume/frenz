# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([
  { first_name: 'John', last_name: 'Travolta', fb_uid: '1', access_token: 'a' },
  { first_name: 'Quentin', last_name: 'Tarantino', fb_uid: '2', access_token: 'b' },
  { first_name: 'Samuel', last_name: 'Jackson', fb_uid: '3', access_token: 'c' }
])