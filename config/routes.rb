Rails.application.routes.draw do
  scope 'api/v1' do
    resources :sessions, only: [:create]
    get 'sessions/me', to: 'sessions#me'

    get 'users/me', to: 'users#me'
  end
  root 'application#index'
  match '*path' => 'application#index', via: [:get]

end
