import React from 'react';
// import logo from './logo.svg';
// import './App.css';

  export default class StudentSignUp extends React.Component {
    newAccount(e){
        e.preventDefault()
        fetch("http://localhost:3000/students/",{
            method: "POST",
            headers:{

                
                "Content-Type": "application/json"

            },
            body: JSON.stringify({name: e.target.name.value,  age: e.target.age.value, number:e.target.number.value,parent_id:e.target.parent_id.value, password:e.target.password.value})
        })
        .then(r=>r.text())
        .then(resonse=>{
            localStorage.setItem('token', resonse.token)
            this.props.history.push("/create-appointment")
    }
        )


    }

    render(){
      return(
        <div style={{color: "white", backgroundColor:"coral", height: 700}}>
        <form onSubmit={(e)=>this.newAccount(e)} >
         
            <center>
            <h1 > Student Sign Up </h1>
              

             
                Name<br></br><input type="text" id="name"></input>
                <br></br>
                age: <br></br><input type="text" id="age"></input><br></br>
                number: <br></br><input type="text" id="number"></input><br></br>
                parent_id: <br></br><input type="text" id="parent_id"></input><br></br>


                Password: <br></br><input type="password" id="password"></input><br></br>
                Confirm Password: <br></br><input type="password" id="confirmpassword"></input>
                <input type="submit"  value="Sign-Up!" ></input>
                </center>
               
                
        </form>
        </div>
      );
    }

  }
  