class InvitationsController < ApplicationController
  respond_to :json
  before_filter :require_login, only: [:index]

  def index
    return render json: {invitations: {sent: @user.pending_invited, received: @user.pending_invited_by}}, status: 200
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
