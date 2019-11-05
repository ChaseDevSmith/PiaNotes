class TeachersController < ApplicationController
    def index
        #appointments->
        @teachers = Teacher.all
        render json: {teachers: @teachers}
    end 
    def new
        

    end 
    def create
        Teacher.create(name:params[:name], profession:params[:profession], age:params[:age], number:params[:number], email:params[:email])
    end 
    def show
        
        @U_teacher = Teacher.find_by(id:params[:id])
        render json: {teacher: @U_teacher}
    end 
    def edit
    
    end
    def update

    end 
    def destroy

    end 
    def all_my_students
        puts 'hi nom'
        byebug
    end

end
