'use strict';

const algolib = require('../index.js');

describe('#nextRound', function(){

    it('should count amount of participants, who goes to next round', function(){
        let participantsToNextRoundAmount = algolib.nextRound(8, 5, [10, 9, 8, 7, 7, 7, 5, 5]);

        participantsToNextRoundAmount.should.be.eql(6);

    });

    it('should show empty result with empty amount of participants', function(){
        let emptyParticipants = algolib.nextRound(0, 0, []);

        emptyParticipants.should.be.eql([]);

    });

});



