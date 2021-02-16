export function groupDataByLabel(data){
    const grouped_data = {}

    for(let el of data){
        const label = el.restaurant.label.replace(/\s+/g,'')
        if (!grouped_data[label]) {
            grouped_data[label] = []
        }
        grouped_data[label].push(el)
    }

    return grouped_data
}


export function fieldData(field, answers){
    for(let answer of answers){
        if (answer.field.ref === field) {
            return answer[answer.type]
        }
    }
    return null
}