class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

# The create method will look up a user in the database via username, verify their login credentials, and then store the authenticated user's id in the session
# If the user is not found then we render an error message
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ['Invalid Username or Password']}, status: :unauthorized
        end
    end

# Destroy action will logout a user based on their current session
    def destroy
        session.delete(:user_id)
        head :no_content
    end

end
