
export function getDetailsOptions({ route, navigaiton }) {
    return {
        title: `Applications of ${route.params.restName}`
    }
}

export function getAppDetailsOptions({ route, navigaiton }) {
    return {
        title: `${route.params.fullName}'s application`
    }
}