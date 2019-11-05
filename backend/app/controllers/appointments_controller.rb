class AppointmentsController < ApplicationController
    def index
        #appointments->
        @appointments = Appointment.all
        render json: {all_appointments: @appointments}
    end 
    def new


    end 
    def create

    end 
    def show
        
        @ESKETITTTTTT = Appointment.find_by(id:params[:id])
        render json: {Specific_Appointment: @ESKETITTTTTT}
    end 
    def edit
    
    end
    def update

    end 
    def destroy

    end 

end
