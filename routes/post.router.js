import express from "express"
import SongController from "../Controllers/song.controller.js"

export const postRouter = express.Router()

// const song = new SongController() //class instans(kopi) - bliver til et object

postRouter.get("/", (req, res) => { //HVORFOR VIRKER DET UDEN /POSTS?
    const song = new SongController() //class instans(kopi) - bliver til et object
    console.log("Virker list?",song.list());
    return song.list(req, res)
})

postRouter.get("/:id([0-9]*)", (req, res) => { 
    const song = new SongController() //class instans(kopi) - bliver til et object
    console.log("virker details", song.details());
    return song.details(req, res)
})



postRouter.post("/posts", (req, res) => {
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

postRouter.put("/posts", (req, res) => {
    console.log("");
    res.send('updater alle poster')
})

postRouter.delete("/posts", (req, res) => {
    console.log("");
    res.send('slet alle poster')
})