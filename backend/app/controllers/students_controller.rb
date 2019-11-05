class StudentsController < ApplicationController
    def index
        #appointments->
        @ayee = Student.all
        render json: {all_Students: @ayee}
    end 
    def new


    end 
    def create
        Student.create(name:params[:name],  age:params[:age], number:params[:number], parent_id:params[:parent_id])

    end 
    def show
        
        @AYEE = Student.find_by(id:params[:id])
        render json: {All_Students: @AYEE}
    end 
    def edit
    
    end
    def update

    end 
    def destroy

    end 

end
