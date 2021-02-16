import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { QuestionAnswer } from './QuestionAnswer'
import { fieldData } from '../../utils/handleData'
import pT from 'prop-types'

const reg = /{{\w+?:(\w+?)}}/

export function ApplicationDetails({ route, navigation }) {
    const { restKey, index } = route.params
    const application = useSelector(store => store.data[restKey][index])
    const appFields = application.form_response.definition.fields
    const firstName = application.form_response.answers[0].text
    const lastName = application.form_response.answers[0].text

    function renderQuestionsWithAnswers() {
        return appFields.map((el, i) => {
            if (reg.test(el.title)) {
                const [full, field] = el.title.match(reg)
                const questionData = fieldData(field, application.form_response.answers)
                return <QuestionAnswer key={el.id} questionParam={questionData} question={el} answer={application.form_response.answers[i]} />
            }
            return <QuestionAnswer key={el.id} question={el} answer={application.form_response.answers[i]} />
        })
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <Text>Application from {`${firstName} ${lastName}`}</Text>
                <Text>Answers to questions</Text>
                {renderQuestionsWithAnswers()}
                <Text>Submitted at {new Date(application.form_response.submitted_at).toDateString()}</Text>
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

ApplicationDetails.propTypes = {
    route: pT.object.isRequired,
    navigation: pT.object.isRequired,
}