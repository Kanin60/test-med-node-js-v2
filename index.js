import express from 'express'
import { postRouter } from './Routes/post.router.js';
import dotenv from 'dotenv'

// TIL AT TJEKKE OM DET VIRKER (FRA VIDEO)
// import db from './Config/db.config.js'
// db.query(`SELECT title FROM song`,(err, result) =>{
//     console.log(result);
// })

//Opgave: MySQL kald i Node.js nr. 3
// import db from './Config/db.config.js'
// db.query(`SELECT title, name FROM song s join artist a ON s.artist_id = a.id;`,(err, result) =>{
//     console.log(result);
// })

//Opgave: MySQL kald i Node.js nr. 4
import db from './Config/db.config.js'
db.query(`SELECT s.id, title, content, name FROM song s join artist a ON s.artist_id = a.id WHERE s.id = 544;`,(err, result) =>{
    console.log(result);
})

dotenv.config();

const port = process.env.PORT;
const api_key = process.env.APIKEY;
const app = express()

app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send("Velkommen til min NodeJS app");
})

app.use("/brev",postRouter)

app.get("*",(req,res, next) => {
    res.status(404).send("<h1>fejl 404</h1>")
})

app.listen(process.env.PORT, () =>{
    console.log(`severen kører på: http://localhost:${process.env.PORT}`);
})
