Rails.application.routes.draw do

  resources :job_reviews
  resources :equipment_reviews
  resources :equipment, only: [:index, :show, :update, :destroy]
  resources :users, only: [:create, :index, :show, :update, :destroy]
  resources :jobs, only: :index
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
end
