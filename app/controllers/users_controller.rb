class UsersController < ApplicationController
  before_filter :set_koala

  def create
    profile = @koala_api.get_object('me')
    @user = User.new(fb_uid: profile['id'], access_token: @long_lived_token, first_name: profile['first_name'], last_name: profile['last_name'] )

    if @user.save
      respond_to do |format|
        format.json { render json: {message: 'Welcome!', user: @user}.to_json, status: 201 }
      end
    else
      respond_to do |format|
        format.json { render json: {message: 'Welcome!', user: @user.errors}.to_json, status: 401 }
      end
    end
    
  end

  private

    def set_koala
      @koala_oauth = Koala::Facebook::OAuth.new(params[:token])
      @long_lived_token = @koala_oauth.exchange_access_token(params[:token])
      @koala_api = Koala::Facebook::API.new(@long_lived_token)
    end

end
