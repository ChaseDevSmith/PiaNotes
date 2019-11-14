import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Button } from 'semantic-ui-react'
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'


export default class Mystudents extends React.Component {

    state = {
        students: []
    }

    componentDidMount() {

        fetch('http://localhost:3000/all_my_students', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())

            .then(students => {
                this.setState({students: students})
                
            })

    }

    render() {
        return (
            <div style={{ color: "white", backgroundColor: "coral", height: 2500 }}>
                <form onSubmit={(e) => this.newAccount(e)} >

{console.log("ahhh",this.state.students)}

                    <center>
                       
                       
                        <h1 > allmystudents</h1>



                        {this.state.students.map(student=>{
                            return(
                                <div >
                            <h1><br></br> {student.name}</h1>
                        <p>AGE! {student.age}</p>
                        <p7>NUMBER! {student.number}</p7>
                        </div>)


  })}
   <form action="http://localhost:3001/create-appointment">
                    <div>
                    <input type="submit" value="Create a New Appointment!" />
                    </div>
                </form>
                <Link to="/my-appointments">
     <Button size="massive">
        <p>See Your Appointments</p>
     </Button>
 </Link>
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
