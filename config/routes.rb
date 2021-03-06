Rails.application.routes.draw do
  
  resources :patterns
  resources :ideas
  #Sessions Routes
  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'

  #Users Routes
  post "/signup", to: 'users#create'
  get "/me", to: 'users#show'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
