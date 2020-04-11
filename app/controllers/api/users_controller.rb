class Api::UsersController < ApplicationController
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    def create
        # debugger
        @user = User.new(user_params)
        #debugger
        if @user.save
            # dont use save! I used it and it broke my code
            # it doesn't return a bolean so the if statement is never executed
            login!(@user)
            # render :show  #render "api/users/show"
            # render json:@user  
            render "api/users/show"
        else
            #debugger
            render json: @user.errors.full_messages, status: 401
            #render json:['Invalid credentials!'], status: 422  # not 401
        end
        #debugger
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
