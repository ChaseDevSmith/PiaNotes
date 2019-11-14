class Student < ApplicationRecord
    has_secure_password

    belongs_to :parent
    has_many :appointments
    has_many :teachers, through: :appointments
    has_many :practices
    validates :name, :age, :parent_id, :number, :presence=> true

end
