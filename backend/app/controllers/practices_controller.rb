class PracticesController < ApplicationController
    def index
        #appointments->
        @practice = Practice.all
        render json: {all_practices: @practice}
    end 
    def new


    end 
    def create

    end 
    def show
        
        @BOOM = Practice.find_by(id:params[:id])
        render json: {specific_practices: @BOOM}
    end 
    def edit
    
    end
    def update

    end 
    def destroy

    end 

end
