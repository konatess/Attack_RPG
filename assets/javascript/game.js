// variables
    // array of objects for monsters
        // each monster needs:
            // id info
            // name
            // image link
            // hit points
            // attack
            // counter attack
            var moArray = [
                {id: "mo1", name: "Oscar", imglink: "assets/images/010.png", hp: 162, att: 7, catt: 35},
                {id: "mo2", name: "Bartholomew", imglink: "assets/images/011.png", hp: 155, att: 5, catt: 17},
                {id: "mo3", name: "Moonster", imglink: "assets/images/015.png", hp: 148, att: 8, catt: 9},
                {id: "mo4", name: "Kzak", imglink: "assets/images/018.png", hp: 136, att: 6, catt: 5},
                {id: "mo5", name: "Fred", imglink: "assets/images/019.png", hp: 179, att: 4, catt: 26},
                {id: "mo6", name: "Gilly", imglink: "assets/images/020.png", hp: 127, att: 10, catt: 42},
                {id: "mo7", name: "Lucky", imglink: "assets/images/025.png", hp: 113, att: 9, catt: 31},
                {id: "mo8", name: "Odd", imglink: "assets/images/029.png", hp: 101, att: 11, catt: 51}
            ]
    // html chunks? not sure if this will work
    var cHtml1 = '<div class="float-left pr-3 monster" id="'
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
            // '<div class="float-left pr-3 monster" id="mo1"> <img class="float-left" src="assets/images/010.png" alt="Monster 1"> HP: 000 <br> A: 000 <br> CA: 000 </div>'
            // testing
                // $(".choose2").on("click", function() {
                // var test = cHtml1 + moArray[0]['id'] + cHtml2 + moArray[0]['imglink'] + cHtml3 + moArray[0]['name'] + cHtml4 + moArray[0]['hp'] + cHtml5 + moArray[0]['att'] + cHtml6 + moArray[0]['catt'] + cHtml7;
                // $(this).append(test);
                // });
            for (let i = 0; i < moArray.length; i++) {
                $(".choose1").append(cHtml1 + moArray[i]['id'] + cHtml2 + moArray[i]['imglink'] + cHtml3 + moArray[i]['name'] + cHtml4 + moArray[i]['hp'] + cHtml5 + moArray[i]['att'] + cHtml6 + moArray[i]['catt'] + cHtml7);
            };
            // set stage of play?
                // chooseChar, chooseOpp, attack, gameOver
            var stage = "chooseChar"
            var baseAtt = 0
            var oppLeft = moArray.length - 1
    // choose character function
    $(".monster").on("click", function() {
        if (stage === "chooseChar") {
        // chosen monster appears in Your character spot
            // displays image, name, hp and attack, no counter-attack
            var attID = $(this).attr("id")
            console.log(attID);
            for (let j = 0; j < moArray.length; j++) {
                var attIndex
                moArray[j]["id"] === attID ? attIndex = j : null
            };
            console.log(attIndex);
                // display image
                $(".attImg").attr("src", moArray[attIndex]["imglink"]);
                // display name
                $(".attName").text(moArray[attIndex]["name"]);
                // display hp
                $("#attHP").text(moArray[attIndex]["hp"]);
                // display attack
                $("#attA").text(moArray[attIndex]["att"]);
            $("#" + attID).remove();
            // set base attack
            baseAtt = parseInt($("#attA").text());
            // all characters disappear from choose1
            var opponents = $(".monster").detach();
            // all OTHER characters appear in choose2 after heading
            $(".choose2").append(opponents);
            $(".attacker").removeClass("invisible");
            stage = "chooseOpp";
            return
        };

    // choose opponent function
        if (stage === "chooseOpp") {
        // chosen opponent appears in Defender spot
            // displays name? displays hp and counter attack, no attack
            var defID = $(this).attr("id")
            console.log(defID);
            for (let k = 0; k < moArray.length; k++) {
                var defIndex
                moArray[k]["id"] === defID ? defIndex = k : null
            };
            // display image
            $(".defImg").attr("src", moArray[defIndex]["imglink"])
            // display name
            $(".defName").text(moArray[defIndex]["name"]);
            // display hp
            $("#defHP").text(moArray[defIndex]["hp"]);
            // display attack
            $("#defCA").text(moArray[defIndex]["catt"]);
            $(".defender").removeClass("invisible");
            $(".defName").removeClass("dead");
            $(".defImg").removeClass("dead");
        // chosen opponent disappears from list 
            $("#" + defID).remove();
            oppLeft--
        // Attack button appears
        $(".attackbtn").removeClass("invisible");
        stage = "attack"
        return
        };
    });
        
    // onclick to attack: every attack (until Defender HP <1)
    $(".attackbtn").on("click", function() {
        // if (parseInt($("#attHP").text()) >= 0) {
            // if Defender's HP > 0
            if (parseInt($("#defHP").text()) > 0) {
                // Defender's HP decreased by Attacker's attack points
                $("#defHP").text(parseInt($("#defHP").text()) - parseInt($("#attA").text()));
                // Attacker's attack points increase by base attack
                $("#attA").text(parseInt($("#attA").text()) + baseAtt);
                console.log($("#attA").text())
                // Attacker's HP decreased by Defender's counter-attack points
                if (parseInt($("#defHP").text()) > 0) {
                    $("#attHP").text(parseInt($("#attHP").text() - parseInt($("#defCA").text())));
                        // if Attacker's HP < 1
                        if (parseInt($("#attHP").text()) < 1) {
                            // fade attacker and name
                            $(".attName").addClass("dead");
                            $(".attImg").addClass("dead");
                            // TODO: lose message
                            // TODO: attack button and all monsters deactivate
                            $(".attackbtn").addClass("invisible");
                            // restart button appears
                            $(".restartbtn").removeClass("invisible");
                            // change stage
                            stage = "gameOver"
                        }
                    return
                };
                // fade defender image and name
                if (!(parseInt($("#defHP").text()) > 0)) {
                    $(".defName").addClass("dead");
                    $(".defImg").addClass("dead");
                    if (oppLeft > 0) {
                        // attack button disappears
                        $(".attackbtn").addClass("invisible");
                        // OTHER opponents reactivate, can be clicked
                        stage = "chooseOpp"
                    }
                    else {
                        stage = "gameOver"
                    }
                    return
                }
                return
            }
            // else
            else {
                // win message
                $(".win-msg").addClass("visible");
                $(".win-msg").removeClass("invisible");
                // attack button deactivates
                $(".attackbtn").addClass("invisible");
                // restart button appears
                $(".restartbtn").removeClass("invisible");
            }
        // }
        // else {
        //     return
        // }
    });
    
    // onclick to restart
    $(".restartbtn").on("click", function(){
        // empty Defender's area
        $(".attacker").addClass("invisible");
        // empty Attacker's area
        $(".defender").addClass("invisible");
        // hide attack and restart buttons
        $(".attackbtn").addClass("invisible");
        $(".restartbtn").addClass("invisible");
        // hide win message
        $(".win-msg").removeClass("visible");
        $(".win-msg").addClass("invisible");
        // remove dead class
        $(".dead").removeClass("dead")
        // put all monsters back in choose1
        $(".monster").remove();
        for (let l = 0; l < moArray.length; l++) {
            $(".choose1").append(cHtml1 + moArray[l]['id'] + cHtml2 + moArray[l]['imglink'] + cHtml3 + moArray[l]['name'] + cHtml4 + moArray[l]['hp'] + cHtml5 + moArray[l]['att'] + cHtml6 + moArray[l]['catt'] + cHtml7);
        };
        // reset stage
        stage = "chooseChar"
        return
    });

// .remove() deletes the selected element, html and all content.
// var = $(selector).detach() --> the variable is now equal to
    // the detached html and content, which can be attached somewhere else.
// .empty

// $("#mo1").remove();

// var opponents = $(".monster").detach();
// $(".choose2").append(opponents);
// $("#mo2").remove();


// $("#id").attr("src", moArray[variable set by clicking choice].imglink) to change 
// updating attacker - defender
// $(".attName").text(moArray[3]["name"]);
// $("#attHP").text(moArray[3]["hp"]);
// $("#attA").text(moArray[3]["att"]);

// $(".defName").text(moArray[4]["name"]);
// $("#defHP").text(moArray[4]["hp"]);
// $("#defCA").text(moArray[4]["catt"]);

// $("#id").removeClass(classname) e.g.
// $(".attackbtn").removeClass("invisible");
// $(".restartbtn").removeClass("invisible");
// $(".attacker").removeClass("invisible");
// $(".defender").removeClass("invisible");
// $(".attName").addClass("dead");
// $(".attImg").addClass("dead");






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