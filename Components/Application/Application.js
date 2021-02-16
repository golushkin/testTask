import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { visitedApplication } from '../../store/actions/dataActions'
import pT from 'prop-types'

export function Application({ data, navigation, restKey, checked, index }) {
    const dispatch = useDispatch()
    const submittedAt = new Date(data.form_response.submitted_at).toDateString()
    const firstName = data.form_response.answers[0].text
    const lastName = data.form_response.answers[1].text

    function navigateToAppDetails() {
        if (!checked) dispatch(visitedApplication(restKey, index))
        navigation.navigate('AppDetails', {restKey, index, fullName: `${firstName} ${lastName}`})
    }

    const haveYouSeenApp = checked ? "have" : "haven't"

    return (
        <View style={style.option}>
            <Text onPress={navigateToAppDetails}>Application from {`${firstName} ${lastName}`}</Text>
            <Text>Submitted at {submittedAt}</Text>
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
    data: pT.object.isRequired,
    navigation: pT.object.isRequired,
    restKey: pT.string.isRequired,
    checked: pT.bool,
    index: pT.number.isRequired,
}