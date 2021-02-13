import { data } from './data'

export class Request{
    get_data(){
        return new Promise((res, rej) =>{
            setTimeout(()=>{
                res(data)
            },1000)
        })
    }
}