let inputArray = [1, -3, 2, 1, -1];

function kadanesAlgoMax(input) {
    input = input || [];

    let max_curr = input[0], max_global = input[0];
    for(let i = 1; i < input.length -1; i++ ){
        max_curr = Math.max(input[i], input[i] + max_curr);

        if(max_curr > max_global){
            max_global = max_curr;
        }
    }
    console.log(max_global);
}

kadanesAlgoMax(inputArray);