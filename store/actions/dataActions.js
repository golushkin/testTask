import { data } from '../types'

export function addRestaurants(restaurants){
    return {
        type: data.ADD_RESTAURANTS,
        payload: restaurants
    }
}

export function visitedApplication(restKey,index){
    return {
        type: data.VISITED_APP,
        payload: {
            restKey,
            index
        }
    }
}

