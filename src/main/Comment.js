import React, { createRef } from 'react';
import {
    mapDispatchToProps,
    mapStateToProps,
    connect
} from '../redux/store';

import './css/message.css';

class Comment extends React.Component{
    
    constructor(props){
        super(props);

        this.state ={
            from    : this.props.data.id,
            user    : this.props.data.user,
            comment : this.props.data.comment,
            editing :   false,
            showMe  : true,
        }

        this.edit = this.edit.bind(this);
        this.cancel = this.cancel.bind(this);
        this.publish = this.publish.bind(this);
        this.delete = this.delete.bind(this);

        this.textarea = createRef();
    }

    render(){

        if(!this.state.showMe)
            return null;
            
        let normalComment = 
                        <div key={this.state.from} className = 'comment-box' >
                            <div className='user'>
                                <div class='user-photograph'></div>
                                {this.state.user}
                            </div>
                            <div className='comment' onClick={this.edit}>{this.state.comment}</div>
                        </div>
        
        let editComment = 
                        <div key={this.state.from} className='comment-box'>
                            <div className='user'>
                                <div className='user-photograph'></div>
                                {this.state.user}
                            </div>
                            <textarea className='comment' ref={this.textarea} autoFocus>{this.state.comment}</textarea>
                            <div className='buttons'>
                                <button className='publish' onClick={this.publish}>Publish</button>
                                <button className='cancel' onClick={this.cancel}>Cancel</button>
                                <button className ='delete' onClick={this.delete}>Delete</button>
                            </div>
                        </div>

        return this.state.editing ? editComment : normalComment;
    }

 

    edit(){

        if(this.state.from === this.props.id){
            
            this.setState({
                editing:true     
            })
        }      
    }

    cancel(){

        this.setState({
            editing : false
        });
    }

    publish(){

        let comment = this.textarea.current.value; // get the entered comment

        this.setState({
            editing : false,
            comment:comment
        })
    }

    delete(){
         this.setState({
             showMe:false
         });
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Comment);