class UsersController < ApplicationController
  def create
    respond_to do |format|
      @user = {
            first_name: 'Gregorio',
            last_name: 'Setti',
            town: 'Milano'
          }
      format.json { render json: {message: 'Welcome!', user: @user}.to_json, status: 201 }
    end
  end
end
