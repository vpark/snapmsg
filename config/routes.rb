Snapmsg::Application.routes.draw do
  scope "api" do
    resources :users, only: [:index, :show], defaults: {format: :json}  do
      resources :messages, only: [:index, :create, :show, :update, :destroy], defaults: {format: :json} 
    end
    resources :messages, only: [:show], defaults: {format: :json}
  end

  root to:  "main#index"
  resources :emailers, only: [:new, :create]
  devise_for :users, path_names: {sign_in: "login", sign_out: "logout"}
end
