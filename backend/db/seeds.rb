# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'
Teacher.create(name:"chase", profession:"Piano Teacher", age:"19", number:"8329099309", email:"chases832@gmail.com" ,password:"1")
Teacher.create(name:"trevor", profession:"Piano Teacher", age:"19", number: "7345867224", email:"tfu7@gmail.com", password:"1")
Parent.create(name:"basilio", number:"8234750998",email:"cool@gmail.com", password:"1")
Parent.create(name:"Huanita", number:"8234750998",email:"cool@gmail.com", password:"1")
Parent.create(name:"Maxamillion", number:"8234750998",email:"cool@gmail.com", password:"1")
Parent.create(name:"Jerry", number:"8234750998",email:"cool@gmail.com", password:"1")

Student.create(name:"Leah Herbert", age:"10", number:"3469708460‬", parent_id:1, password:"1" )
Student.create(name:"Madison pottieger", age:"10", number:"3469708460‬", parent_id:2, password:"1" )
Student.create(name:"Lena", age:"10", number:"3469708460‬", parent_id:3, password:"1" )
Student.create(name:"Cameron", age:"10", number:"3469708460‬", parent_id:4, password:"1" )
Appointment.create(student_id:1, teacher_id:1, description: "first lesson went well and lasted one hour!", time: DateTime.new())
bob = Practice.create(description:"two octave scale practice", time:DateTime.new())
puts "this is bob: #{bob}"
# STUDENTS
# PRACTICES 
# TEACHERS
# PARENTS
# APPOINTMENTS - JOINER