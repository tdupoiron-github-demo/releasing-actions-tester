import dateFormat, { masks } from "dateformat";
import core from "@actions/core";

const now = new Date();
const format = core.getInput('format');

core.setOutput("time", dateFormat(now, format));