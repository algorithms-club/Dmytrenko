'use.strict';

function selectionSort(collection, comparison){

    if(collection.length === 0){
        return collection;
    }

    for(let i = 0;i < collection.length;i++){
        let min = collection[i];
        let tmpIndex = i;
        for(let j = i;j < collection.length;j++){
            if(comparison(collection[j], min)){
                min = collection[j];
                tmpIndex = j;
            }
        }
        collection[tmpIndex] = collection[i];
        collection[i] = min;
    }
    return collection;
};

module.exports = selectionSort;