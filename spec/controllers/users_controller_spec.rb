require 'rails_helper'

RSpec.describe UsersController, :type => :controller do

  describe 'index' do

    it "should return a list of users" do
      FactoryGirl.create(:user)
      FactoryGirl.create(:john_travolta)
      get :index, format: :json
      expect(json).to have_key('users')
      expect(json['users'].count).to eq(2)
    end

  end
  
end
