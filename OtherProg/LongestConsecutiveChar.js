function longChar(input) {
    input = input || '';

    let curChar, prevChar=null, maxChar = null, maxCount = 0, currCount = 0;

    for(let i = 0; i < input.length; i++){
        curChar = input[i];
        if(curChar !== prevChar){
            currCount = 1;
        }else {
            currCount++;
        }


        if(currCount > maxCount){
            maxChar = curChar;
            maxCount = currCount;
        }
        prevChar = curChar;
    }
    console.log(maxChar, maxCount);
}
longChar('AABCccccDDBBBEA');