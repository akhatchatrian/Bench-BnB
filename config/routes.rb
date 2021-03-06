Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { formant: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :benches, only: [:create, :index]
  end

  root to: "static_pages#root"
end
