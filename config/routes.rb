Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
   resources :organizations, only: [:index, :create, :update, :destroy, :show]
   resources :users, only: [:index, :create, :update]
   resources :shifts, only: [:create, :update, :destroy]
  
   #login existing user
   post "/login", to: "sessions#create"
   #log user out
   delete "/logout", to: "sessions#destroy"

   # keep user logged in after refreshing page
   get "/me", to: "users#show"

   


  resources :users do
    resources :organizations, only: [:create]
  end

  resources :organizations do
      resources :shifts, only: [:index]
    end
  

  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
