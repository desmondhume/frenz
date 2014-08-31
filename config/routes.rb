Rails.application.routes.draw do

  scope 'api/v1' do
    resources :sessions, only: [:create]
    get 'sessions/me', to: 'sessions#me'

    resources :users, only: [:index]
    get 'users/me', to: 'users#me'
    put 'users/me', to: 'users#update'
  end
  root 'application#index'
  match '*path' => 'application#index', via: [:get]

end
