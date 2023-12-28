let a=[6,5,4,3,7,3,5,9,1]
let dict={};
let leastidx=99;
a.forEach((x,i)=>{
    if (x in dict){
        let count = dict[x][0]
        let idx = dict[x][1]
        if(count+1>=2){
            if(idx<leastidx){
                leastidx=idx
            }
        }
        dict[x]=[++count,idx]
    }
    else{
        dict[x]=[1,i]
    }
})
console.log(dict)
console.log(leastidx)
console.log(a[leastidx]);