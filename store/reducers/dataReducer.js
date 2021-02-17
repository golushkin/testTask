import { data } from '../types'

export function dataReducer(store = {}, action){
    const pl = action.payload

    switch (action.type) {
        case data.ADD_RESTAURANTS:
            return {...store, ...pl}
    
        case data.VISITED_APP:
            const arr = [...store[pl.restKey]]
            arr[pl.index].visited = true
            return {...store, [pl.restKey]:arr}
        default:
            return {...store}
    }
}