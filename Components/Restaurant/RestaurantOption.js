import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export function RestaurantOption({data, navigation}) {
    return (
        <View style={style.option}>
            <Text onPress={()=> navigation.navigate('Details', data[1])} >{data[0]}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    option: {
        borderWidth: 1,
        marginBottom: 10,
        paddingTop:20,
        paddingBottom:20,
        borderRadius: 10,
    }
})