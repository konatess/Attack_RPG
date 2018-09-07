var moArray = [
    {winlose: false, winable: false, hp: 164, att: 7, catt: 17},
    {winlose: false, winable: false, hp: 155, att: 5, catt: 7},
    {winlose: false, winable: false, hp: 148, att: 8, catt: 9},
    {winlose: false, winable: false, hp: 122, att: 6, catt: 5},
    {winlose: false, winable: false, hp: 179, att: 4, catt: 20},
    {winlose: false, winable: false, hp: 137, att: 10, catt: 42},
    {winlose: false, winable: false, hp: 113, att: 9, catt: 13},
    {winlose: false, winable: false, hp: 101, att: 11, catt: 51}];


// variables for the loops
var baseAtt = 0;
var attA = 0;
var attHP = 0;
var defHP = 0;
var defCA = 0;



// iterate through attackers
for (var a = 0; a < moArray.length; a++) {
    console.log("Set attacker to " + a)
    // attacker hp from the previous level
    var prevAttHP = [];
    // att hp from the previous level
    var prevAttA = [];
    // track defeated opponent pathway
    var pathway = [];
    // track opponents lost to at this level
    var currentLevel = [];
    console.log("CurrentLevel should be empty after attacker iteration: " +currentLevel)
    var prevCurrent = [];
    console.log("PrevCurrent should be empty after attacker iteration: " +prevCurrent)
    // track if can win and if can lose
    var loseable = false;
    var winable = false;
    console.log("Set winnable to " +winable+ " and loseable to " +loseable);
    // set all variables for the attacker
        baseAtt = moArray[a]['att'];
        attA = moArray[a]['att'];
        prevAttA.push(attA);
        attHP = moArray[a]['hp'];
        prevAttHP.push(attHP);
    // iterate through current level at each level
    for (var b = 0; b < moArray.length && (winable == false || loseable == false);b++) {
        console.log("Chose defender " +b)
        console.log("Pathway includes " +pathway)
        console.log("CurrentLevel includes " +currentLevel)
        // if b == a, skip b
        if (b !== a) {
            console.log("Defender is now equal to " +b)
            // if b (defender) is unique choice for current test
            if (pathway.includes(b) == false && currentLevel.includes(b) == false) {
                console.log("After checking pathway and current, Defender is now equal to " +b)
                defHP = moArray[b]['hp'];
                console.log("Defender's HP are now " +defHP)
                defCA = moArray[b]['catt'];
                // play
                // while both attacker and defender have HP
                console.log("Before the battle, attacker's attack points are: " +attA)
                console.log("And attacker's HP are: " +attHP)
                while (attHP > 0 && defHP > 0) {
                    // FIXME: for some reason, my test is showing that if the attacker is defeated, 
                        // the defender's HP are not being reduced.
                        // Not sure if this is part of my failed test or not, 
                        // since it seems to work fine when the attacker wins
                    // attacker attacks defender
                    defHP = defHP - attA;
                    console.log("Defender's HP should be reduced: " +defHP)
                    // attacker's attack points go up
                    attA = attA + baseAtt;
                    // if defender is still alive, it counter attacks
                    if (defHP > 0) {
                        attHP = attHP - defCA;
                    }  
                }; 
                console.log("After the battle, attacker " +a+ "'s HP are " + attHP+ " and defender " +b+ "'s HP are "+defHP)
                // if defender is defeated 
                if (defHP <= 0) {
                    console.log("Defender " +b+ " is defeated")
                    // push iterator to pathway
                    pathway.push(b);
                    console.log("Pushed " +b+ " to pathway, resulting in pathway " +pathway)
                    // set b to 0 (-1) to restart for new level
                    b = -1
                    console.log("Set b to " +b)
                    // push the attack and attacker hit points at this level
                    prevAttA.push(attA);
                    prevAttHP.push(attHP);
                    console.log("Previous attacker stats arrays look like this attack: " +prevAttA+ " HP: " +prevAttHP)
                    // my fix for cleaning up the pushing of arrays to arrays
                    var q = currentLevel.toString();
                    prevCurrent.push(q);
                    console.log("PrevCurrent now contains: " +prevCurrent)
                    currentLevel.length = 0;
                    console.log("CurrentLevel now includes " +currentLevel)
                }
                // if attacker is defeated
                else if (attHP <= 0) {
                    loseable = true;
                    console.log("Changed loseable for attacker " +a+ " facing defender " +b+ " to " +loseable)
                    // push iterator to currentLevel
                    currentLevel.push(b)
                    console.log("Pushed " +b+ " to currentLevel, which now includes " +currentLevel)
                    attA = prevAttA.pop();
                    attHP = prevAttHP.pop();
                    console.log("After popping, attacker's attack: " +attA+ " and attacker's HP: " +attHP)
                };
            };
            // if run out of unique defenders
            if (currentLevel.length + pathway.length === moArray.length -1) {
                // if all defenders have been beaten
                console.log("We know there are no more unique defenders, because currentLevel includes " +currentLevel+ " and pathway includes " +pathway)
                if (pathway.length === moArray.length - 1) {
                    console.log("Pathway's length is " +pathway.length)
                    winable = true;
                    console.log("Changed winable for attacker " + a + " on pathway " + pathway + " to " + winable)
                    moArray[a]['winable'] = winable
                    console.log("Changed winable in moArray at " + a + " to " + moArray[a]['winable'])
                    // go back two levels to test
                    pathway.pop();
                    b = pathway.pop();
                    // FIXME: if b == 7, this resets the attacker, which we don't necessarily want
                    // testing one way of doing this
                    console.log("Went back two levels, so b is now " +b+ " and pathway is now " +pathway)
                    if (b == moArray.length -1) {
                        console.log("b is " +b+ ", so we need to go back farther")
                        b = pathway.pop();
                        prevAttA.pop();
                        prevAttHP.pop();
                    }
                    console.log("b is now " +b+ " and pathway is now " +pathway)
                    // attack and hit points also
                    prevAttA.pop();
                    prevAttHP.pop();
                    attA = prevAttA.pop();
                    attHP = prevAttHP.pop();
                    console.log("After popping, attacker's attack: " +attA+ " and attacker's HP: " +attHP)
                    // get the opponents from that level as well
                    currentLevel.length = 0;
                    console.log("Changed currentLevel to empty: " +currentLevel)
                    // level holder to not confuse currentLevel
                    var r
                    r = prevCurrent.pop();
                    r = r.split(",");
                    // loop to get all the strings back to integers
                    for (var f = 0; f < currentLevel.length; f++) {
                        currentLevel[f] = parseInt(r[f])
                    }
                    console.log("Reverted to previous currentLevel: " +currentLevel)
                    currentLevel.push(b);
                    console.log("And added b " +b+ " to currentLevel like so " +currentLevel)
                } 
                // if all defenders have been tested but not all have been beaten, 
                // go back one level and test again from there
                else {
                    console.log("Now all defenders should be tested, but not beaten so currentLevel " +currentLevel+ " and pathway " +pathway+ " should total 7 defenders")
                    currentLevel.length = 0;
                    console.log("CurrentLevel should be empty: " +currentLevel)
                    var r
                    r = prevCurrent.pop();
                    r = r.split(",");
                    // loop to get all the strings back to integers
                    for (var f = 0; f < currentLevel.length; f++) {
                        currentLevel[f] = parseInt(r[f])
                    }
                    console.log("Reverted to previous currentLevel: " +currentLevel)
                    console.log("b was " +b)
                    console.log("And pathway was " +pathway)
                    b = pathway.pop();
                    console.log("So now after popping it reverts to " +b)
                    console.log("CurrentLevel should still be empty: " +currentLevel)
                    currentLevel.push(b);
                    console.log("Pushed b " +b+ " to currentLevel, like so: " +currentLevel)
                    attA = prevAttA.pop();
                    attHP = prevAttHP.pop();
                    console.log("After popping, attacker's attack: " +attA+ " and attacker's HP: " +attHP)
                }
                
            }
            // FIXME:
            // if pathway or currentLevel include moArray.length-1, repeat = true?
            // else repeat = false?
            // put above at top of b for loop?
            // if (b == moArray.length - 1 && (currentLevel.includes(0 || 1) == false && pathway.includes(0 || 1) == false)) {
            //     b = -1;
            // }
        };
    };
    if (winable == true && loseable == true) {
        console.log("When winable and loseable are both true")
        moArray[a]['winlose'] = true;
        console.log("We get " +moArray[a]['winlose'])
    };
};
console.log(moArray)