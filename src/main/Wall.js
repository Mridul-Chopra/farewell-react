import React from 'react';
import CommentsList from './CommentsList';
import Names from './Names';
import Photograph from './Photograph';
import{
    mapStateToProps,
    mapDispatchToProps,
    connect
} from '../redux/store'

import './css/wall.css';


class Wall extends React.Component{

    constructor(props){

        super(props);
        this.state = {
                        comments:[{id:1,user:'Mridul',comment:'Hi friends'},{id:2,user:'yash',comment:'hi'},{id:1,user:'Mridul',comment:'Hi friends'},{id:2,user:'yash',comment:'hi'}],
                        names:[{id:'1',name:'name1'} , {id:'2' , name:'name2'} , {id:'3' , name:'name3'}]
                    }
    }

    render(){
        let component = 
                        <div className = 'wrapper'>
                                <div className='names'>
                                    {/* <Names users={this.state.names} title='Logged in User'/> */}
                                </div>
                                {/* <Photograph/> */}
                                <div className = 'comments'>
                                    <CommentsList data={this.state.comments}/>
                                </div>
                        </div>
        return component;
    }

    componentDidMount(){
        console.log('The state is',this.props.id,this.props.name,this.props.isLogin);
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Wall);