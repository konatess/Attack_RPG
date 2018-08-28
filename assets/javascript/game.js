// variables
    // array of objects for monsters
        // each monster needs:
            // class info
            // name
            // image link
            // hp
            // attack
            // counter attack
    // html chunks? not sure if this will work
    // 
// functions:
    // set up on page load
        // monsters display in choose1 after heading
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
        // empty attacker's area
        // hide attack and restart buttons