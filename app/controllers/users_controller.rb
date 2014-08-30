class UsersController < ApplicationController
  def create
    respond_to do |format|
      parse_facebook_cookies
      @access_token = @facebook_cookies["access_token"]
      format.json { render json: {message: 'Welcome!', user: @access_token}.to_json, status: 201 }
    end
  end

  private

    def parse_facebook_cookies
      @facebook_cookies ||= Koala::Facebook::OAuth.new.get_user_info_from_cookie(cookies)
    end

end
