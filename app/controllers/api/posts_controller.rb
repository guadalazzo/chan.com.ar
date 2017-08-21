class Api::UsersController < ApplicationController
	include Wor::Paginate

	def index
		@posts = Post.all
		render_paginated @posts
	end
end
