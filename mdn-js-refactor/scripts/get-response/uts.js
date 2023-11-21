//NOTE: this is the frirst code i made but i realize that it repites a
// lot of code, so i re do it again
/*

"use strict";

function uts() {
  console.log("testNum | Pass/Fail | score | machineActive [| expectedResponse | response]");
  console.log("---");

  let numtest=1;
  

  // Test 1: score=75, machineActive=false
  const expectedResponse1 = "Switch the machine on.";
  const response1 = getResponse(75, false);
  const passFail1 = response1 === expectedResponse1 ? "Pass" : "Fail";
  console.log(`${numtest++} | ${passFail1} | 75 | false | ${expectedResponse1} | ${response1}`);

  // Test 2: score=75, machineActive=true
  const expectedResponse2 = "That's a great score, you really know your stuff.";
  const response2 = getResponse(75, true);
  const passFail2 = response2 === expectedResponse2 ? "Pass" : "Fail";
  console.log(`2 | ${passFail2} | 75 | true | ${expectedResponse2} | ${response2}`);

  // Test 3: score=150, machineActive=false
  const expectedResponse3 = "This is not possible, an error has occurred.";
  const response3 = getResponse(150, false);
  const passFail3 = response3 === expectedResponse3 ? "Pass" : "Fail";
  console.log(`3 | ${passFail3} | 150 | false | ${expectedResponse3} | ${response3}`);

  // Test 3: score=150, machineActive=true
  const expectedResponse4 = "What an amazing score! Did you cheat? Are you for real?";
  const response4 = getResponse(150, true);
  const passFail4 = response3 === expectedResponse4 ? "Pass" : "Fail";
  console.log(`4 | ${passFail4} | 150 | true | ${expectedResponse4} | ${response4}`);

  console.log("---");

  const failedTests = [passFail1, passFail2, passFail3,passFail4].filter(result => result === "Fail").length;
  console.log(`Fails: ${failedTests}`);
}
*/


"use strict";

function uts() {
  console.log("testNum | Pass/Fail | score | machineActive | expectedResponse | response");
  console.log("---");




  const tests = [
    { score: 75, machineActive: false, expectedResponse: "Switch the machine on." },
    { score: 75, machineActive: true, expectedResponse: "That's a great score, you really know your stuff." },
    { score: 150, machineActive: false, expectedResponse: "Switch the machine on." },
    { score: 150, machineActive: true, expectedResponse: "That's a great score, you really know your stuff." },
    { score: 89.3, machineActive: true, expectedResponse: "That's a great score, you really know your stuff." },
    { score: 89.5, machineActive: true, expectedResponse: "That's a great score, you really know your stuff." },
    { score: 89.6, machineActive: true, expectedResponse: "That's a great score, you really know your stuff." },
    { score: 90, machineActive: true, expectedResponse: "What an amazing score! Did you cheat? Are you for real?" },
    { score: 90.1, machineActive: true, expectedResponse: "What an amazing score! Did you cheat? Are you for real?" },
    { score: null, machineActive: true, expectedResponse: "This is not possible, an error has occurred." },
    { score: "150", machineActive: true, expectedResponse: "This is not possible, an error has occurred." },
    { score: "", machineActive: true, expectedResponse: "This is not possible, an error has occurred." },
    { score: "150e6", machineActive: true, expectedResponse: "This is not possible, an error has occurred." },
    { score: "150n", machineActive: true, expectedResponse: "This is not possible, an error has occurred." },
    { score: "n150", machineActive: true, expectedResponse: "This is not possible, an error has occurred." },
    { score: " ", machineActive: true, expectedResponse: "This is not possible, an error has occurred." },
    { score: NaN, machineActive: true, expectedResponse: "This is not possible, an error has occurred." }
  ];

  let numtest = 1;
  let failedTests = 0;

  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const response = getResponse(test.score, test.machineActive);
    const passFail = response === test.expectedResponse ? "Pass" : "Fail";

    if (passFail === "Pass") {
      console.log(`${numtest++} | ${passFail} | ${test.score} | ${test.machineActive}`);
    }
    else {
      console.log(`${numtest++} | ${passFail} | ${test.score} | ${test.machineActive} | ${test.expectedResponse} | ${response}`);
      if (passFail === "Fail") {
        failedTests++;
      }
    }
  };

  console.log("---");
  console.log(`Fails: ${failedTests}`);
}