import React, { useContext } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Application } from '../Application/Application'
import { StoreContext } from '../../StoreContext'

export function RestaurantOptionDetails({ route, navigation }) {
    const context = useContext(StoreContext)
    const restKey = route.params[0]
    const applications = route.params[1]
    const visitedApplications = context.store.applications[restKey]

    function renderApplications() {
        if (visitedApplications) {
            return applications.map(el => {
                const checked = visitedApplications.includes(el.id)
                return <Application key={el.id} id={el.id} restKey={restKey} data={el.form_response} checked={checked} navigation={navigation} />
            })
        }
        return applications.map(el => <Application key={el.id}
            id={el.id}
            restKey={restKey} 
            data={el.form_response}
            navigation={navigation} />)
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
        padding: 10,
        backgroundColor: '#fff'
    }
})