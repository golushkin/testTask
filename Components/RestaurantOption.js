import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export function RestaurantOption(props) {
    const { data } = props
    return (
        <View style={style.option}>
            <Text >{data.restaurant.label}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    option: {
        borderWidth: 1,
        marginBottom: 10,
        flex: 1,
        borderRadius: 10,
    }
})