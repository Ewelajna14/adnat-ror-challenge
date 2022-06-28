Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

   resources :users, only: [:create]
  
   #login existing user
   post "/login", to: "sessions#create"
   #log user out
   delete "/logout", to: "sessions#destroy"

   # keep user logged in after refreshing page
   get "/me", to: "users#show"


  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
