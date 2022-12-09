import React,{Component} from 'react'
import Login from "./pages/login/login.jsx";
import Index from './pages/index/index.jsx';
import './App.css';
import cookie from 'react-cookies';
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom';
import 'antd/dist/reset.css';

class App extends Component{
  state = {
    username: cookie.load('username'),
}



  render(){
    return (
      <div>
        <BrowserRouter>
                <Switch>
                    <Route path="/index" component={Index} />
                    <Route path="/login" component={Login} />
                    {/* <Route path="/register" component={Register} />
                    <Route path="/forgetpwd" component={ForgetPwd} /> */}
                    <Redirect to= "/login" />
                </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
  


export default App;
