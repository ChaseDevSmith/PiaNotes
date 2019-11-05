class Student < ApplicationRecord
    belongs_to :parent
    has_many :appointments
    has_many :teachers, through: :appointments
    has_many :practices
    validates :name, presence: true
end
