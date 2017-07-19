import * as express from "express";
import {fileExists, readFile, readJSONFile} from "build-utils/fs";
import * as fs from "fs";

const app = express();

app.get("/api/question",  function(req, res) {
  fs.readdir("data", async function(err, files) {
    if(err) {
      res.status(500);
      res.statusMessage = err.message;
      return;
    }

    const items = [];

    for(let dir of files) {
      const metadata = await readJSONFile("data/" + dir + "/metadata.json");
      const question = await readFile("data/" + dir + "/q.html", "utf8");

      metadata.code = question;

      for(let i=0; i<4; i++) {
        let answerFile = "data/" + dir + `/a${i+1}.html`;
        if(await fileExists(answerFile)) {
          metadata.answersHTML = metadata.answersHTML || [];
          metadata.answersHTML[i] = await readFile(answerFile, "utf8");
        }
      }


      items.push(metadata);
    }

    res.json(items);
  });
});

app.listen(3000, function() {
  console.log("Server is running");
});
