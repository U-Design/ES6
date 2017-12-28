

function allSubsets(givenArray) {
    let subset = [];
    helper(givenArray, subset, 0);
}

function helper(givenArray, subset, i) {

    if(i === givenArray.length){
        console.log(subset.join(','));
    }else {
        subset[i] = '';
        helper(givenArray, subset, i+1);
        subset[i] = givenArray[i];
        helper(givenArray, subset, i+1);
    }
}

allSubsets([1,2]);