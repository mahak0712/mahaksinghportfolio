User.create!(
  email: "test@test.com",
  password: "asdfasdf",
  password_confirmation: "asdfasdf",
  name: "Admin User",
  roles: "site_admin"
)

puts "1 Admin user created"

User.create!(
  email: "test2@test.com",
  password: "asdfasdf",
  password_confirmation: "asdfasdf",
  name: "Regular User",
)

puts "1 regular user created"


3.times do |topic|
  Topic.create!(
    title:"Topic #{topic}"
  )
end

puts "3 Topics created"

10.times do |blog|
  Blog.create!(
    title:"My Blog Post #{blog}",
    body:"A text file is a computer file that only contains text and has no special formatting such as bold text, italic text, images, etc. With Microsoft Windows computers text files are identified with the .txt file extension, as shown in the example picture.",
    topic_id:Topic.last.id
  )
end

puts "10 blog posts created"

5.times do |skill|
  Skill.create!(
    title:"Rails #{skill}",
    percent_utilized:15
  )
end

puts "5 skills created"

8.times do |portfolio_item|
  Portfolio.create!(
    title:"Portfolio title: #{portfolio_item}",
    subtitle:"Ruby on Rails",
    body:"A text file is a computer file that only contains text and has no special formatting such as bold text, italic text, images, etc. With Microsoft Windows computers text files are identified with the .txt file extension, as shown in the example picture.",
    main_image:"http://via.placeholder.com/700x300",
    thumb_image:"http://via.placeholder.com/400x250"
  )
end

1.times do |portfolio_item|
  Portfolio.create!(
    title:"Portfolio title: #{portfolio_item}",
    subtitle:"Angular",
    body:"A text file is a computer file that only contains text and has no special formatting such as bold text, italic text, images, etc. With Microsoft Windows computers text files are identified with the .txt file extension, as shown in the example picture.",
    main_image:"http://via.placeholder.com/700x300",
    thumb_image:"http://via.placeholder.com/400x250"
  )
end

puts "9 Portfolio items created"

3.times do |technology|
  Portfolio.last.technologies.create!(
    name:"Technology #{technology}"
  )
end

puts "3 Technology items created"

