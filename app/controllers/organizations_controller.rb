class OrganizationsController < ApplicationController

    #GET /organizations
    def index
        organizations = Organization.all
        render json: organizations
    end

    #POST /organizations
    def create
        organization = Organization.create!(organization_params)
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

    private
    def organization_params
        params.permit(:id, :name, :hourly_rate)
    end

end
