import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Students from './pages/StudentSignUp'
import Parents from "./pages/ParentSignUp"
import mystudents from "./pages/mystudents"
import StudentSignUp from "./pages/StudentSignUp"
import ParentSignUp from "./pages/ParentSignUp"
import createAppointment from "./pages/createAppointment"
import myAppointments from './myAppointments';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        students:[]
    }
}



componentDidMount(){
  fetch("http://localhost:3000/students")
  .then(r=>r.json())
  .then(r=> this.setState({students:r.all_Students }),
    console.log(this.state.students))

}

  render() {
    this.state={
      students:[]
    }
    // this.getStudents()
    console.log(this.state.students)
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/teacher-sign-up" component={SignUp} />
          <Route exact path="/student-sign-up" component={StudentSignUp} />
          <Route exact path="/parent-sign-up" component={ParentSignUp} />
          <Route exact path="/create-appointment" component={createAppointment}  />
          <Route exact path="/my-appointments" component={myAppointments}  />

          <Route exact path="/students" component={Students} lol={this.state.students} />
          <Route exact path="/parents" component={Parents}  />
          <Route exact path="/my-students" component={mystudents}  />


          <Route path="/" render={() => <Redirect to="/login" />} />
        </Switch>
      </BrowserRouter>
    );
  }

}
