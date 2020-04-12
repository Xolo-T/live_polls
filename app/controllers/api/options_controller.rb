class Api::OptionsController < ApplicationController
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    def create
        @option = Option.new(option_params)
        @option[:count] = 0

        if @option.save
            render json: @option
        else
            render json: @option.errors.full_messages, status: 401
        end

    end

    def update
        # debugger
        @option = Option.find(params[:id])
        new_count = @option[:count] + 1
        new_params = {
            title: @option.title, 
            poll_id: @option.poll_id, 
            count: new_count 
        }

        if @option.update(new_params)
            render json: @option
        else
            render json: @option.errors.full_messages, status: 401
        end
    end

    def index
        if params[:poll_id]
            @options = Option.where(poll_id: params[:poll_id])
        else
            @options = Option.all
        end
        #render :index
        render json: @options
    end
    

    def destroy
        @option = Option.find(params[:id])
        poll_id = @option.poll_id

        if @option.destroy
            @options = Option.where(poll_id: poll_id)
            render json: @options
        else
            render plain: "You can't destroy what's not there."
        end
    end

    private 
    def option_params
        params.require(:option).permit(:title, :poll_id)
    end

end
