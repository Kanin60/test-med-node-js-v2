import express from 'express'
import { postRouter } from './Routes/post.router.js';
import dotenv from 'dotenv'
dotenv.config();
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
// import db from './Config/db.config.js'
// db.query(`SELECT s.id, title, content, name FROM song s join artist a ON s.artist_id = a.id WHERE s.id = 544;`,(err, result) =>{
//     console.log(result);
// })



const port = process.env.PORT;
const app = express()


app.use(express.urlencoded({ extended: true})) //læse form data
app.use("/posts",postRouter)
// app.use(songRouter)

app.use((req, res) => {
    res.status(404).send("Fejl 404. Siden blev ikke fundet!")
})

app.listen(port, () => {
    console.log(`server kører på http://localhost:${port}`)
})







// app.get("/", (req, res) => {
//     res.send("Velkommen til min NodeJS app");
// })


// app.get("*",(req,res, next) => {
//     res.status(404).send("<h1>Fejl 404</h1>")
// })

// app.listen(port, () =>{
//     console.log(`severen kører på: http://localhost:${port}`);
// })
