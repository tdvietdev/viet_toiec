Rails.application.routes.draw do
  # devise_for :users
  mount_devise_token_auth_for 'User', at: 'auth'
  get 'hello/index'
  get 'hello/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :hello, only: :index


  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
end