import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { visitedApplication } from '../../store/actions/dataActions'
import pT from 'prop-types'

export function Application({ app, navigation, restKey, index }) {
    const dispatch = useDispatch()
    const fullName = app.getFullName()
    
    function navigateToAppDetails() {
        if (!app.visited) dispatch(visitedApplication(restKey, index))
        navigation.navigate('AppDetails', {restKey, index, fullName})
    }

    const haveYouSeenApp = app.visited ? "have" : "haven't"

    return (
        <View style={style.option}>
            <Text onPress={navigateToAppDetails}>Application from {fullName}</Text>
            <Text>Submitted at {app.getDate()}</Text>
            <Text>{`You ${haveYouSeenApp} seen this application`}</Text>
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


Application.propTypes = {
    app: pT.object.isRequired,
    navigation: pT.object.isRequired,
    restKey: pT.string.isRequired,
    index: pT.number.isRequired,
}