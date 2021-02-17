import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { Application } from '../Application/Application'
import pT from 'prop-types'

export function RestaurantOptionDetails({ route, navigation }) {
    const { restKey } = route.params
    const restaurant = useSelector(store => store.data[restKey])

    function renderApplications() {
        return restaurant.getApplications().map((app,index) => <Application key={app.id} 
                                                            index={index} 
                                                            restKey={restKey} 
                                                            app={app} 
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


RestaurantOptionDetails.propTypes = {
    route: pT.object.isRequired,
    navigation: pT.object.isRequired,
}