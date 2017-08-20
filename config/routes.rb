Rails.application.routes.draw do
	root 'static#index'
	resources :users

	namespace :api do
		resources :users
	end
end
