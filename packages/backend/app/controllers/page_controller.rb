require 'faker'

class PageController < ApplicationController
  def home
    build_response('Home')
  end

  def about
    build_response('About')
  end

  private

  def build_response(component)
    preferences = cookies[:preferences] || set_preferences

    render json: {
      component: component,
      props: {
        preferences: preferences
      }
    }
  end

  def set_preferences
    preferences = "#{Faker::Name.name} drinks #{Faker::Tea.variety}"
    cookies[:preferences] = { value: preferences, expires: 1.day, secure: true, httponly: true }
    preferences
  end
end
