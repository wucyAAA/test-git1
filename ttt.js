var obj = {
    name:'wc',
    age:22,
    hobby:{
        lol:'master',
        // ball:{basketball:'black iron'}
        ball:[{basketball:'black iron'},{football:'gold'}]
       
    }
}
function deepClong(obj){
    let tem = {}
    for( key in obj){
        if(typeof obj[key] == 'number' || typeof obj[key] == 'string'){
            tem[key] = obj[key]
            console.log(obj[key],key);
            // return tem[key]
        }else if(obj[key] instanceof Object){
           tem[key]= deepClong(obj[key])
        }else{
            tem[key].push(deepClong(obj[key]))
        }
    }
    return tem
}
var a = deepClong(obj)
console.log(a);