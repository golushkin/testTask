export class Application{
    constructor({submittedAt, id}){
        this._submittedAt = submittedAt
        this._fields = []
        this._visited = false,
        this._id = id
    }

    get visited(){
        return this._visited
    }

    set visited(value){
        this._visited = value
    }

    get id(){
        return this._id
    }

    get fields(){
        return this._fields
    }

    getDate(){
        return new Date(this._submittedAt).toDateString()
    }



    getFullName(){
        const firstName = this._fields[0].answer.answer
        const lastName = this._fields[1].answer.answer
        return `${firstName} ${lastName}`
    }
}