import React from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native'
import pT from 'prop-types'

export function ShowSpinner({ showSpinner }) {
    if (!showSpinner) return null
    return (
        <View style={style.spinner}>
            {showSpinner && <ActivityIndicator color="#0000ff" size='large' />}
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

ShowSpinner.propTypes = {
    showSpinner: pT.bool.isRequired
}