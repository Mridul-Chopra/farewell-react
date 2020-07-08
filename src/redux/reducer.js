import {
    SET_NAME,
    SET_ID,
    SET_IS_LOGIN,
    SET_ALL,
    initialState
} from './types';

const reducer = (state=initialState , action)=>{
    switch(action.type){
        case SET_NAME : return{
            ...state,
            name    :   action.name
        }
        
        case SET_ID  : return{
            ...state,
            id  :   action.id
        }

        case SET_IS_LOGIN : return{
            ...state,
            isLogin :   action.isLogin
        }

        case SET_ALL : return{
            ...state,
            name    :   action.name,
            id      :   action.id,
            isLogin :   action.isLogin
        }

        default: return state;
    }
}


export default reducer;