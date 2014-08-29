Rails.application.routes.draw do
  post 'api/v1/users', to: 'users#create'
end
