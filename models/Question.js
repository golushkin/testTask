export class Question{
    constructor({title, type, ref, choices}){
        this._title = title
        this._type = type
        this._ref = ref
        this._choices = choices
    }

    get title(){
        return this._title
    }
}