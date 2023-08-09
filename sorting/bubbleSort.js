function bubbleSort(array){
    for(i = array.length-1; i > 0; i--){
        for(let j=0; j < i ; j++){
            if(array[j] > array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

/*function bubbleSort(array){
    let swapped;
    do{
        swapped = false
        for(let i=0; i < array.length-1; i++){
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            swapped =  true
        }
    }while(swapped)
    return array
}*/

console.log(bubbleSort([-1,-5,3,2,4]))