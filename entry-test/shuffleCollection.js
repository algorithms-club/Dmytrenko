'use.strict';

function shuffleCollection(collection) {

    if (collection.length === 0) {
        return collection;
    }

    for (let i = collection.length; i; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let tmpValue = collection[i - 1];
        collection[i - 1] = collection[randomIndex];
        collection[randomIndex] = tmpValue;
    }
    return collection;
}

module.exports = shuffleCollection;