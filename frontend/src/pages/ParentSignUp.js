import React from 'react';
// import logo from './logo.svg';
// import './App.css';

  export default class ParentSignUp extends React.Component {
    newAccount(e){
        e.preventDefault()
        fetch("http://localhost:3000/parents/",{
            method: "POST",
            headers:{

                
                "Content-Type": "application/json"

            },
            body: JSON.stringify({name: e.target.name.value, number:e.target.number.value,email:e.target.email.value, password:e.target.password.value})
        })
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
            <h1 > Parent Sign Up</h1>
              

             
                Name<br></br><input type="text" id="name"></input>
                <br></br>
                
                number: <br></br><input type="text" id="number"></input><br></br>
                email: <br></br><input type="text" id="email"></input><br></br>


                Password: <br></br><input type="password" id="password"></input><br></br>
                Confirm Password: <br></br><input type="password" id="confirmpassword"></input>
                <input type="submit"  value="Sign-Up!" ></input>
                </center>
               
                
        </form>
        </div>
      );
    }

  }
  