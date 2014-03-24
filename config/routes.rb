Snapmsg::Application.routes.draw do
  scope "api" do
    resources :users, only: [:index, :show], defaults: {format: :json}  do
      resources :messages, only: [:index, :create, :show, :destroy], defaults: {format: :json} 
    end
    # resources :messages, only: [:show], defaults: {format: :json}
  end

  root to:  "main#index"
  
  devise_for :users, path_names: {sign_in: "login", sign_out: "logout"}
end
