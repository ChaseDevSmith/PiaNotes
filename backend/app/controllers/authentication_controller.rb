class AuthenticationController < ApplicationController

    def login
        type = nil
        user = nil

        teacher = Teacher.find_by({ name: params[:name]})
        if(teacher)
            type = 'teacher'
            user = teacher
        end
       
        student = Student.find_by({ name: params[:name]})
        if(student)
            type = 'student'
            user = student
        end

        parent = Parent.find_by({ name: params[:name]})
        if(parent)
            type = 'parent'
            user = parent
        end
         
        if(user && user.authenticate(params[:password]))
           token = JWT.encode({ id: user.id, type: type }, 'asdljasldkfjs', 'HS256')
           render json: { success: true, id: user.id, token: token}
        else 
           render json: {success: false, id: nil}
    
        end
    end 
end 
