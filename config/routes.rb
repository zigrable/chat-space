Rails.application.routes.draw do
  get 'users/new'
  devise_for :views
  devise_for :users
  root to: "messages#index"
  resources :users, only: [:edit, :update]

end
