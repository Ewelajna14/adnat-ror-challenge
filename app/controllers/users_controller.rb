class UsersController < ApplicationController

    skip_before_action :authorize, only: :create
    #post /users
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    #GET /users
    def index
        users = User.all
        render json: users, each_serializer: UserSerializer
    end

    #GET /me
    def show
        render json: @current_user
     end

     #PATCH /users/:id
     def update
        #user = User.find(params[:id])
        @current_user.update!(user_params)
        if(@current_user.shifts)
            @current_user.shifts.delete_all
        render json: @current_user
        end
     end


    private
    def user_params
        params.permit(:user, :id, :name, :organization_id, :email_address, :password, :password_confirmation, :shifts)
    end
end
