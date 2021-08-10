require 'faker'

class HomeController < ApplicationController
  def index
    preferences = cookies[:preferences] || set_preferences

    render json: {
      component: 'Home',
      props: {
        count: 1234,
        preferences: preferences
      }
    }
  end

  private

  def set_preferences
    preferences = "#{Faker::Name.name} drinks #{Faker::Tea.variety}"
    cookies[:preferences] = { value: preferences, expires: 1.day, secure: true, httponly: true }
    preferences
  end
end
