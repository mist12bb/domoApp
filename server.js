let experss = require("express");
let mysql = require("mysql");
let ejs = require("ejs");
const jsdom = require("jsdom");
const bodyParser = require("body-parser");
const fs = require("fs");

const { JSDOM } = jsdom;
ejs.cache = null;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent);
let conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"29993!",
    database:"test"
});

let app = experss();
app.use( bodyParser.urlencoded({ extended: false }))
app.set("view engine", ejs);
app.get("/", (req, res)=>{
    let sql = "SELECT * FROM user where id = 2";
   let typeDataFILE = fs.readFileSync(__dirname+"/type.json");
   const reseult = JSON.parse(typeDataFILE);
    res.render("index.ejs" , {action:Array.from (reseult)});
    console.log(reseult[0].amount);
    
});
app.post("/get", (req, res)=>{
    let sql = `SELECT * FROM m where type = '${req.body.type}'`;
    conn.query(sql, (err, reseult)=>{
        console.log(reseult);
        fs.writeFile(__dirname+"/type.json", JSON.stringify(reseult))
        
    })
    res.redirect("/")
});
app.listen(port = 1234, ()=>{
    console.log("http://localhost:"+port);
    
})