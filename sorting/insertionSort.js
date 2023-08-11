function insertionSort(array){
    let temp;
    for(let i =1; i < array.length; i++){
        temp = array[i]
        // we are using var to use j outside of this for loop
        // j value should be greater than -1 
        for(var j=i-1; array[j] > temp && j > -1; j--){
            array[j+1] = array[j]
        }
        array[j+1] = temp
    }
    return array
}

console.log(insertionSort([1,4]))