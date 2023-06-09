import express from "express"

export const postRouter = express.Router()

postRouter.get("/", (req, res) => {
    res.send('Hent alle poster')
})

postRouter.post("/", (req, res) => {
    console.log("");
    res.send(`
        ${req.body.firstname} 
        ${req.body.lastname}
        ${req.body.email}
        ${req.body.address}
        ${req.body.titles}
        ${req.body.birthday}

    `)
})

postRouter.put("/", (req, res) => {
    console.log("");
    res.send('tilføj alle poster')
})

postRouter.delete("/", (req, res) => {
    console.log("");
    res.send('slet alle poster')
})