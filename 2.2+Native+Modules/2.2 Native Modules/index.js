const fs = require("fs");
 fs.writeFile("hey.txt", "Hey, keerthi!! I ned to say smthg where I have lost every phase of life and I was only left out with you in my life. I hope atleast you will be forever!!", (err) => {
    if (err) throw (err);
    console.log("Your file has been saved!!");
});


fs.readFile("./hey.txt", "utf8", (err, data) => {
    if (err) throw (err);
    console.log(data);
});