class SessionsController < ApplicationController
  before_filter :set_koala
  before_filter :set_user

  def create
    @user ||= User.new(fb_uid: profile['id'], access_token: @long_lived_token, first_name: profile['first_name'], last_name: profile['last_name'] )
    @user.access_token = @long_lived_token
    if @user.save
      respond_to do |format|
        format.json { render json: {message: 'Welcome!', user: @user}.to_json, status: 201 }
      end
    else
      respond_to do |format|
        format.json { render json: {user: @user.errors}.to_json, status: 401 }
      end
    end
  end

  def destroy
    @user.update_attribute('access_token', '')
    respond_to do |format|
      format.json { render json: {message: 'Logged out'}.to_json, status: 204 }
    end
  end

  private

    def set_user
      @user = User.where(fb_uid: @profile['id']).first
    end

    def set_koala
      access_token = request.headers["HTTP_ACCESS_TOKEN"] || params[:accessToken] || request.headers[:access_token]
      @koala_oauth = Koala::Facebook::OAuth.new(@long_lived_token)
      @long_lived_token = @koala_oauth.exchange_access_token(access_token)
      @koala_api = Koala::Facebook::API.new(@long_lived_token)
      @profile = @koala_api.get_object('me')
    end
end
