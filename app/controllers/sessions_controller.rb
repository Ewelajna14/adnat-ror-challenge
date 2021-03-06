class SessionsController < ApplicationController

    skip_before_action :authorize, only: :create
    #POST /login
    def create
        user = User.find_by(email_address: params[:email_address])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: ["Invalid email or password"]}, status: :unauthorized
        end
    end 

    #DELETE /logout
    def destroy
        session.delete :user_id
        head :no_content
    end

end
