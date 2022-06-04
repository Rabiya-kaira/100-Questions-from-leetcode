var numJewelsInStones = function(jewels, stones) {
    var count=0;
    for(let i=0;i<stones.lenght;i++){
        for(let j=0;j<jewels.length;j++){
            if(stones[i]==jewels[j]){
                count++;
            }
            }
        }
            
    return count;
};
var x=numJewelsInStones('aA','aAAbbbb');
console.log(x);