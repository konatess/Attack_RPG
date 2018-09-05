var moArray = [
    {winlose: false, hp: 164, att: 7, catt: 14, posOpp: [], posOppPerm: []},
    {winlose: false, hp: 155, att: 5, catt: 7, posOpp: [], posOppPerm: []},
    {winlose: false, hp: 148, att: 8, catt: 9, posOpp: [], posOppPerm: []},
    {winlose: false, hp: 122, att: 6, catt: 5, posOpp: [], posOppPerm: []},
    {winlose: false, hp: 179, att: 4, catt: 26, posOpp: [], posOppPerm: []},
    {winlose: false, hp: 137, att: 10, catt: 42, posOpp: [], posOppPerm: []},
    {winlose: false, hp: 113, att: 9, catt: 31, posOpp: [], posOppPerm: []},
    {winlose: false, hp: 101, att: 11, catt: 51, posOpp: [], posOppPerm: []}];


// global variables
var abc = 1;
var winable = false;
var loseable = false;
// set number of attacks iterator to 1 (0 creates infinite loop)
var counterAttNum = 1;
var attHP = 0;
var attAtt = 0;
var defHP = 0;
var defCA = 0;


// found permutation code at 
// https://stackoverflow.com/questions/9960908/permutations-in-javascript
function permutator(inputArr) {
    var results = [];

    function permute(arr, memo) {
    var cur, memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
            results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

    return results;
    }

    return permute(inputArr);
};

for (var k=0; k < moArray.length; k++) {
    for ( var j=0; j < moArray.length; j++) {
        j !== k ? (moArray[k]['posOpp']).push(j) : null
    }
}
    
for (var l=0; l<moArray.length; l++) {
    moArray[l]['posOppPerm'] = permutator(moArray[l]['posOpp']);
}

function numberAtt(i, attack, defendersHP) {
    // takes iterator, attacker's attack from moArray, defenders hit points from moArray
    // if it's more than one attack
    if ( (attack * ((i * (i+1))/2)) < defendersHP) {
      while ( (attack * ((i * (i+1))/2)) < defendersHP) {
          i++
          abc++
          counterAttNum++
      }
    }
    else {
      abc++
      counterAttNum++
    }
};

function winOrNot(dca, attackerHP) {
    // dca is defenders counter attack
    if ((counterAttNum - 1) * dca > attackerHP) {
        // attacker is defeated
        loseable =  true;
        if (winable === true) {
            moArray[a]['winlose'] = true;
        }
        console.log("loseable = " + loseable)
    }
    else {
        attHP = attHP - ((counterAttNum-1) * dca)
    }
};

// iterate through attackers
for (var a = 0; a < moArray.length; a++) {
    winable = false;
    loseable = false;
    // iterate through possible defenders permutations
    for (var b = 0; b < moArray[a]['posOppPerm'].length; b++) {
        counterAttNum = 1;
        attHP = moArray[a]['hp'];
        attAtt = moArray[a]['att'];
        abc = 1;
        if (winable === false || loseable === false) {
            // iterate through each possible defender in the line
            for (var c = 0; c < moArray[a]['posOppPerm'][b].length; c++) {
                if (winable === true  && loseable === true) {
                    moArray[a]['winlose'] = true;
                }
                else if (attHP > 0) {
                    defHP = moArray[moArray[a]['posOppPerm'][b][c]]['hp'];
                    defCA = moArray[moArray[a]['posOppPerm'][b][c]]['catt'];
                    counterAttNum = 1;
                    numberAtt(counterAttNum, attAtt, defHP);
                    winOrNot(defCA, attHP);
                    if (c === moArray[a]['posOppPerm'][b].length - 1 && (counterAttNum - 1) * defCA <= attHP) {
                        winable = true;
                        console.log("winable = " + winable)
                    }
                }
            }
        }
        else {
            moArray[a]['winlose'] = true;
        }
    }
}
console.log(moArray)