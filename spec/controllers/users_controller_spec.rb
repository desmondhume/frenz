require 'rails_helper'

RSpec.describe UsersController, :type => :controller do
  describe "with fb_uid and token" do

    describe "post #create" do
      post :create, fb_uid: '123123', token: 'asdoasdo'

      it "returns welcome message" do
        expect(json).to have_key('message')
      end

      it { should respond_with 200 }
    end
  end
end
