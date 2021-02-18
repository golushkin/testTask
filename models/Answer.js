export class Answer{
    constructor({answer,type,ref,choice,choices}){
        this._answer = answer
        this._type = type
        this._ref = ref
        this._choice = choice
        this._choices = choices
    }

    get type(){
        return this._type
    }

    get answer(){
        return this._answer
    }

    get choices(){
        return this._choices
    }

    get choice(){
        return this._choice
    }
}