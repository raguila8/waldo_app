Rails.application.routes.draw do
  get 'highscores/create'

  root 'images#index'
  get '/images/:image', to: 'images#show'
  post '/highscores', to: 'highscores#create'
end
