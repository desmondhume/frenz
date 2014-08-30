class UsersController < ApplicationController
  before_filter :set_koala

  def create
    profile = @koala_api.get_object('me')
    respond_to do |format|
      format.json { render json: {message: 'Welcome!', long_token: @long_lived_token, profile: profile}.to_json, status: 201 }
    end
  end

  private

    def set_koala
      @koala_oauth = Koala::Facebook::OAuth.new(params[:token])
      @long_lived_token = @koala_oauth.exchange_access_token(params[:token])
      @koala_api = Koala::Facebook::API.new(@long_lived_token)
    end

end
