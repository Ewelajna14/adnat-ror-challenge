class ShiftsController < ApplicationController

    #GET //organizations/:organization_id/shifts
    def index
        orgId = params[:organization_id]
        shift = Shift.includes(:user).where(users: {organization_id: orgId})
        render json: shift, include: [:user]
    end

    #POST /shifts
    def create
       shift =  @current_user.shifts.create!(shift_params)
       render json: shift, status: :created
    end

    private
    def shift_params
        params.require(:shift).permit(:date, :start, :finish, :break_length)
    end 


end
