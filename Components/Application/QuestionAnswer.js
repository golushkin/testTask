import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export function QuestionAnswer({question, answer}) {
    let answerText = ''

    if (answer.type === 'choices') {
        answerText = answer.choices.labels.join(',')
    }
    else if(answer.type === 'choice'){
        answerText = answer.choice.label
    }
    else{
        answerText = answer[answer.type]
    }

    return (
        <View style={style.container}>
            <Text>{question.title}</Text>
            <Text>-{answerText}</Text>
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