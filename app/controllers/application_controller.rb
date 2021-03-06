class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  
  private

# Before we do anything lets authorize and see if current user is authorized, we use the before action macro
# This will make everything in the application require the user to be logged in to use it.
  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: {errors: ['Not authorized']}, status: :unauthorized unless session.include? :user_id
  end

  def render_unprocessable_entity_response(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

end
