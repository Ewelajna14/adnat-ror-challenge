class OrganizationsController < ApplicationController

    #GET /organizations
    def index
        organizations = Organization.all
        render json: organizations, include: :users
    end

    #POST /users/:user_id/organizations
    def create
        user = User.find(params[:user_id])
        organization = user.create_organization(organization_params)
        user.update(user_params)
        render json: organization, status: :created
    end

    #PATCH /organizations/:id
    def update
        organization = Organization.find(params[:id])
        organization.update!(organization_params)
        render json: organization
    end

    #DELETE /organizations/:id
    def destroy
        organization = Organization.find(params[:id])
        organization.destroy
        head :no_content
    end

    def show
        organization = Organization.find(params[:id])
        render json: organization
    end


    private
    def organization_params
        params.require(:organization).permit(:id, :name, :hourly_rate, :users)
    end

    def user_params
        params.permit(:user, :id, :organization_id)
    end

    

end
