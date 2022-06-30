class ShiftsController < ApplicationController

    #GET //organizations/:organization_id/shifts
    def index
        orgId = params[:organization_id]
        shift = Shift.includes(:user).where(users: {organization_id: orgId})
        render json: shift
    end

end
