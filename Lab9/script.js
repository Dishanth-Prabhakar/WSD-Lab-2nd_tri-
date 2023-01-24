// Js script to write data on the json file on server side using Fs node  module
const fs = require("fs");
   

fs.readFile("data.json", function(err, data) {
      
    if (err) throw err;
   
    const users = JSON.parse(data);
      
});

const users = require("./data.json");

let user = {
    id:"3",
    name:"Dinesh",
    gender: "male",
    phone: "9876543210",
    mail: "Dinesh@gmail.com"
};

users.data.push(user);
   
fs.writeFile("users.json", JSON.stringify(users), err => {
     
    if (err) throw err; 
   
    console.log("Done writing"); 
});