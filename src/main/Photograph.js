import React from 'react';
import './css/photograph.css'


class Photograph extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let component = 
                        
                            <img className='photo' src='pp1.jpg'/>
                       
                   
        return component;
    }
}

export default Photograph;