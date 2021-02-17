import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import pT from 'prop-types'

export function QuestionAnswer({ question, answer, questionParam }) {
    let answerText = ''
    
    if (answer.type === 'choices') {
        answerText = answer.choices.labels.join(',')
    }
    else if (answer.type === 'choice') {
        answerText = answer.choice
    }
    else {
        answerText = answer.answer
    }

    return (
        <View style={style.container}>
            <Text>Question: {question.title}</Text>
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