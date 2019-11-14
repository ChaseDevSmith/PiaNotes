class PracticesController < ApplicationController
    def index
        #appointments->
        @practice = Practice.all
        puts "AHHHHHHH #{@practice}"
        render json: {all_practices: @practice}
    end 
    def new


    end 
    def create
        puts "PRACTICE CREATE"
        Practice.create(description:params[:description], student_id:params[:student_id])

    end 
    def show
        
        @BOOM = Practice.find_by(id:params[:id])
        render json: {specific_practices: @BOOM}
    end 
    def edit
    
    end
    def update
        @practice = Practice.find_by(id:params[:id])

        @practice.update(description:params[:description])

    end 
    def destroy
        @practice = Practice.find_by(id:params[:id])
        @practice.destroy
    end 

end
