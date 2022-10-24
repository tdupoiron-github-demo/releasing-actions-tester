const core = require('@actions/core');

const sides = core.getInput("sides");

core.setOutput("roll", Math.floor(Math.random() * sides) + 1);