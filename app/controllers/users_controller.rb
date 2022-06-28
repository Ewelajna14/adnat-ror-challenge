class UsersController < ApplicationController
    #post /users
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private
    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end
