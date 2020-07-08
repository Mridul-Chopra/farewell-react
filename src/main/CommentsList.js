import React from 'react';
import Comment from './Comment';

class CommentsList extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        let component = 
                        <div className ='comment-list'>
                            {
                                this.props.data.map( element=><Comment data = {element}/>)
                            }
                        </div>
        return component;
    }
}

export default CommentsList;