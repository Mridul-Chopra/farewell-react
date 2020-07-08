import {createStore} from 'redux';
import reducer from './reducer';
import{
    setName,
    setId,
    setLogin,
    setAll
} from './actionCreators';
 import {connect} from 'react-redux';

const store = createStore(reducer);

const mapStateToProps = state =>{
    return{
        name    :   state.name,
        id      :   state.id,
        isLogin :   state.isLogin   
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        setName     :   (name)=>dispatch(setName(name)),
        setId       :   (id)=>dispatch(setId(id)),
        setLogin    :   (status)=>dispatch(setLogin(status)),
        setAll      :   (name,id,status)=>dispatch(setAll(name,id,status))
    }
}

export {
    store,
    mapDispatchToProps,
    mapStateToProps,
    connect
};