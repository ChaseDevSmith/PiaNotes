Rails.application.routes.draw do
  resources :practices
  resources :appointments
  resources :parents
  resources :students
  resources :teachers
  post('/login', to: 'authentication#login')
  get "my-appointments", to: "appointments#my_appointments"
  get "/all_my_students", to: "teachers#all_my_students"  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
