class AppointmentsController < ApplicationController
    def index
        #appointments->
        @appointments = Appointment.all
        render json: {all_appointments: @appointments}, include: [ :student, :teacher ]
    end 
    def new


    end 
    def create
        Appointment.create(student_id:params[:student_id], teacher_id:params[:teacher_id], description: params[:description])

    end 
    def show
        
        @ESKETITTTTTT = Appointment.find_by(id:params[:id])
        render json: {Specific_Appointment: @ESKETITTTTTT}
    end 
    def edit
    
    end
    def update
        @appointment = Appointment.find_by(id:params[:id])
        @appointment.update(student_id:params[:student_id],teacher_id:params[:parent_id],description:params[:description])

    end 
    def destroy
        @appointment = Appointment.find_by(id:params[:id])
        @appointment.destroy 

    end 
    def my_appointments 
        render json: current_user.appointments, include: [ :student, :teacher ]
    end



end
