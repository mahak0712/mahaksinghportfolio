class BlogChannel < ApplicationCable::Channel
  def subscribed
    puts("hey1")
     stream_from "blog_channel_#{params[:id]}"
      
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
def send_comment(data)
    current_user.comments.create!(content: data['comment'], blog_id: data['blog_id'])
  end
  
end
