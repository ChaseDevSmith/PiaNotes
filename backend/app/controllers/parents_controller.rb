class ParentsController < ApplicationController
    def index
        #appointments->
        @boomer = Parent.all
        render json: {all_parents: @boomer}
    end 
    def new


    end 
    def create
        Parent.create(name:params[:name], number:params[:number], email:params[:email])

    end 
    def show
        
        @Parent = Parent.find_by(id:params[:id])
        render json: {specific_parent: @Parent}
    end 
    def edit
    
    end
    def update

    end 
    def destroy

    end 

end
