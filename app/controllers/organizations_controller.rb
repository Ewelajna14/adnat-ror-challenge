class OrganizationsController < ApplicationController

    #POST /organizations
    def index
        organizations = Organization.all
        render json: organizations
    end

end
