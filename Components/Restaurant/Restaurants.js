import React, { useState, useEffect } from 'react'
import { Text, ScrollView, StyleSheet, View } from 'react-native'
import { Request } from '../../utils/requests'
import { groupDataByLabel } from '../../utils/handleData'
import { RestaurantOption } from './RestaurantOption'

export function Restaurants({navigation}) {
    const [show_spinner, setSpinner] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        const req = new Request()
        req.get_data()
            .then(data => setData(groupDataByLabel(data)))
            .catch(err => console.log(err))
    })

    function renderRestaurantOptions() {
        return Object.entries(data).map((el,i) => <RestaurantOption key={i} data={el} navigation={navigation} />)
    }

    return (
        <View style={style.containerView}>
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
    containerView: {
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop:10,
    },
})