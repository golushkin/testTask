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