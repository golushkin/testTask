export class Question{
    constructor(props){
        this._title = props.title
        this._type = props.type
        this._ref = props.ref
        this._choices = props.choices
    }

    get title(){
        return this._title
    }
}