import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import pT from 'prop-types'

export function QuestionAnswer({ question, answer, questionParam }) {
    let answerText = ''
    const questionTitle = questionParam ? question.title.replace(/{{.*?}}/, questionParam) : question.title

    if (answer.type === 'choices') {
        answerText = answer.choices.labels.join(',')
    }
    else if (answer.type === 'choice') {
        answerText = answer.choice.label
    }
    else {
        answerText = answer[answer.type]
    }

    return (
        <View style={style.container}>
            <Text>Question: {questionTitle}</Text>
            <Text>Answer: {answerText}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        marginTop: 10,
        backgroundColor: '#fff'
    }
})

QuestionAnswer.propTypes = {
    answer: pT.object.isRequired,
    question: pT.object.isRequired,
    questionParam: pT.string,
}