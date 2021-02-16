import React from 'react'
import { useSelector } from 'react-redux'
import { Text, StyleSheet, View } from 'react-native'
import { Application } from '../Application/Application'
import pT from 'prop-types'

export function RestaurantOptionDetails({ route, navigation }) {
    const { restKey } = route.params
    const applications = useSelector(store => store.data[restKey])

    function renderApplications() {
        return applications.map((el,index) => {
            const checked = el.visited === true
            return <Application key={el.id} index={index} restKey={restKey} data={el} checked={checked} navigation={navigation} />
        })
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


RestaurantOptionDetails.propTypes = {
    route: pT.object.isRequired,
    navigation: pT.object.isRequired,
}