import { error } from '../types'

const intialState = {
    text: ''
}

export function errorsReducer(store = intialState, action) {
    switch (action.type) {
        case error.ADD_ERROR:
            return { text: action.payload }

        case error.CLEAR_ERROR:
            return { text: "" }

        default:
            return { ...store }
    }
}