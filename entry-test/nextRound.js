'use.strict';

function nextRound(allParticipants, lowestPlaceForNextRound, arr){

    if (!arr.length) {
        return arr
    };

    let i;
    let countOfParticipantsToNextRound = 0;

    for(i = 0; i < allParticipants; i++){
        if((arr[i] >= arr[lowestPlaceForNextRound-1] && arr[i] != 0)){
            countOfParticipantsToNextRound++;
        }
    }
    return countOfParticipantsToNextRound;
};

module.exports = nextRound;