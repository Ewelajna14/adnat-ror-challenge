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
       render json: shift, include: [:user],  status: :created
    end

    #DELETE /shifts/:id
    def destroy
        shift = @current_user.shifts.find_by(id: params[:id])
        if shift
        shift.destroy
        head :no_content
        else
        render json: {error: "You can't delete someone else's shift"}
        end
    end

    private
    def shift_params
        params.require(:shift).permit(:date, :start, :finish, :break_length)
    end 


end
