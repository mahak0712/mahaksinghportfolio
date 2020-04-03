class PageController < ApplicationController
  layout 'aboutme'
  def aboutme
    @skills = Skill.all
  end
end
