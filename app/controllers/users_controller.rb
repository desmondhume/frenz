class UsersController < ApplicationController

  before_filter :require_login, only: [:me]

  def me
    respond_to do |format|
      format.json { render json: {user: @user}.to_json, status: 200 }
    end
  end

  def index
    @users = User.all
    respond_to do |format|
      format.json { render json: {users: @users}.to_json, status: 200 }
    end
  end

  private
    def require_login
      unless authenticated
        respond_to do |format|
          format.json { render json: {error: 'You are not logged in'}.to_json, status: 403 }
        end
      end
    end

end
