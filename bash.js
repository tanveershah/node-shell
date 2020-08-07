const pwd = require("./pwd");
const ls = require("./ls");
const catFile = require("./cat");
const curlFile = require('./curl');

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const cat = cmd.slice(0, 3);
  const curl = cmd.slice(0, 4);
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cat === "cat") {
    const fileName = cmd.slice(4);
    const fileNames = fileName.split(" ");
    fileNames.forEach((file) => {
      catFile(file);
    });
  } else if (curl === 'curl') {
    const url = cmd.slice(5);
    curlFile(url);
  }

  process.stdout.write("\nprompt > ");
});