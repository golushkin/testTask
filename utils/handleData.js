import { Application } from '../models/Application'
import { Question } from '../models/Question'
import { Answer } from '../models/Answer'
import { Restaurant } from '../models/Restaurant'

export function getHandledData(data) {
    const handledData = {}

    for (let el of data) {
        const restName = el.restaurant.label
        const restKey = restName.replace(/\s+/g, '')

        if (!handledData[restKey]) {
            handledData[restKey] = new Restaurant({ restKey, restName })
        }

        handledData[restKey]._applications.push(getApplication(el.form_response, el.id))
    }

    return handledData
}


function getApplication(formResponse, id) {
    const application = new Application({
        submittedAt: formResponse.submitted_at,
        id
    })

    const fields = formResponse.definition.fields

    fields.forEach((field, i) => {
        application._fields.push(getField(formResponse, field, i))
    })

    return application
}

function getField(formResponse, field, index) {
    const answers = formResponse.answers
    const question = {
        title: isQuestionHasRef(field, answers) || field.title,
        type: field.type,
        ref: field.ref,
    }
    const answer = {
        type: answers[index].type,
        ref: answers[index].field.ref,
    }

    if (field.type === 'multiple_choice' && field.allow_other_choice) {
        question.choices = field.choices
        answer.choices = answers[index].choices
    }
    else if (field.type === 'multiple_choice') {
        question.choices = field.choices
        answer.choice = answers[index].choice.label
    } else {
        answer.answer = answers[index][answers[index].type]
    }

    const questionObj = new Question(question)
    const answerObj = new Answer(answer)

    return {
        question: questionObj,
        answer: answerObj
    }
}

function isQuestionHasRef(field, answers) {
    const reg = /{{\w+?:(\w+?)}}/
    if (reg.test(field.title)) {
        const [fullMatch, ref] = field.title.match(reg)
        return field.title.replace(/{{.*?}}/, fieldData(ref, answers))
    }

    return false
}

function fieldData(field, answers) {
    for (let answer of answers) {
        if (answer.field.ref === field) {
            return answer[answer.type]
        }
    }
    return null
}