import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { QuestionAnswer } from './QuestionAnswer'

export function ApplicationDetails({ route, navigation }) {
    const application = route.params
    const appFields = application.definition.fields
    const firstName = application.answers[0].text
    const lastName = application.answers[0].text

    function renderQuestionsWithAnswers() {
        return appFields.map((el, i) => <QuestionAnswer key={el.id} question={el} answer={application.answers[i]} />)
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <Text>Application from {`${firstName} ${lastName}`}</Text>
                <Text>Answers to questions</Text>
                {renderQuestionsWithAnswers()}
                <Text>Submitted at</Text>
            </ScrollView>



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