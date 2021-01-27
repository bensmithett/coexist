class HomeController < ApplicationController
  def index
    render json: {
      component: 'Home',
      props: {
        count: 1234
      }
    }
  end
end
