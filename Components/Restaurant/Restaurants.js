import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ShowSpinner } from '../ShowSpinner'
import { Request } from '../../utils/requests'
import { groupDataByLabel } from '../../utils/handleData'
import { RestaurantOption } from './RestaurantOption'
import { addRestaurants } from '../../store/actions/dataActions'
import { addError } from '../../store/actions/errorsActions'
import pT from 'prop-types'

export function Restaurants({ navigation }) {
    const [showSpinner, setSpinner] = useState(true)
    const restaurants = useSelector(store=>store.data)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const req = new Request()
        req.get_data()
            .then(data => {
                dispatch(addRestaurants(groupDataByLabel(data)))
                setSpinner(false)
            })
            .catch(err => dispatch(addError('Error on loading data')))
    },[])

    function renderRestaurantOptions() {
        return Object.entries(restaurants).map((el, i) => <RestaurantOption key={i} data={el} navigation={navigation} />)
    }

    return (
        <View onResponderMove={(e)=>console.log(2)} style={style.containerView}>
            <ShowSpinner showSpinner={showSpinner}/>
            <ScrollView contentContainerStyle={style.containerView}>
                {renderRestaurantOptions()}
            </ScrollView>
        </View>

    )
}


const style = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    spinner:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerView: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10
    },
})

Restaurants.propTypes = {
    navigation: pT.object.isRequired
}