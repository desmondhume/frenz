require 'rails_helper'

RSpec.describe UsersController, :type => :controller do
  describe "with fb_uid and token" do

    describe "post #create" do

      it "returns welcome message and new user infos" do
        post :create, format: :json, 
          fb_uid: '123123', 
          token: 'asdoasdo'
          puts json
        expect(json).to have_key('message')
        expect(json).to have_key('user')
      end

      it "should respond with success" do
        post :create, format: :json, fb_uid: '123123', token: 'asdoasdo'
        expect(response).to have_http_status 201
      end
    end
  end
end
