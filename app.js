//Buffer//

// const http  = require("http");
// const fs = require("fs/promises"); //read files

// const PORT= 8000;
// const server = http.createServer(async (request,response) => {
// const contentBuffer = await fs.readFile(__dirname + "/text.txt");
// response.statusCode = 200;
// response.setHeader("Content-Type" , "text/plain");
// response.end(contentBuffer.toString("utf-8"));

// })

// server.listen(PORT, () =>{
//     console.log(`Server has startted on port ${PORT}`);
// })

//Api Calling

//promise
// const fs = require("fs/promises");
// (async () => {
//   try {
//     await fs.copyFile("text.txt", "promises.txt");
   
//   } catch (error) {
//     console.log(error);
//   }
// })();

//callback

// const fs = require("fs");
// fs.copyFile("text.txt" , "callback.txt" , (error) => {
//     if(error)
//     console.log(error);
// });

//Synchronous

const fs = require("fs");
fs.copyFileSync("text.txt" , "sync.txt");
