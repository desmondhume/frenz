require 'rails_helper'

RSpec.describe UsersController, :type => :controller do
  describe "with fb_uid and token" do

    describe "post #create" do

      it "returns welcome message" do
        post :create, format: :json, fb_uid: '123123', token: 'asdoasdo'
        expect(json).to have_key('message')
        expect(json['message']).to eq('Welcome!')
      end

      it "should respond with success" do
        post :create, format: :json, fb_uid: '123123', token: 'asdoasdo'
        expect(response).to have_http_status 201
      end
    end
  end
end
