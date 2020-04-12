Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    
    resources :users, only: [ :create, :index ]
    resource :session, only: [ :create, :destroy ]
    
    resources :polls, only: [ :create, :index, :show, :destroy]
    resources :options, only: [ :create, :index, :show, :edit, :update, :destroy]

  end

  root to: "static_pages#root"

end
