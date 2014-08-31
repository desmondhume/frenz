class InvitationsController < ApplicationController
  respond_to :json
  before_filter :require_login, only: [:index]

  def index
    return render json: {invitations: {sent: @user.pending_invited, received: @user.pending_invited_by}}, status: 200
  end

end
