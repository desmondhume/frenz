require 'rails_helper'

# Invitation = pending friendship request
RSpec.describe InvitationsController, :type => :controller do

  describe 'index' do

    it "should return a list of invitations for the current_user" do
      current_user = FactoryGirl.create(:user)
      john_travolta = FactoryGirl.create(:john_travolta)
      samuel_jackson = FactoryGirl.create(:samuel_jackson)

      current_user.invite john_travolta
      samuel_jackson.invite current_user

      get :index, {format: :json, access_token: current_user.access_token}

      expect(json).to have_key('invitations')
      expect(json['invitations']).to have_key('sent')
      expect(json['invitations']['sent'].count).to eq(1)
      expect(json['invitations']).to have_key('received')
      expect(json['invitations']['received'].count).to eq(1)
      expect(response).to have_http_status(200)

    end

  end

end
