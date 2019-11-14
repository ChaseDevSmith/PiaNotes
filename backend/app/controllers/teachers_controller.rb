class TeachersController < ApplicationController
    def index
        #appointments->
        @teachers = Teacher.all
        render json: {teachers: @teachers}
    end 
    def new
        

    end 
    def create
        teacher = Teacher.create(name:params[:name], profession:params[:profession], age:params[:age], number:params[:number], email:params[:email], password:params[:password])
        token = JWT.encode({ id: user.id, type: type }, 'asdljasldkfjs', 'HS256')
        render json: { success: true, id: user.id, token: token}
    end 
    def show
        
        @U_teacher = Teacher.find_by(id:params[:id])
        render json: {teacher: @U_teacher}
    end 
    def edit
    
    end
    def update
        @teacher = Teacher.find(params[:id])
        @teacher.update(name:params[:name],profession:params[:profession],age:params[:age],number:params[:number],email:params[:email])
    end 
    def destroy
        @teacher = Teacher.find(params[:id])
        @teacher.destroy


    end 
    def all_my_students 
        render json: current_user.students
    end

end
