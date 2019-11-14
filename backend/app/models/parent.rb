class Parent < ApplicationRecord
    has_secure_password

    has_many :students 
    validates :name, :number, :email,  :presence=> true

    

    # has_many :joiner
    # has_many :many-to-many, through: :joiner

end
