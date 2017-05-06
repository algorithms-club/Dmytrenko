'use.strict';

function isSorted(collection, comparison){

    if (collection.length === 0) {
        return collection;
    }

    for(let i = 0;i < collection.length-1;i++){
        if(comparison(collection[i+1], collection[i])){
            return false;
        }
    }
    return true;
}

module.exports = isSorted;