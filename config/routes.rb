Rails.application.routes.draw do
  root 'application#index'
  post 'api/v1/users', to: 'users#create'
end
