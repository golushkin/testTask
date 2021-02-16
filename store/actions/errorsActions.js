import { error } from '../types'


export function addError(text){
    return {
        type: error.ADD_ERROR,
        payload: text
    }
}

export function clearError(){
    return {
        type: error.CLEAR_ERROR,
    }
}