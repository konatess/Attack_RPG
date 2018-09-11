var moArray = [
    {winlose: false, winnable: false, path: "", hp: 164, att: 5, catt: 17},
    {winlose: false, winnable: false, path: "", hp: 155, att: 6, catt: 7},
    {winlose: false, winnable: false, path: "", hp: 148, att: 6, catt: 9},
    {winlose: false, winnable: false, path: "", hp: 122, att: 9, catt: 5},
    {winlose: false, winnable: false, path: "", hp: 179, att: 5, catt: 20},
    {winlose: false, winnable: false, path: "", hp: 137, att: 6, catt: 42},
    {winlose: false, winnable: false, path: "", hp: 113, att: 8, catt: 13},
    {winlose: false, winnable: false, path: "", hp: 101, att: 8, catt: 51}];


// variables for the loops
var baseAtt = 0;
var attA = 0;
var attHP = 0;
var defHP = 0;
var defCA = 0;

// pull out functions here if possible


// logic path:
    // choose attacker
    // choose first defender
    // if win battle, add to pathway, get new defender starting from 0
    // in lose battle, go back one battle and choose previous defender +1
    // if no unique defenders:
        // if win all, go back to first defender, and choose defender +1, empty all stats
        // if not win, go back 2 and try again



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
    // track if can win and if can lose
    var loseable = false;
    var winnable = false;
    // set all variables for the attacker
        baseAtt = moArray[a]['att'];
        attA = moArray[a]['att'];
        attHP = moArray[a]['hp'];
        
    // iterate through current level at each level
    for (var b = 0; b < moArray.length && (winnable == false || loseable == false);b++) {
        // if b == a, skip b
        if (b !== a) {
            // if b (defender) is unique choice for current test
            if (pathway.includes(b) == false && currentLevel.includes(b) == false) {
                console.log("After checking pathway and current, Defender is now equal to " +b)
                defHP = moArray[b]['hp'];
                console.log("Defender " +b+ "'s HP are now " +defHP)
                defCA = moArray[b]['catt'];
                console.log("Before the battle, attacker's attack points are: " +attA)
                console.log("And attacker " +a+ "'s HP are: " +attHP)
                // play
                // while both attacker and defender have HP
                // var preBattleA = attA
                // var preBattleHP = attHP
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
                    if (pathway.length > 0) {
                        attA = prevAttA[prevAttA.length - 1];
                        attHP = prevAttHP[prevAttHP.length - 1];
                        console.log("After copying, attacker " +a+ "'s attack: " +attA+ " and HP: " +attHP)
                    }
                    else {
                        attA = moArray[a]['att'];
                        attHP = moArray[a]['hp'];
                    }
                };
            };
            // if run out of unique defenders
            while (currentLevel.length + pathway.length === moArray.length -1) {
                // if all defenders have been beaten
                console.log("We know there are no more unique defenders, because currentLevel includes " +currentLevel+ " and pathway includes " +pathway)
                // first check if won, and if so go back to beginning
                // if not won, go back 1 step
                // then check if b == 7, and maybe go back 1 more
                if (pathway.length === moArray.length - 1) {
                    console.log("Pathway's length is " +pathway.length)
                    winnable = true;
                    moArray[a]['path'] = pathway.toString();
                    console.log("Changed winnable for attacker " +a+ " on pathway " +pathway+ " to " + winnable)
                    moArray[a]['winnable'] = winnable
                    console.log("Changed winnable in moArray at " + a + " to " + moArray[a]['winnable'])
                    // since this path has been won, we're going back to the first defender and keep iterating
                    b = pathway.shift();
                    console.log("Changed what happens after a win, so b went to first in pathway instead of last")
                    console.log("b is now " +b+ " and pathway is now " +pathway)
                    pathway.length = 0;
                    console.log("And now pathway should be empty: " + pathway)
                    // attack and hit points also
                    attA = moArray[a]['att'];
                    attHP = moArray[a]['hp'];
                    prevAttA.length = 0;
                    prevAttHP.length = 0;
                    console.log("After reset, attacker " +a+ "'s attack is " +attA+ " and HP are " +attHP)
                    // reset current level empty
                    currentLevel.length = 0;
                } 
                // if all defenders have been tested but not all have been beaten, 
                // go back one level and test again from there
                else if (pathway.length > 0) {
                    console.log("Now all defenders should be tested, but not beaten so currentLevel " +currentLevel+ " and pathway " +pathway+ " should total 7 defenders");
                    // go back
                    b = pathway.pop();
                    console.log("So now after popping, b reverts to " +b)
                    prevAttA.pop();
                    prevAttHP.pop();
                    attA = (prevAttA[prevAttA.length -1] || moArray[a]['att']);
                    attHP = (prevAttHP[prevAttHP.length -1] || moArray[a]['hp']);
                    console.log("After popping, previous stats are: attack: " +prevAttA+ " HP: " +prevAttHP);
                    currentLevel.length = 0;
                    console.log("CurrentLevel should be empty: " +currentLevel)
                    for (var i = 0; i < b; i++) {
                        if (i !== a && pathway.includes(i) === false) {
                            currentLevel.push(i)
                        }
                    }
                    console.log("Reverted to previous currentLevel: " +currentLevel);
                    currentLevel.push(b);
                    console.log("Pushed " +b+ " to currentLevel, which now includes " +currentLevel);
                    console.log("Before popping, attacker " +a+ "'s previous stats are: attack: " +prevAttA+ " HP: " +prevAttHP);
                    console.log("Pathway is " +pathway);
                    if (pathway.length > 0 && (b === moArray.length - 1 || (a === moArray.length -1 && b === moArray.length -2))) {
                        console.log("Because b is now " +b+ " going back farther")
                        b = pathway.pop();
                        console.log("So now after popping again, b reverts to " +b)
                        currentLevel.length = 0;
                        console.log("CurrentLevel should be empty: " +currentLevel)
                        for (var i = 0; i < b; i++) {
                            if (i !== a && pathway.includes(i) === false) {
                                currentLevel.push(i)
                            }
                        }
                        console.log("Reverted to previous currentLevel: " +currentLevel);
                        currentLevel.push(b);
                        console.log("Pushed " +b+ " to currentLevel, which now includes " +currentLevel);
                        prevAttA.pop();
                        prevAttHP.pop();
                        attA = (prevAttA[prevAttA.length -1] || moArray[a]['att']);
                        attHP = (prevAttHP[prevAttHP.length -1] || moArray[a]['hp']);
                        console.log("And attacker " +a+ "'s attack is " +attA+ " and HP are " +attHP);
                    }
                }
                else {
                    currentLevel.length = 0;
                }   
            }
        };
    };
    if (winnable == true && loseable == true) {
        moArray[a]['winlose'] = true;
    };
};
console.log(moArray)