import React, { useState, useEffect } from 'react'
import { Text, ScrollView, StyleSheet, View } from 'react-native'
import { Request } from '../utils/requests'
import { RestaurantOption } from './RestaurantOption'

export function Restaurants(props) {
    const [show_spinner, setSpinner] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const req = new Request()
        req.get_data()
            .then(data => setData(data))
            .catch(err => console.log(err))
    })

    function renderRestaurantOptions() {
        return data.map(el => <RestaurantOption key={el.id} data={el}/>)
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            {renderRestaurantOptions()}
        </ScrollView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop:10
    },
})