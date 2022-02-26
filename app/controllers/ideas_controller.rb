class IdeasController < ApplicationController

    def index
        ideas = Idea.all
        render json: ideas
      end
    
      def show
        render json: find_idea, status: :ok
      end
    
      def create
        idea = @current_user.ideas.create!(idea_params)
        render json: idea, status: :created
      end
    
      def destroy
        idea = find_idea
        if idea.user === @current_user
          idea.destroy!
          head :no_content
        else
          render json: { errors: ['Not authorized'] }, status: :unauthorized
        end
    end
    
      private
    
      def idea_params
        params.permit(:saved_ideas, :genre, :note, :user_id)
      end
    
    
      def find_idea
        Idea.find(params[:id])
    end
end
