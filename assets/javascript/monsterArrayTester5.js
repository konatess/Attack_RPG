var moArray = [
    {winlose: false, winable: false, hp: 164, att: 7, catt: 14},
    {winlose: false, winable: false, hp: 155, att: 5, catt: 7},
    {winlose: false, winable: false, hp: 148, att: 8, catt: 9},
    {winlose: false, winable: false, hp: 122, att: 6, catt: 5},
    {winlose: false, winable: false, hp: 179, att: 4, catt: 26},
    {winlose: false, winable: false, hp: 137, att: 10, catt: 42},
    {winlose: false, winable: false, hp: 113, att: 9, catt: 31},
    {winlose: false, winable: false, hp: 101, att: 11, catt: 51}];


// variables for the loops
var baseAtt = 0;
var attA = 0;
var attHP = 0;
var defHP = 0;
var defCA = 0;



// iterate through attackers
for (var a = 0; a < moArray.length; a++) {
    // attacker hp from the previous level
    var prevAttHP = []
    // attacker's attack points from the previous level
    var prevAttA = []
    // track defeated opponent pathway
    var pathway = [];
    // track opponents lost to at this level
    var currentLevel = [];
    var prevCurrent = [];
    // track if can win and if can lose
    var loseable = false;
    var winable = false;
    // set all variables for the attacker
        baseAtt = moArray[a]['att'];
        attA = moArray[a]['att'];
        prevAttA.push(attA);
        attHP = moArray[a]['hp'];
        prevAttHP.push(attHP);
    // iterate through current level at each level
    for (var b = 0; b < moArray.length && (winable == false || loseable == false);b++) {
        // if b == a, skip to next b
        if (b !== a) {
            // if b (defender) is unique choice for current test
            if (pathway.includes(b) == false && currentLevel.includes(b) == false) {
                defHP = moArray[b]['hp'];
                defCA = moArray[b]['catt'];
                // play
                // while both attacker and defender have HP
                while (attHP > 0 && defHP > 0) {
                    // attacker attacks defender
                    defHP = defHP - attA;
                    // attacker's attack points go up
                    attA = attA + baseAtt;
                    // if defender is still alive, it counter attacks
                    if (defHP > 0) {
                        attHP = attHP - defCA;
                    }  
                }; 
                // if defender is defeated 
                if (defHP <= 0) {
                    // push iterator to pathway
                    pathway.push(b);
                    // push the attack and attacker hit points at this level
                    prevAttA.push(attA);
                    prevAttHP.push(attHP);
                    // my fix for cleaning up the pushing of arrays to arrays
                    var q = currentLevel.toString();
                    prevCurrent.push(q);
                    currentLevel.length = 0;
                }
                // if attacker is defeated
                else if (attHP <= 0) {
                    loseable = true;
                    // push iterator to currentLevel
                    currentLevel.push(b)
                };
            };
            // if run out of unique defenders
            if (currentLevel.length + pathway.length === moArray.length -1) {
                // if all defenders have been beaten
                if (pathway.length === moArray.length - 1) {
                    winable = true;
                    moArray[a]['winable'] = winable
                    // go back two levels to test
                    pathway.pop();
                    b = pathway.pop();
                    // attack and hit points also
                    prevAttA.pop();
                    prevAttHP.pop();
                    attA = prevAttA.pop();
                    attHP = prevAttHP.pop();
                    // get the opponents from that level as well
                    currentLevel.length = 0;
                    // level holder to not confuse currentLevel
                    var r
                    r = prevCurrent.pop();
                    r = r.split(",");
                    // loop to get all the strings back to integers
                    for (var f = 0; f < currentLevel.length; f++) {
                        currentLevel[f] = parseInt(r[f])
                    }
                    currentLevel.push(b);
                } 
                // if all defenders have been tested but not all have been beaten, 
                // go back one level and test again from there
                else {
                    currentLevel.length = 0;
                    var r
                    r = prevCurrent.pop();
                    r = r.split(",");
                    // loop to get all the strings back to integers
                    for (var f = 0; f < currentLevel.length; f++) {
                        currentLevel[f] = parseInt(r[f])
                    }
                    b = pathway.pop();
                    currentLevel.push(b)
                    attA = prevAttA.pop();
                    attHP = prevAttHP.pop();
                }
                
            }
            if (b == moArray.length - 1 && currentLevel.includes(0) == false) {
                b = -1;
            }
        };
    };
    if (winable == true && loseable == true) {
        moArray[a]['winlose'] = true;
    };
};
console.log(moArray)