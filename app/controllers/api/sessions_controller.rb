class Api::SessionsController < ApplicationController
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    def create
        # debugger
        @user = User.find_by_credentials(
                params[:user][:username], 
                params[:user][:password]
            )

        if @user.nil?
            render json:['Invalid credentials!'], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end

    end

    def destroy
        if logged_in?
            logout!
            render json: {}
            # render "api/users/show"
        else
            render json:['Nobody to kickout!'], status: 404
        end
    end
    
end
