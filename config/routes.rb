Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
	root 'static#index'
	resources :users

	namespace :api do
		resources :users
	end
end
