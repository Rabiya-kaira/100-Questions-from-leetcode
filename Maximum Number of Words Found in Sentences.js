var mostWordsFound = function(sentences) {
    let count = []
    
    sentences.forEach((sentence) => {
        
        let eachWord = sentence.toString().split(" ")
        for(let i = 0; i < 1; i++){
            count.push(eachWord.length)
        }
    })
    
    let s = count.sort((a,b) => {return b - a})
    
    
    return s[0]
    
};