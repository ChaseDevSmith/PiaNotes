import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import "../App.css"


import SignUp from './SignUp';

export default class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    signin(e) {

        e.preventDefault()


        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({ name: e.target.name.value, password: e.target.password.value })

        })

            .then(r => r.json())
            .then(r => {
                console.log(r)
                this.setState({ token: r })
                window.localStorage['token'] = r.token
                console.log(this.state.token)
                // this.props.history.push( <Redirect to="/sign-up" />)
                // debugger
                this.props.history.push("/my-students")
            })


        console.log("heyyyy")


    }
    testOnSubmit(e) {
        e.preventDefault()
        console.log("hey", e.target.value)
    }

    render() {
        this.state = {
            token: ""

        }
        console.log(this.state.token)
        return (


            <div  class ="login-page" style={{ color: "white", backgroundColor: "coral", height: 700 }}>
                <form  class = "form" onSubmit={(e) => this.signin(e)}
                >
                    <center>

                        <h1>Login</h1>


                        Name<br></br><input type="text" id="name"></input>
                        <br></br>
                        Password: <br></br><input type="password" id="password"></input><br></br>
                        <input type="submit" value="login!" ></input>

                        {/* <input type="button" onclick={()=>window.location.href='http://google.com'} value="Go to Google" /> */}
                    </center>



                </form>
                <center>
                
                {/* <form action="http://localhost:3001/teacher-sign-up">
                    <div>
                    <input type="submit" value="Teacher Sign-Up" />
                    </div>
                </form> */}
                <Link to="/student-sign-up">
     <Button size="massive">
        <p>Student Sign-Up!</p>
     </Button>
 </Link>
 <Link to="/parent-sign-up">
     <Button size="massive">
        <p>Parent Sign Up!</p>
     </Button>
 </Link><Link to="/teacher-sign-up">
     <Button size="massive">
        <p>Teacher Sign Up!</p>
     </Button>
 </Link>
{/* 
                <form action="http://localhost:3001/student-sign-up">
                    <div>
                    <input type="submit" value=" Student Sign-Up" />
                    </div>
                </form>
                <form action="http://localhost:3001/parent-sign-up">
                    <div>
                    <input type="submit" value="Parent Sign-Up" />
                    </div>
                </form> */}
                </center>
                
            </div>
        );
    }

}
