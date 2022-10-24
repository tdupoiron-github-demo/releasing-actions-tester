const core = require('@actions/core');

core.setOutput("time", new Date().toLocaleString());