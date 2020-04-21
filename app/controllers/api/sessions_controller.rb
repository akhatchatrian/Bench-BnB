class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login(@user)
            render "api/users/show"
        else   
            render json: { error: "Invalid Login" }.to_json, status: 401
        end
    end

    def destroy
        @user = current_user
        
        if !@user
            render json: { error: "You are not logged in" }.to_json, status: 404
        else   
            logout!
            render "api/users/show"
        end
    end 
end

