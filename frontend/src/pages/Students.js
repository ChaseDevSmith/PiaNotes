import React from "react"
export default class Students extends React.Component {
    
    constructor(props){
        super(props)
    }
    

    render() {
        console.log(this.props.lol)
       
        
        return (
           
        <div style={{color: "white", backgroundColor:"coral", height: 700}}>
            <form onSubmit={(e)=>this.signin(e)}
            > 
            <center>
        
                <h1>Students</h1>

             
                Name<br></br><input type="text" id="name"></input>
                <br></br>
                Password: <br></br><input type="password" id="password"></input><br></br>
                <input type="submit"  value="login!" ></input>
                
                </center>
                
               
                

            </form>
            </div>
        );
    }

}
