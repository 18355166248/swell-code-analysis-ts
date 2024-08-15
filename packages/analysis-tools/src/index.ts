import packageJSON from "../package.json";

export function getVersion() {
  return packageJSON.version;
}

function init() {
  console.log("test12");
}

export default init;
