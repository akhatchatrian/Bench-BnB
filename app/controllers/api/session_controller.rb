class Api::SessionController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login(@user)
            redirect_to "api/users/show"
        else   
            render json: { error: "Invalid Login" }.to_json, status: 400
        end
    end

    def destroy
        if !current_user
            render json: { error: "You are not logged in" }.to_json, status: 404
        else   
            logout!
        end
    end 

end


user: {
    username: "arman",
    password: "password"
}

$.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user: {
        username: "arman",
        password: "password"
    }}
  })