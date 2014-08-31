class User < ActiveRecord::Base
  include Amistad::FriendModel
  
  validates_uniqueness_of :fb_uid
  validates_uniqueness_of :access_token
end
