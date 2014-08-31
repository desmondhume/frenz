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

  describe 'update' do

    it "should reject not logged in user" do
      post :update, format: :json

      expect(json).to have_key('error')
      expect(response).to have_http_status(403)
    end

    it "should return updated user" do
      user = FactoryGirl.create(:user)
      
      post :update, format: :json, 
        user: {first_name: 'Robert', last_name: 'Rodriguez'},
        access_token: user.access_token

      expect(json).to have_key('user')
      expect(response).to have_http_status(201)
    end

  end
  
end
