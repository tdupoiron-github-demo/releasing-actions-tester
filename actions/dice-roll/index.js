const core = require('@actions/core');

const sides = core.getInput("sides");

console.log("Number of sides: ", sides);

core.setOutput("roll", Math.floor(Math.random() * sides) + 1);