import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export function RestaurantOption({data, navigation}) {
    const restName = data[1][0].restaurant.label
    const applications = data[1]

    function navigateToDetails(){
        navigation.navigate('Details', data)
    }

    return (
        <View style={style.option}>
            <Text onPress={navigateToDetails} >{restName}</Text>
            <Text>Number of applications: {applications.length}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    option: {
        borderWidth: 1,
        marginBottom: 10,
        padding:20,
        borderRadius: 10,
    }
})