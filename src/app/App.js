import React from 'react';
import Login from '../login/Login'
import Wall from '../main/Wall'

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let component = <Wall/>
        
        return component;
    }
}

export default App;