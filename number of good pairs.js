var numIdenticalPairs = function(nums) {
    var obj = {}
    var count = 0
    for (var n of nums) {
        if (obj[n]) {
            count  += obj[n];
            obj[n] += 1;
        } else {
            obj[n] = 1;
        }
    }
    return count
    
};