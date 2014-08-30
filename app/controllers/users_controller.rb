class UsersController < ApplicationController
  respond_to :json
  before_filter :require_login, only: [:me]

  def me
    respond_with @user, status: 200
  end

  def index
    @users = User.all
    respond_with users: @users, status: 200
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
