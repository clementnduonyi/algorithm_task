function checkType(data){
    const return_data = Object.prototype.toString.call(data);
    const type = return_data.substring(
        return_data.indexOf(" ") + 1,
        return_data.indexOf("]"));
    return type.toLowerCase()
}

function convertFahrToCelcius(fahr){
    const c = (5/9 * (fahr-32));
    
    let errorMessage = `${JSON.stringify(fahr)} is not a valid number but an/a ${checkType(fahr)}`;
    if(isNaN(fahr)){
        console.log(errorMessage)
        return errorMessage;
    }
    else{
        return c.toFixed(4);
    }  
}

const checkYuGiOh = (n) => {
    const arr = [];
    
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            arr.push("yu-gi-oh")
        }else if(i % 2 === 0 && i % 3 === 0){
            arr.push("yu-gi")
        }else if(i % 2 === 0 && i % 5 === 0){
            arr.push("yu-oh")
        }else if(i % 3 === 0 && i % 5 === 0){
            arr.push("gi-oh")
        }else if(i % 5 == 0){
            arr.push("oh")
        }else if(i % 3 == 0){
            arr.push("gi")
        }else if(i % 2 == 0){
            arr.push("yu")
        }
        else{
            arr.push(i)
        }
        
    }

    if(isNaN(n)){
        return `invalid parameter: ${n}`
    }else{
        return arr
    }
}
