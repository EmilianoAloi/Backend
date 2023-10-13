const fs = require("fs");
const path = "./file1.txt";

fs.writeFileSync(path, "Texto1")

if (fs.existsSync(path)) {
    const info = fs.readFileSync(path, "utf-8");
    console.log(info);
    fs.appendFileSync(path, "Texto2")
    const info2 = fs.readFileSync(path, "utf-8");
    console.log(info2);
}