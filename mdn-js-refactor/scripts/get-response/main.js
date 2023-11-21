"use strict";

function getResponse(score,machineActive) {

  let response;

  // Check if the machine is switched off

  if (!machineActive) {
    response = "Switch the machine on.";
  } else {

    // Check the score and set the response accordingly

    if (score < 0 || score > 100) {
      response = "This is not possible, an error has occurred.";
    } else if (score >= 0 && score <= 19) {
      response = "That was a terrible score — total fail!";
    } else if (score >= 20 && score <= 39) {
      response = "You know some things, but it's a pretty bad score. Needs improvement.";
    } else if (score >= 40 && score <= 69) {
      response = "You did a passable job, not bad!";
    } else if (score >= 70 && score <= 89) {
      response = "That's a great score, you really know your stuff.";
    } else if (score >= 90 && score <= 100) {
      response = "What an amazing score! Did you cheat? Are you for real?";
    }
  }

  return response;
  } 