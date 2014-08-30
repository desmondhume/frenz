require 'rails_helper'

RSpec.describe User, :type => :model do

  it { should validate_uniqueness_of(:fb_uid) }
  it { should validate_uniqueness_of(:access_token) }
  
end
