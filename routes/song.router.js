import express from "express"
import SongController from "../Controllers/song.controller.js"

export const songRouter = express.Router()

const song = new SongController() //class instans(kopi) - bliver til et object



/*-------GET------------------------------------------------------------------------------*/
songRouter.get("/songs", (req, res) => { //HVORFOR VIRKER DET UDEN /POSTS?
    // const song = new SongController() //class instans(kopi) - bliver til et object
    // console.log("Virker list?",song.list(req, res));
    // res.send('Virker get?')
    return song.list(req, res)
})

songRouter.get("/songs/:id([0-9]*)", (req, res) => { 
    // const song = new SongController() //class instans(kopi) - bliver til et object
    // console.log("virker details", song.details());
    return song.details(req, res)
})

songRouter.get('/api/song', (req, res) => {
    song.list(req, res)
})


/*-------POST------------------------------------------------------------------------------*/
songRouter.post("/songs", (req, res) => {
    return song.create(req, res)
})

/*-------PUT------------------------------------------------------------------------------*/
songRouter.put("/songs", (req, res) => {
    console.log("put");
    res.send('updater alle poster')
})

/*-------DELETE------------------------------------------------------------------------------*/
songRouter.delete("/songs", (req, res) => {
    console.log("delete");
    res.send('slet alle poster')
})
