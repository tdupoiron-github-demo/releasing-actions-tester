const core = require('@actions/core');

const faces = core.getInput("faces");

core.setOutput("roll", Math.floor(Math.random() * faces) + 1);