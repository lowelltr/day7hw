"use strict"
const playTheGame = prompt("Do you want to play the game" );

if (playTheGame.toLowerCase()==='yes'){
    let yes = prompt("Enter your name")
    let userHealth=40;
    let grantsHealth=10;
    let wins=0;

while (playTheGame){
    console.log(`${yes}s health: ${userHealth}`);
    console.log(`grants health:${grantsHealth}`);
    grantsHealth-=Math.floor(Math.random() * 2) + 1;
    userHealth-= Math.floor(Math.random() * 2) + 1; 
    
    if (wins===3){
        console.log(` You beat Grant! ${userHealth}`);
        break;
    }
  
    else if (userHealth<=0) {
        console.log( "Grant wins!!!");
        break;
    }
     if (grantsHealth<=0){
        wins++;
        grantsHealth=10;
        console.log ("Grant's health resets!!!");

        if (userHealth=0){
        console.log("Grant wins");
    
    }
     }     
} 
}
 else{
    console.log ("Next time");
}