class Api::PostsController < ApplicationController
	include Wor::Paginate

	def index
		@posts = Post.all
		render_paginated @posts
	end
	def show
		@post= Post.find(params[:id])
		render json: @post 
	end
end
