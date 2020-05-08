import consumer from "./consumer"


document.addEventListener('turbolinks:load', function() {
  const comments = document.querySelector('#comments');
const com = document.querySelector('#comment-content');
const comment_attribution = document.querySelector("#comment-attr");
 const comment_name = document.querySelector("#comm-name"); 
  const time = document.querySelector("#time");  

    var blogId = comments.dataset.id;

 const blogChannel = consumer.subscriptions.create(
      {channel: 'BlogChannel', id:blogId},
      {
        connected() {
          console.log('Connected'); 
      },

        received(data) {
          console.log(data)
          com.append(data.comment.content)
          comment_attribution.prepend("Comment posted by");
          comment_name.append(data.current_user) 
          const current_datetime = data.comment.created_at;

           const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let dateObj = new Date();
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let output = month  + '\n'+ day  + ',' + year;
    comment_attribution.append("on" + " " + output)

  var email = data.email;
// -- maybe validate the email? 

// create a new image with the src pointing to the user's gravatar
var gravatar = $('<img>').attr({src: 'http://www.gravatar.com/avatar/?s=60' + (email)});
// append this new image to some div, or whatever
$('#grav').append(gravatar);



          //guide.innerHTML = data.body;
        },
       

      },
{
    

  },

 
 


  
    );




console.log(blogChannel.connected())




});




//  var send_comment;
//      send_comment = function(comment, blog_id) {
//       console.log("Haillla")
//       console.log(comment);
//       console.log(blog_id);
//       console.log(current_user)
//       console.log()
//       // current_user.comments.create!(content: comment, blog_id)
// }













 
