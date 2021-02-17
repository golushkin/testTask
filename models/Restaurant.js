export class Restaurant{
    constructor(props){
        this._restName = props.restName
        this._index = props.index || null
        this._applications = props.applications || []
        this._restKey = props.restKey
    }

    get restName(){
        return this._restName
    }

    get appLength(){
        return this._applications.length
    }

    getApplications(){
        return this._applications
    }

    setAppVisited(index, value){
        this._applications[index].visited = value
    }

    clone(){
        return new Restaurant({
            restName: this._restName,
            index: this._index,
            applications: this._applications,
            restKey: this._restKey
        })
    }
}