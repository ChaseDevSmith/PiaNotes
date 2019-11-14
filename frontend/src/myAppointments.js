import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'

export class myAppointments extends Component {
    state = {
        appointments: []
    }

    componentDidMount() {

        fetch('http://localhost:3000/my-appointments', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())

            .then(appointments => {
                this.setState({appointments: appointments})
                
            })

    }


    render() {
        return (
            <div style={{ color: "white", backgroundColor: "coral", height: 2500 }}>
                <form onSubmit={(e) => this.newAccount(e)} >
                    <center>
                        <h1> all my appointments </h1>
                        {this.state.appointments.map(appointment=>{
                            return(
                                <div >
                            <h4><br></br> Student : {appointment.student.name}</h4>
                        <p>Teacher :  {appointment.teacher.name}</p>

                        <p7>Description: {appointment.description}</p7>
                        </div>)})}
                        <form action="http://localhost:3001/create-appointment">
                    <div>
                    <input type="submit" value="Create a New Appointment!" />
                    </div>
                </form>
                <Link to="/login">
     <Button size="massive">
        <p>Return Home!</p>
     </Button>
 </Link>
 <Link to="/my-students">
     <Button size="massive">
        <p>Your Students!</p>
     </Button>
 </Link>
                    </center>
                </form>
            </div>
        )
    }
}

export default myAppointments
