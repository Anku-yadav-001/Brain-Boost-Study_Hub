function Customarray()
{
    this.size=arguments.length;
    for (let i = 0; i < arguments.length; i++) {
        this[i]=arguments[i];
    }
}


Customarray.prototype.push=function (el){
     this[this.size++]=el
}
Customarray.prototype.pop=function(){
    if(this.size>0)
    {
        let skipelement=this[--this.size];
        return skipelement
    }
    else{
        return undefined
    }
}
Customarray.prototype.top=function(){
    return this[this.size-1]
}
Customarray.prototype.print=function()
{
    let elemnt=[]
    for (let i = 0; i < this.size; i++) {
        elemnt.push(this[i])        
    }
    console.log(`[${elemnt.join(',')}]`);
}
Customarray.prototype.printReverse=function(){
  let element=[]

    for (let i=this.size-1;i>=0;i--) {
       element.push(this[i])
    }
    console.log(`[${element.join(',')}]`);
}
Customarray.prototype.sizefun=function()
{
   return this.size
}

let ans=new Customarray(1,2,3,4,5,6)
ans.push(7)
ans.pop()
console.log(ans.top());
ans.printReverse()
console.log(ans.sizefun());
ans.print()