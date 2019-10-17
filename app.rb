require 'sinatra'
require 'sinatra/base'
require 'json'
require_relative './lib/saved_data'

class Thermostat < Sinatra::Base

  before do
    @data = SavedData.instance
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    { temp: @data.temp, power: @data.powersaving, location: @data.location }.to_json
  end

  post '/temp' do
    headers 'Access-Control-Allow-Origin' => '*'
    @data.temp = params[:temperature]
  end

  post '/powersaving' do
    headers 'Access-Control-Allow-Origin' => '*'
    @data.powersaving = params[:powersaving]
  end

  post '/location' do
    headers 'Access-Control-Allow-Origin' => '*'
    @data.location = params[:location]
  end
end
