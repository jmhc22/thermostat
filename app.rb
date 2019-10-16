require 'sinatra'
require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    { temp: 18, power: false }.to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    p params[:temperature]
  end

end
