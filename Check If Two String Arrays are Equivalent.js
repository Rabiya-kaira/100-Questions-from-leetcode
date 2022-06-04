var arrayStringAreEqual=function(word1,word2){
    let sum1="";
    let sum2="";
    for(let i=0;i<=word1.length-1;i++){
        sum1=sum1+word1[i];
    }
    for(let j=0;j<=word2.lenght-1;j++){
        sum2=sum2+word2[j];
    }
    if(sum1===sum2){
        return true
    }else{
        return false
    }
};
 const word1=["ab","c"]
const word2=["ab","c"]
console.log(arrayStringAreEqual(word1,word2));