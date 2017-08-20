class Api::UsersController < ApplicationController
	include Wor::Paginate

	def index
		@users = User.all
		render_paginated @users
	end
end
