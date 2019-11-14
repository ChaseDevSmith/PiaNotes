class ApplicationController < ActionController::API
    rescue_from Exception, :with => :render_error_response
    def render_error_response(error)
        render json: error
    end

    def current_user
        begin
            method, token = request.headers[:Authorization].split(' ')
            if method === 'Bearer'
                payload, header = JWT.decode(token, 'asdljasldkfjs')
                
                if(payload['type'] == 'teacher')
                    Teacher.find(payload["id"])
                elsif(payload['type'] == 'student')
                    Student.find(payload["id"])
                elsif(payload['type'] == 'parent')
                    Parent.find(payload["id"])
                else
                    raise Exception.new('Unknown user type')
                end

            end
        rescue
            raise Exception.new('You must be logged in to make this request')
        end
    end

end
