export class Answer{
    constructor(props){
        this._answer = props.answer
        this._type = props.type
        this._ref = props.ref
        this._choice = props.choice
        this._choices = props.choices
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