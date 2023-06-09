// var express = require("express")
// const app = express()
// const http = require('http');

// // // Create a server object
// // const server = http.createServer((req, res) => {
// //   // Set the response header
// //   res.writeHead(200, {'Content-Type': 'text/plain'});

// //   // Send a response
// //   res.end('Hello, world!');


// // });
// // const port = 3000;
// // server.listen(port, () => {
// //   console.log(`Server listening on port ${port}`);
// // });
// app.get('/index.html',function(req,res){
//   res.sendFile(__dirname + "/" + "api_test.html");
//   })




var express = require("express")
var bodyparser = require("body-parser")
// var mongoose = require("mongoose")

const app = express()

// app.use(bodyparser.json())
// app.use(express.static('public'))
// app.use(bodyparser.urlencoded({
//     extended:true
// }))


// mongoose.connect('mongodb://localhost:27017/User_Login',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// var db = mongoose.connection;

// db.on('error',()=>console.log("Error in connecting to database"));
// db.once('open',()=>console.log("Connected to database"))


app.get('/',function(req,res){
    res.sendFile(__dirname + "/" + "api_test.html");
}).listen(8080)


// app.get("/contact.html",(req,res)=>{
//     res.sendFile(__dirname + "/" + "contact.html");
// })

// app.get('Final_Resume.pdf', (req,res)=>{
//     res.sendFile(__dirname + "/" + "Final_Resume.pdf")
// })


// app.post("/sign_up",(req,res)=>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var phno = req.body.phno;
//     var password = req.body.password;

//     var data ={
//         "name":name,
//         "email":email,
//         "phno":phno,
//     }

//     db.collection('Login_Credentials').insertOne(data,(err,collection)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Record Inserted Successfully!!");
//     });

//     return res.redirect('signup_success.html')

// })

// app.get("/",(req,res)=>{
//     res.set({
//         "Allow-access-Allow-Origin":'*x'
//     })
//     return res.redirect(index.html)
// }).listen(8080);

console.log("Listening on PORT 8080")
