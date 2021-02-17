import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { QuestionAnswer } from './QuestionAnswer'
import pT from 'prop-types'

export function ApplicationDetails({ route, navigation }) {
    const { restKey, index, fullName } = route.params
    const application = useSelector(store => store.data[restKey].getApplications()[index])

    function renderQuestionsWithAnswers() {
        return application.fields.map((field, i) => <QuestionAnswer key={i} 
                                                                    question={field.question} 
                                                                    answer={field.answer} />)
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <Text>Application from {fullName}</Text>
                <Text>Answers to questions</Text>
                {renderQuestionsWithAnswers()}
                <Text>Submitted at {application.getDate()}</Text>
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
    navigation: pT.object,
}