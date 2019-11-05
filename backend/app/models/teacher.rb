class Teacher < ApplicationRecord
    validates :name, :age, :email, :profession, :presence=> true
    #   validates :nominator_id, :nominee_id, :award_description, :presence => true

    has_many :appointments
    has_many :students, through: :appointments
end
