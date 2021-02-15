import React from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native'


export function ShowSpinner({ showSpinner }) {
    if (!showSpinner) return null
    return (
        <View style={style.spinner}>
            {showSpinner && <ActivityIndicator size='large' />}
        </View>
    )
}


const style = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})