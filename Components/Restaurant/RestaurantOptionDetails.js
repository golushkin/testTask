import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export function RestaurantOptionDetails({ route, navigation }) {
    const [visitedApp, setVisitedApp] = useState([])
    const applications = route.params
    const restName = route.params[0].restaurant.label

    function renderApplications() {
        return applications.map(el => <Text key={el.id}>{el.id}</Text>)
    }

    return (
        <View style={style.container}>
            {renderApplications()}
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})