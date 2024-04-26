function getData(data) {
    return new Promise(function(resolve,reject){
        if(typeof data!='number')
        {
            reject('error')
        }
        else{
            setTimeout(() => {
                if(data%2===0){
                    resolve('even')
                }
            }, 4000);
            setTimeout(() => {
                if(data%2===1)
                {
                    resolve('odd')
                }
            }, 2000);
        }
    })
}



export default getData
