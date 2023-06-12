import db from '../Config/db.config.js'
class SongController {

    constructor() {
        console.log('Class Songcontroller instantiated')
    }
    list = (req, res) => {
        const sql =   `SELECT s.id, s.title, a.name
                    FROM song s
                    JOIN artist a
                    ON s.artist_id = a.id
                    ORDER BY a.name`
        db.query(sql, (err, result) => {
            if(err) {
                console.error(err);
            } else {
                res.send("Hej")
                // console.log(result);
            }
        })
    }

    details = (req, res) => {
        const id = req.params.id
        const sql = `SELECT s.id, s.title, s.content, a.name
                        FROM song s
                        JOIN artist a
                        ON s.artist_id = a.id
                        WHERE s.id = ?
                        ORDER BY a.name`
        db.query(sql), {id}, (err, result) => {
            if(err) {
                console.error(err);
            } else {
                res.json(result)
            }
        }
    }

    create = () => {
        console.log('kører create metode')
        return true
    }
    update = () => {
        console.log('kører update metode')
        return true
    }
    delete = () => {
        console.log('kører delete metode')
        return true
    }
}

export default SongController