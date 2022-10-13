const config = {
  file:"./db.json"
}

let db = require(config.file);
const fs = require('fs')

db["abc"] = "funny";

let newfile = config.file;
if (newfile.startsWith("./")){
  newfile.replace("./","");
}
fs.writeFileSync(newfile,JSON.stringify(db),"utf-8")
