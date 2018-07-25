"use strict"
startgame();
function startgame(){
    const playTheGame = prompt("Do you want to play the game" );
    if (playTheGame.toLowerCase()==='yes'){
        let yes = prompt("Enter your name");
        startCombat(yes);
} else{
    console.log ("Next time");
}
function startCombat(yes){
        let userHealth=40;
        let grantsHealth=10;
        let wins=0;
    
    while (grantsHealth>0){
        let option = prompt( "Would like to attack or quit");
        if (option.toLowerCase() === "attack"){userHealth-=getdamage();
            console.log(`${yes}s health: ${userHealth}`);
            grantsHealth-=getdamage();
            console.log(`grants health:${grantsHealth}`);
            
            if (wins===3){
                console.log(` You beat Grant! ${userHealth}`);
                break;
            }else if (userHealth<=0){
                console.log( "Grant wins!!!");
                break;
            }else if (grantsHealth<=0){
                wins++;
                grantsHealth=10;
                console.log ("Grant's health resets!!!");
             }
        } else if (option.toLowerCase() ==="quit"){
             alert("Peace");
             break;
        }


        }
        
    function getdamage(){
        return Math.floor(Math.random()*5)+1;
    }}}

    


    
    
