import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Button } from 'semantic-ui-react'
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'




  export default class createAppointment extends React.Component {
      state = {
          appointments: [] ,
          students: [],
          teachers: []
      }
    newAppointment(e){
        e.preventDefault()
        fetch("http://localhost:3000/appointments/",{
            method: "POST",
            headers:{

                
                "Content-Type": "application/json"

            },
            body: JSON.stringify({student_id: e.target.student_select.value,  teacher_id: e.target.teacher_select.value, description: e.target.description.value})
        })
        .then(r=>r.text())
        .then(text=>{console.log(text) 
            this.props.history.push("/my-appointments")
    }
        )


    }
    componentDidMount(){
   
        // fetch("http://localhost:3000/students")
        // .then(r=>r.json())
        // .then(appointments=>this.setState({appointments: appointments}))
        fetch("http://localhost:3000/students")
        .then(r=>r.json())
        .then(students=>this.setState({ students: students}))
        console.log(this.state.students)
        fetch("http://localhost:3000/teachers")
        .then(r=>r.json())
        .then(teachers=>this.setState({teachers: teachers.teachers}))
        console.log("state", this.state)
    
    }
    populateSelect = () =>{
        console.log("populateSelect")
        
        // this.state.appointments !== null ? this.state.appointments.all_appointments.map(appointment=>{
        //     console.log("appointment: ",appointment)
        //     return(
        //         <option value={appointment.student.name}>{appointment.student.name} </option>
        //     )

        // }) :
        // <h1>omfg</h1>
        return <h1>hi mom</h1>
    }

    render(){
        console.log(this.state.appointments)
        if(this.state.students.length === 0 ){
            return(
                <h1>Loading...</h1>
            )
        }
      return(
        <div style={{color: "white", backgroundColor:"coral", height: 700}}>
        <form onSubmit={(e)=>this.newAppointment(e)} >
         
            <center>
            <h1 > Create an Appointment </h1>
              

             {/* {console.log(this.state.appointments)} */}
                Teacher Name<br></br>
              {/* <select>
                  {this.state.appointments.all_appointments.map(appointment=>{
                        return(
                        <option value={appointment.student.name}>{appointment.student.name}</option>
                        )
                    })
                  }
              </select> */}
              <select id='teacher_select'>
                  {this.state.teachers.map(student=>{
                      return(
                      <option id="teacher_id" value={student.id}>{student.name}</option>
                      )
                  }

                  )}
              </select>
               
                <br></br>
                Student Name!<br></br>
                <select id='student_select'>
                  {this.state.students.all_Students.map(student=>{
                      return(
                      <option id="student_id" value={student.id}>{student.name}</option>
                      )
                  }

                  )}
              </select>
                <br></br>
                Description: <br></br><input type="text" id="description"></input><br></br>
               
               

                <input type="submit"  value="Create Appointment!" ></input>
            <br></br>
                <Link to="/login">
     <Button size="massive">
        <p>Return Home!</p>
     </Button>
 </Link>

                </center>
               
                
        </form>
        </div>
        
      );
      
    }

  }
  