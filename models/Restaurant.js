export class Restaurant{
    constructor({restName, applications = [], restKey}){
        this._restName = restName
        this._applications = applications
        this._restKey = restKey
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