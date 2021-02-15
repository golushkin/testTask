import React, { useContext } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { StoreContext } from '../../StoreContext'

export function Application({ data, navigation, restKey, checked, id }) {
    const context = useContext(StoreContext)
    const submittedAt = new Date(data.submitted_at).toDateString()
    const firstName = data.answers[0].text
    const lastName = data.answers[1].text

    function navigateToAppDetails() {
        if (!checked) {
            const arr = context.store.applications[restKey] ? [...context.store.applications[restKey], id] : [id]
            const store = { ...context.store }
            store.applications[restKey] = arr

            context.setStore({...store})
        }

        navigation.navigate('AppDetails', data)
    }

    const haveYouSeenApp = checked?"You have seen this application": "You haven't seen this applicaiton"

    return (
        <View style={style.option}>
            <Text onPress={navigateToAppDetails}>Application from {`${firstName} ${lastName}`}</Text>
            <Text>Submitted at {submittedAt}</Text>
            <Text>{haveYouSeenApp}</Text>
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