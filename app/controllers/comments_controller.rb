class CommentsController < ApplicationController

 def create
  
  
    # We want blog id
    # blog = 
    puts "#{current_user.name}"
    @comment = Comment.new(comment_params)
    @comment = current_user.comments.build(comment_params)


   com =  current_user.comments.create!(content: @comment.content, blog_id: params[:blog_id])
    puts "==============================================="
    puts "#{current_user.email}"
    puts "==============================================="
    puts "#{@comment.content}"
    # @comment = Comment.new(comment_params)
    puts "#{params}"
    puts "Whaattttt COMMENTS #{params[:blog_id]}"

puts "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"


    # @comment = Comment.new(comment_params)
    # if @comment.save
     
   ActionCable.server.broadcast "blog_channel_#{params[:blog_id]}", comment: com , current_user: current_user.first_name , email: current_user.email
# ActionCable.server.broadcast "blogs_#{comment.blog.id}_channel", comment: render_comment(cum)
   
      puts "I DID NOT SAVE ??"
    
   
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
