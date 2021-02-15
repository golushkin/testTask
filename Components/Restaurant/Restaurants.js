import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ShowSpinner } from '../ShowSpinner'
import { Request } from '../../utils/requests'
import { groupDataByLabel } from '../../utils/handleData'
import { RestaurantOption } from './RestaurantOption'

export function Restaurants({ navigation }) {
    const [showSpinner, setSpinner] = useState(true)
    const [data, setData] = useState({})
    
    useEffect(() => {
        const req = new Request()
        req.get_data()
            .then(data => {
                setData(groupDataByLabel(data))
                setSpinner(false)
            })
            .catch(err => console.log(err))
    },[])

    function renderRestaurantOptions() {
        return Object.entries(data).map((el, i) => <RestaurantOption key={i} data={el} navigation={navigation} />)
    }

    return (
        <View style={style.containerView}>
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