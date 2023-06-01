import express from "express"


export const postRouter = express.Router()

postRouter.get("/about", (req, res) => {
   
    res.send('Hent alle poster')
})

postRouter.post("/about", (req, res) => {
    console.log("");
    res.send('send alle poster')
})

postRouter.put("/about", (req, res) => {
    console.log("");
    res.send('tilføj alle poster')
})

postRouter.delete("/about", (req, res) => {
    console.log("");
    res.send('slet alle poster')
})

