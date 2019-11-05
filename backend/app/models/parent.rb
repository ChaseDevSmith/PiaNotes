class Parent < ApplicationRecord
    has_many :students 
    validates :name, presence: true
    

    # has_many :joiner
    # has_many :many-to-many, through: :joiner

end
