var moArray = [
    {hp: 164, att: 7, catt: 17, posOpp: [], winlose: false},
    {hp: 155, att: 5, catt: 7, posOpp: [], winlose: false},
    {hp: 148, att: 8, catt: 9, posOpp: [], winlose: false},
    {hp: 122, att: 6, catt: 5, posOpp: [], winlose: false},
    {hp: 179, att: 4, catt: 26, posOpp: [], winlose: false},
    {hp: 137, att: 10, catt: 42, posOpp: [], winlose: false},
    {hp: 113, att: 9, catt: 31, posOpp: [], winlose: false},
    {hp: 101, att: 11, catt: 51, posOpp: [], winlose: false}];


    
for (var k=0; k < moArray.length; k++) {
    for ( var j=0; j < moArray.length; j++) {
        j !== k ? (moArray[k]['posOpp']).push(j) : null
    }
};

 
// function to determine number of attacks for winner to beat defender
function numberAtt(i, attack, defendersHP) {
// takes iterator, attacker's attack from moArray, defenders hit points from moArray
    while ( (attack * ((i * (i+1))/2)) < defendersHP) {
        abc = i;
        i++;
    }
};

// win or not function
function winOrNot(dca, attackerHP) {
    // dca is defenders counter attack
    if ((abc - 1) * dca > attackerHP) {
      // attacker is defeated
      loseable =  true;
      // track losses for this round
      didntWork.push(dItt);
    }
    else if (worked.length === 6) {
        // attacker has won all
        winable = true;
    }
    else {
        // this happens when the attacker wins 
        didntWork.length = 0;
        
    };
  };

// variables for all to access
var winable = false;
var loseable = false;
var abc = 0;
var worked = [];
var didntWork = [];

// function to iterate through attackers and defenders
function catchAll() {
    for (a = 0; a < moArray.length;){
        if (winable === true && loseable === true) {
            moArray[a]['winlose'] = true
            a++
        }
        var attHP = moArray[a]['hp'];
        var attA = moArray[a]['att'];
        // create iterator for attacks. Must start at 1
        var att = 1
        for (b = 0; b < moArray[a]['posOpp'].length; b++) {
            // create new iterator for defender from posOpp
            dItt = moArray[a]['posOpp'][b]
            // console.log(dItt)
            // save defender's stats for easy use
            defHP = moArray[dItt]['hp']
            defCA = moArray[dItt]['catt']
            while (winable === false || loseable === false) {
                numberAtt(att, attA, defHP);
                winOrNot(defCA, attHP);
                att = abc;
                console.log(att);
            }
        }
    }
}

catchAll();