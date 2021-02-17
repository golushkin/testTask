import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import pT from 'prop-types'

export function RestaurantOption({ data, navigation }) {
    const [restKey, restaurant] = data
    function navigateToDetails() {
        navigation.navigate('Details', { restKey, restName: restaurant.restName})
    }

    return (
        <View style={style.option}>
            <Text onPress={navigateToDetails} >{restaurant.restName}</Text>
            <Text>Number of applications: {restaurant.appLength}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    option: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
    }
})

RestaurantOption.propTypes = {
    data: pT.array.isRequired,
    navigation: pT.object.isRequired
}