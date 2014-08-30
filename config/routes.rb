Rails.application.routes.draw do
  root 'application#index'
  
  scope 'api/v1' do
    resources :sessions, only: [:create]
    get 'sessions/me', to: 'sessions#me'

    get 'users/me', to: 'users#me'
  end

end
