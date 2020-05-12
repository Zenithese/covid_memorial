Rails.application.routes.draw do
  root 'events#index'

  namespace :api, defaults: {format: :json} do
    resources :mourners
    resources :workers
  end
end
