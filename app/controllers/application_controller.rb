class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  end

  helper_method :current_user
  helper_method :authenticated

  private

    def authenticated
      access_token = request.headers["HTTP_ACCESS_TOKEN"] || params[:accessToken] || request.headers[:access_token]
      @user = User.where(access_token: access_token).first
      @user || false
    end
      alias_method :current_user, :authenticated
end
