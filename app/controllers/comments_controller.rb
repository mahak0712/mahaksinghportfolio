class CommentsController < ApplicationController

 def create
  
  
    # We want blog id
    # blog = 
    @comment = Comment.new(comment_params)
    @comment = current_user.comments.build(comment_params)

  
     


 

   com =  current_user.comments.create!(content: @comment.content, blog_id: params[:blog_id])


    # @comment = Comment.new(comment_params)
    # if @comment.save
     
   ActionCable.server.broadcast "blog_channel_#{params[:blog_id]}", comment: com , current_user: current_user.first_name , email: current_user.email
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :blog_id)
  end


private

  def render_comment(cum)
   render partial: 'comments/comment', locals: { comment: cum }
  end


  
end
