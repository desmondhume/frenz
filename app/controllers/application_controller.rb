class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  end

  helper_method :current_user
  helper_method :authenticated
  helper_method :require_login

  private

    def authenticated
      access_token = request.headers["HTTP_ACCESS_TOKEN"] || params[:accessToken] || params[:access_token] || request.headers[:access_token]
      @user = User.where(access_token: access_token).first
      @user || false
    end
      alias_method :current_user, :authenticated

    def require_login
      unless authenticated
        respond_to do |format|
          format.json { render json: {error: 'You are not logged in'}.to_json, status: 403 }
        end
      end
    end
end
