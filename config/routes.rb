Rails.application.routes.draw do

  resources :stats, only: [:index]
  resources :job_reviews
  resources :equipment_reviews, only: [:index]
  resources :equipment, only: [:index, :show, :update, :destroy]
  resources :users, only: [:index, :update, :destroy]
  resources :jobs, only: [:index]
  # Routing logic: fallback requests for React Router.
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/authorized_user', to: 'users#show'
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post '/signup', to: 'users#create'
end 