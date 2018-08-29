// variables
    // array of objects for monsters
        // each monster needs:
            // class info
            // name
            // image link
            // hit points
            // attack
            // counter attack
            var moArray = [
                {class: "mo1", name: "Oscar", imglink: "assets/images/010.png", hp: 162, att: 7, catt: 35},
                {class: "mo2", name: "Bartholomew", imglink: "assets/images/011.png", hp: 155, att: 5, catt: 17},
                {class: "mo3", name: "Moonster", imglink: "assets/images/015.png", hp: 148, att: 8, catt: 9},
                {class: "mo4", name: "Kzak", imglink: "assets/images/018.png", hp: 136, att: 6, catt: 5},
                {class: "mo5", name: "Fred", imglink: "assets/images/019.png", hp: 179, att: 4, catt: 26},
                {class: "mo6", name: "Gilly", imglink: "assets/images/020.png", hp: 127, att: 10, catt: 42},
                {class: "mo7", name: "Lucky", imglink: "assets/images/025.png", hp: 113, att: 9, catt: 31},
                {class: "mo8", name: "Odd", imglink: "assets/images/029.png", hp: 101, att: 11, catt: 51}
            ]
    // html chunks? not sure if this will work
    var cHtml1 = '<div class="float-left pr-3 monster '
    var cHtml2 = '"> <img class="float-left" src="'
    var cHtml3 = '" alt="'
    var cHtml4 = '"> HP: '
    var cHtml5 = ' <br> A: '
    var cHtml6 = ' <br> CA: '
    var cHtml7 = ' </div>'
    // 
// functions:
    // set up on page load
        // monsters display in choose1 after heading
            // .append to heading?
            // '<div class="float-left pr-3 monster mo1"> <img class="float-left" src="assets/images/010.png" alt="Monster 1"> HP: 000 <br> A: 000 <br> CA: 000 </div>'
            // testing
            // $(".choose2").on("click", function() {
            // var test = cHtml1 + moArray[0]['class'] + cHtml2 + moArray[0]['imglink'] + cHtml3 + moArray[0]['name'] + cHtml4 + moArray[0]['hp'] + cHtml5 + moArray[0]['att'] + cHtml6 + moArray[0]['catt'] + cHtml7;
            // $(this).append(test);
            // });
            for (let i = 0; i < moArray.length; i++) {
                $(".choose1").append(cHtml1 + moArray[i]['class'] + cHtml2 + moArray[i]['imglink'] + cHtml3 + moArray[i]['name'] + cHtml4 + moArray[i]['hp'] + cHtml5 + moArray[i]['att'] + cHtml6 + moArray[i]['catt'] + cHtml7);
            }
    // onclick to choose character
        // chosen monster appears in Your character spot
            // displays name, hp and attack, no counter-attack
        // all characters disappear from choose1
        // all OTHER characters appear in choose2 after heading
    // onclick to choose opponent
        // chosen opponent appears in Defender spot
            // displays name? displays hp and counter attack, no attack
        // chosen opponent disappears from list
        // OTHER opponents cannot be clicked until Defender is defeated
        // Attack button appears
    // onclick to attack: every attack (until Defender HP <1)
        // if Attacker's HP < 1
            // lose message
            // attack button and all monsters deactivate
            // restart button appears
        // if Defender's HP > 0
            // Defender's HP decreased by Attacker's attack points
            // Attacker's HP decreased by Defender's counter-attack points
            // Attacker's attack points increase by base attack
        // else if OTHER opponents still available
            // attack button disappears
            // Defender Disappears
            // OTHER opponents reactivate, can be clicked
        // else
            // win message
            // attack button deactivates
            // restart button appears
    // onclick to restart
        // empty Defender's area
        // empty Attacker's area
        // hide attack and restart buttons
        // put all monsters back in choose1




// .remove() deletes the selected element, html and all content.
// var = $(selector).detach() --> the variable is now equal to
    // the detached html and content, which can be attached somewhere else.
// .empty


// function to check that all the characters' stats work
    // (X's HP)/(Y's CA) > (√(8(YHP/X's A) +1) /2 ===== X defeats Y
    // var mon1 = []; 
    // var mon2 = []; 
    // var mon3 = []; 
    // var mon4 = []; 
    // var mon5 = []; 
    // var mon6 = []; 
    // var mon7 = []; 
    // var mon8 = [];
    // var testArr = [mon1 = [], mon2 = [], mon3 = [], mon4 = [], mon5 = [], mon6 = [], mon7 = [], mon8 = []]
    // for (var j = 0; j < moArray.length; j++) {
    //     for (var i = 0; i < moArray.length; i++) {
    //         if (parseInt(moArray[j]["hp"])/parseInt(moArray[i]["catt"]) > (Math.sqrt(8*(parseInt(moArray[i]["hp"])/parseInt(moArray[j]["att"])) +1) /2)) {
    //             testArr[j].push(true);
    //         }
    //         else {
    //             testArr[j].push(false)
    //         }
    //     }
    // };
    // console.log(testArr)