class Api::PollsController < ApplicationController
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    def create
        #debugger
        @poll = Poll.new(poll_params)

        if @poll.save
            render json: @poll
        else
            render json: @poll.errors.full_messages, status: 401
        end

    end

    def show
        #debugger
        @poll = Poll.find(params[:id])
        if @poll
            render :show
            #render json: @poll
        else
            render json: @poll.errors.full_messages, status: 404
        end

    end

    def index
        if params[:author_id]
            @polls = Poll.where(author_id: params[:author_id])
        else
            @polls = Poll.all
        end
        
        #render :index
        render json: @polls
    end

    def edit
        
    end

    def destroy
        #debugger
        @poll = Poll.find(params[:id])
        author_id = @poll.author_id
        
        if @poll.destroy
            @polls = Poll.where(author_id: author_id)
            render json: @polls
        else
            render plain: "You can't destroy what's not there."
        end
    end

    private
    def poll_params
        #debugger
        params.require(:poll).permit(:title, :author_id, :group)
    end
    
end