import { data } from '../types'

export function dataReducer(store = {}, action){
    const pl = action.payload

    switch (action.type) {
        case data.ADD_RESTAURANTS:
            return {...store, ...pl}
    
        case data.VISITED_APP:
            const restaurant = store[pl.restKey].clone()
            restaurant.setAppVisited(pl.index, true)
            return {...store, [pl.restKey]:restaurant}
        default:
            return {...store}
    }
}