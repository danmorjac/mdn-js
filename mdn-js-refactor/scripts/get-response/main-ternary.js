
"use strict";

function getResponse(score, machineActive) {
  return !machineActive
    ? "Switch the machine on."
    : score < 0 || score > 100
    ? "This is not possible, an error has occurred."
    : score >= 0 && score < 20
    ? "That was a terrible score — total fail!"
    : score >= 20 && score < 40
    ? "You know some things, but it's a pretty bad score. Needs improvement."
    : score >= 40 && score < 70
    ? "You did a passable job, not bad!"
    : score >= 70 && score < 90
    ? "That's a great score, you really know your stuff."
    : "What an amazing score! Did you cheat? Are you for real?";
}

//NOTE to Dani: i have seen that you can send only the string without assignming
// the result to a parameter, and i dont know why it works, i think that i can 
 //change this in all of the main archives