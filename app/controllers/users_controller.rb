class UsersController < ApplicationController

# We use skip_before_action because we want the client to be able to access signup or login
    skip_before_action :authorize, only: :create


# This method/action creates a new User instance using the provided attributes, in this case using our private method/strong params
# the action is creating the new user and store that user id to a session, then sending the new user object in the response
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end


    def show
        render json: @current_user
    end

    private

# This private method allows us to permit which attributes the user can access/update when a new user is being created also known as strong params
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
