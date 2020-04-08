class Api::UsersController < ApplicationController
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    def create
        # debugger
        @user = User.new(user_params)
        if @user.save!
            login!(@user)
            # render :show  #render "api/users/show"
            # render json:@user  
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422  # not 401
        end
    end

    def index
        @users = User.all
        # debugger
        render json: @users
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
