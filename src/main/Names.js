import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp , faAngleDown} from '@fortawesome/free-solid-svg-icons'
import './css/dd.css';

class Names extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            listOpen:false,
            title:this.props.title
        }

        this.openOrClose = this.openOrClose.bind(this);
    }

    render(){
        let component = 

                                <div className='dd-wrapper'>
                                    <div className="dd-header">
                                        <div className="dd-header-title" onClick={this.openOrClose}>{this.state.title}</div>                                    
                                    {
                                        this.state.listOpen ? 
                                                                <FontAwesomeIcon icon={faAngleUp} size='2x' onClick={this.openOrClose}/>
                                                            :
                                                                <FontAwesomeIcon icon={faAngleDown} size='2x' onClick={this.openOrClose}/>
                                    }
                                    </div>
                                    {
                                        this.state.listOpen && 
                                        <ul className="dd-list">
                                            {this.props.users.map( element =><li className='dd-list-item' key={element.id} onClick={(e)=>this.changeTitle(e)}>{element.name}</li> )}
                                        </ul>
                                    }
                                </div>
      
        return component;
    }

    openOrClose(){ // on click of the button close the list or open it
        this.setState({
            listOpen:!this.state.listOpen
        })
    }

    changeTitle(event){
        let title = event.target.innerHTML; // get the name from the clicked button
        this.setState({ // update the state to change the title and close the list
            title:title,
            listOpen:false
        })
    }
}

export default Names;