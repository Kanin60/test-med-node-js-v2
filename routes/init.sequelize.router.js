import express from "express"
import SongModel from "../Models/sequelize.song.model.js";
import sequelize from "../Config/sequelize.config.js"

const router = express.Router()

/*-------GET------------------------------------------------------------------------------*/
router.get("/init", (req, res) => { 
    try {
        sequelize.sync()
        console.log('Virker det?');
        res.sendStatus(200)
    }
    catch(err){
        console.error(err);
    }
})


export {router}