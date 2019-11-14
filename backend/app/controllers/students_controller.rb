class StudentsController < ApplicationController
    def index
        #appointments->
        @ayee = Student.all
        render json: {all_Students: @ayee}
    end 
    def new


    end 
    def create
        student = Student.create(name:params[:name],  age:params[:age], number:params[:number], parent_id:params[:parent_id], password:params[:password])
        token = JWT.encode({ id: user.id, type: type }, 'asdljasldkfjs', 'HS256')
        render json: { success: true, id: user.id, token: token}
    end 
    def show
        
        @AYEE = Student.find_by(id:params[:id])
        render json: {All_Students: @AYEE}
    end 
    def edit
       
    end
    def update
        @student = Student.find_by(id:params[:id])
        @student.update(name:params[:name],age:params[:age],number:params[:number],parent_id:[:parent_id])
    end 
    def destroy
        @student = Student.find_by(id:params[:id])
        @student.destroy 

    end 

end
