import React from 'react';
import './login.css';

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {userId:'',password:'',status:''} // state of the component 


        /* Binding all the events */
        this.login = this.login.bind(this); 

        /* Making reference */
        this.id = React.createRef();
        this.password = React.createRef();
    }

    render(){
        let loginBox = 
                            <div className = 'login-box'>
                                <div className ='login-heading'></div>
                                    <div>
                                        <label htmlFor = 'user-id'>User Id</label>
                                        <input type='text' ref={this.id}></input>
                                    </div>
                                    <div>
                                        <label htmlFor ='password'>Password</label>
                                        <input type = 'password' ref={this.password}></input>
                                    </div>
                                    
                                    <button onClick={this.login}>Login</button>
                                    <div className = 'error'>{this.state.status}</div>
                                
                            </div>

        let component = <div className='wrapper'>
                            <div className='header'>
                                 {/* यादें डेविएट की */}
                            </div>
                            {loginBox}
                        </div>
        return component;
    }

    login(){
        let id = this.id.current.value; // get the value of the user id
        let password = this.password.current.value; // get the value of the password

        if(id==='' | id===null | password==='' | password===null){ // validating the password
            this.setState({
                status:'Please enter all the details' // updating the status in the state
            });
            return;
        }else{
            this.setState({
                status:id+' '+password
            })
        }
    }

}


export default Login;