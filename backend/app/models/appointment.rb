class Appointment < ApplicationRecord
    validates :student_id, :teacher_id, :description,  :presence=> true

    belongs_to :student
    belongs_to :teacher
end
