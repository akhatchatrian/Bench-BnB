class ApplicationController < ActionController::Base

    

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logged_in?
        !!current_user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        render plain: "You are logged out"
    end

    def require_login
        redirect_to api_session_url if !logged_in?
    end
end
