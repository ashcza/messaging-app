Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  root "static_pages#root"
  resources :messages

end
