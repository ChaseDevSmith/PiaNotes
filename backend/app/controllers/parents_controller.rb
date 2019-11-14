class ParentsController < ApplicationController
    def index
        #appointments->
        @boomer = Parent.all
        render json: {all_parents: @boomer}
    end 
    def new


    end 
    def create
       parent =  Parent.create(name:params[:name], number:params[:number], email:params[:email],password:params[:password])
       token = JWT.encode({ id: user.id, type: type }, 'asdljasldkfjs', 'HS256')
       render json: { success: true, id: user.id, token: token}
    end 
    def show
        
        @Parent = Parent.find_by(id:params[:id])
        render json: {specific_parent: @Parent}
    end 
    def edit
    
    end
    def update
        @parent = Parent.find_by(id:params[:id])
        @parent.update(name:params[:name],number:params[:number],email:[:email])
    end 
    def destroy
        @parent = Parent.find_by(id:params[:id])
        @parent.destroy 
    end 

end
