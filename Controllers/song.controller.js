import db from '../Config/db.config.js'
import SongModel from '../Models/song.model.js'

const model = new SongModel()

class SongController {

    constructor() {
        console.log('Class Songcontroller instantiated')
    }
/*-----LIST----------------------------------------------------------------------------------*/
    list = async (req, res) => {
        const result = await model.list(req,res)
        res.json(result)





        /* //HØRER TIL VIDEOERNE PÅ TEAMS (UDEN MODEL)
        //destructor
        let { sortkey, sortdir, limit, attributes } = req.query

        sortkey = sortkey ? sortkey : 's.id' //ternary operator
        sortdir = sortdir ? sortdir.toUpperCase() : 'ASC' //ternary operator
        limit = limit ? `LIMIT ${parseInt(limit)}` : ''
        attributes = attributes ? attributes : 's.id, s.title, a.name, s.artist_id'

        const sql =   `SELECT ${attributes}
                    FROM song s
                    JOIN artist a
                    ON s.artist_id = a.id
                    ORDER BY ${sortkey} ${sortdir} ${limit}`
                    console.log(sql);
        db.query(sql, (err, result) => {
            if(err) {
                console.error(err);
            } else {
                res.json(result)
                // console.log(result);
            }
        }) */
    }

/*-----DETAILS----------------------------------------------------------------------------------*/
    details = (req, res) => {
        // console.log(req, res);
        const id = req.params.id
        const sql = `SELECT s.id, s.title, s.content, a.name
                        FROM song s
                        JOIN artist a
                        ON s.artist_id = a.id 
                        WHERE s.id = ? 
                        ORDER BY a.name`
        console.log("Sang med id: ",req.params.id);
        db.query(sql, [id], (err, result) => {
            if(err) {
                console.error(err);
            } else {
                res.json(result)
            }
        })
    }

/*-----CREATE----------------------------------------------------------------------------------*/
    create = (req, res) => {
        const { title, content, artist_id } = req.body
        // console.log({title, content, artist_id}) 

        if(title  && content && artist_id) {
            const sql = `
                INSERT INTO song(title, content, artist_id)
                VALUES (?, ?, ?)
            `
            
                db.query(sql, [title, content, artist_id], (err, result) => {
                if(err){
                    console.error(err)
                } else {
                    res.json({new_id: result.insertId})
                }
            })
        }

    }

    /*-----UPDATE----------------------------------------------------------------------------------*/
    update = (req, res) => {
        console.log('kører update metode')
        // return true
    }

    /*-----DELETE----------------------------------------------------------------------------------*/
    delete = (req, res) => {
        console.log('kører delete metode')
        // return true
    }
}

export default SongController
