class UsersController < ApplicationController
  respond_to :json
  before_filter :require_login, only: [:me, :update]

  def me
    respond_with @user, status: 200
  end

  def index
    @users = User.all
    respond_with users: @users, status: 200
  end

  def update
    if @user.update_attributes(user_params)
      render json: {user: @user}, status: 201
    else
      render json: {errors: @user.errors}, status: 304
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

    def user_params
      params.require(:user).permit(:first_name, :last_name)
    end

end
