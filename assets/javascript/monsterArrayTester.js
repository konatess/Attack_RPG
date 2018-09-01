var moArray = [
    {hp: 164, att: 7, catt: 17, posOpp: [], posOppPerm: []},
    {hp: 155, att: 5, catt: 7, posOpp: [], posOppPerm: []},
    {hp: 148, att: 8, catt: 9, posOpp: [], posOppPerm: []},
    {hp: 122, att: 6, catt: 5, posOpp: [], posOppPerm: []},
    {hp: 179, att: 4, catt: 26, posOpp: [], posOppPerm: []},
    {hp: 137, att: 10, catt: 42, posOpp: [], posOppPerm: []},
    {hp: 113, att: 9, catt: 31, posOpp: [], posOppPerm: []},
    {hp: 101, att: 11, catt: 51, posOpp: [], posOppPerm: []}];

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
}

for (var k=0; k < moArray.length; k++) {
 for ( var j=0; j < moArray.length; j++) {
  j !== k ? (moArray[k]['posOpp']).push(j) : null
 }
}

for (var l=0; l<moArray.length; l++) {
  moArray[l]['posOppPerm'] = permutator(moArray[l]['posOpp']);
}

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
    // for loop to iterate through posOppPerm array for that attacker
      // attackTimes iterator = 0
      // for loop to iterate through each posOppPerm sub-array
        


