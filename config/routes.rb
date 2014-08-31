Rails.application.routes.draw do

  scope 'api/v1' do
    resources :sessions, only: [:create]
    delete 'sessions', to: 'sessions#destroy'

    resources :users, only: [:index]
    get 'users/me', to: 'users#me'
    put 'users/me', to: 'users#update'

    get 'invitations', to: 'invitations#index'
  end
  root 'application#index'
  match '*path' => 'application#index', via: [:get]

end
