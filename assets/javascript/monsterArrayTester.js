// each monster's hit points, attack, counter attack, possible opponents, 
// and permutations of possible opponents
var moArray = [
    {hp: 164, att: 7, catt: 17, posOpp: [], posOppPerm: []},
    {hp: 155, att: 5, catt: 7, posOpp: [], posOppPerm: []},
    {hp: 148, att: 8, catt: 9, posOpp: [], posOppPerm: []},
    {hp: 122, att: 6, catt: 5, posOpp: [], posOppPerm: []},
    {hp: 179, att: 4, catt: 26, posOpp: [], posOppPerm: []},
    {hp: 137, att: 10, catt: 42, posOpp: [], posOppPerm: []},
    {hp: 113, att: 9, catt: 31, posOpp: [], posOppPerm: []},
    {hp: 101, att: 11, catt: 51, posOpp: [], posOppPerm: []}];

// found permutation code at 
// https://stackoverflow.com/questions/9960908/permutations-in-javascript
// function permutator(inputArr) {
//   var results = [];

//   function permute(arr, memo) {
//     var cur, memo = memo || [];

//     for (var i = 0; i < arr.length; i++) {
//       cur = arr.splice(i, 1);
//       if (arr.length === 0) {
//         results.push(memo.concat(cur));
//       }
//       permute(arr.slice(), memo.concat(cur));
//       arr.splice(i, 0, cur[0]);
//     }

//     return results;
//   }

//   return permute(inputArr);
// }

for (var k=0; k < moArray.length; k++) {
 for ( var j=0; j < moArray.length; j++) {
  j !== k ? (moArray[k]['posOpp']).push(j) : null
 }
}

// for (var l=0; l<moArray.length; l++) {
//   moArray[l]['posOppPerm'] = permutator(moArray[l]['posOpp']);
// }

console.log(moArray)


// need to track
  // which attacker - for loop
  // which posOppPerm - for loop
  // which index of each posOppPerm array
  // winlose true or false for each attacker
    // win starts false for each
    // lose starts false for each
    // TODO: check for each perm for each attacker 
      // if win is true, then update win.
      // if lose is true, then update lose
      // if at the end both are true, winlose is true for that attacker
  // 

// aHP = A's hp from the array
// to determine attacks needed
  // i = 0
  // while ( (A's attack * ((i * (i+1))/2)) < D's hp from the array)
    // abc = (D's hp from the array) divided by (A's attack * ((i * (i+1))/2))
    // i++
// if ((abc - 1) * D's counter attack from array) > aHP, A is defeated
// else aHP = aHP - ((abc - 1) * D's counter attack from array)
  // and i needs to persist for the next D


// So overall structure should be something like
  // for loop to iterate through attackers
    // aHP = A's hp from the array 
    // for loop to iterate through posOppPerm array for that attacker (length 5040)
      // attackTimes iterator = 0
      // for loop to iterate through each posOppPerm sub-array (length 7)
        // var dog = moArray[A iterator]['posOppPerm'][posOppPerm loop iterator][local iterator]
        // D is moArray[dog]
        // while loop to dermine if A can beat the 
      // 
        


// while aHP > 0
  // for to iterate through sub-array
    // while to determine number of attacks needed




// new thought instead of full permutations
  // var for can win
  // var for can lose
  // loop through attacker iterators
    // loop through defender iterators (a.k.a. not attacker)
      // check if attacker wins or not
        // if attacker loses, can lose = true
        // if attacker wins, return attacker's new hp and new attack iterator start
      // if can lose = true, return
      // else
        // return attacker's new hp and new attack iterator start
        // defender iterator++
    // if attackers final hp > 0, can win = true
    // else can win = false
    // if can win && can lose moArray[attacker iterator]
    // attacker iterator++
  
   
// universal variables for these functions 
  // to hold number of attacks needed
  var abc = 0

// function to determine number of attacks for winner to beat defender
function numberAtt(i, attack, defendersHP) {
// takes iterator, attacker's attack from moArray, defenders hit points from moArray
  while ( (attack * ((i * (i+1))/2)) < defendersHP) {
      abc = i
      i++
  }
};

// function winOrNot(dca, attackerHP) {
//   // dca is defenders counter attack
//   if ((abc - 1) * dca > attackerHP) {
//     // attacker is defeated
//     loseable =  true;
//     // track 
//   }
//   else {
//     // TODO:
//   }
// }

// // function to choose which defender to test next
// function chooseD(aItt) {
//   // worked means won in this iteration, 
//   var worked = [];
//   // didntwork is for lost, and will be reset every time a win is found
//   var didntWork = [];
//   // possible opponent iterator, goes through posOpp array
//   var pOItt = 0;
//   moArray[aItt]['posOpp'][pOItt]


//   // empty worked and didn't work arrays
//   worked.length = 0;
//   didntWork.length = 0;
// }

//   for (var aItt = 0; aItt < moArray.length; aItt++) {
    
//     var pOItt = 0
//     // defender iterator, used to find the stats 
//     var dItt = moArray[aItt]['posOpp'][pOItt]

//   }

// trying this yet again
  // win or not function
  function winOrNot(dca, attackerHP) {
    // dca is defenders counter attack
    if ((abc - 1) * dca > attackerHP) {
      // attacker is defeated
      loseable =  true;
      // track 
    }
    else {
      // TODO:
    }
  };
  // stacked loops
  for (a = 0; a < moArray.length; a++) {
    var attHP = moArray[a]['hp'];
    var attack = moArray[a]['att'];
    for (b = 0; b < moArray.length;) {
      if (b !== a) {
        var defHP = moArray[b]['hp'];
        var defCA = moArray[b]['catt'];
        numberAtt();
        winOrNot();
        for (c = 0) {
          if (c !== (a || b)) {
            for (d) {
              if (d !== (a || b || c)) {
                for (e) {
                  if (e !== (a || b || c || d)) {
                    for (f) {
                      if (f !== (a || b || c || d || e))
                    }
                  }
                }
              }
            }
          }
        }
      };
    };
  };
