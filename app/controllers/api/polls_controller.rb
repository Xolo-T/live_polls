class Api::PollsController < ApplicationController
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    def create
        @poll = Poll.new(poll_params)

        if @poll.save
            render json: @poll
        else
            render json: @poll.errors.full_messages, status: 401
        end

    end

    def show
        @poll = Poll.find(params[:id])
        if @poll
            render :show
        else
            render json: @poll.errors.full_messages, status: 404
        end
    end

    def index
        #@polls = 
        if params[:user_id]
            @polls = Poll.where(author_id: params[:user_id])
        else
            @polls = Poll.all
        end
        
        #render :index
        render json: @polls
    end

    def edit
        
    end

    def destroy
        @poll = Poll.find(params[:id])
        
        if @poll.destroy
            #redirect_to polls_url
            @polls = Poll.all
            render json: @polls
        else
            render plain: "You can't destroy what's not there."
        end
    end

    private

    def poll_params
        params.require(:poll).permit(:title, :author_id, :group)
    end
    
end