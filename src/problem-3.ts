{

    // 

const countWordOccurrences=( sentence:string,word:string):number |undefined=>{

    const value=sentence.match(new RegExp(`\\b${word}\\b`, "gi"))?.length
  
    return value
}

countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")




    // 
}