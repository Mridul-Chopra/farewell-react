import {
    SET_NAME, 
    SET_ID,
    SET_IS_LOGIN,
    SET_ALL
} from './types';

function setName(name){
    return {
        type    :   SET_NAME,
        name    :   name
    }
}

function setId(id){
    return{
        type    :   SET_ID,
        id      :   id
    }
}

function setLogin(status){
    return{
        type    :   SET_IS_LOGIN,
        isLogin :   status
    }
}

function setAll(name,id,status){
    return{
        type    :   SET_ALL,
        name    :   name,
        id      :   id,
        isLogin :   status
    }
}

export {
    setName,
    setId,
    setLogin,
    setAll
}