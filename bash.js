const pwd = require("./pwd");
const ls = require("./ls");
const catFile = require("./cat");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const cat = cmd.slice(0, 3);
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
  }

  process.stdout.write("\nprompt > ");
});
