import db from '../Config/db.config.js'
import sequelize from '../Config/sequelize.config.js'

class SongModel {
    constructor() {

    }

    list = (req, res) =>{
        return new Promise((resolve, reject) => {
            const orderBy = req.query.orderBy || 's.id'
            const dir = req.query.dir || 'ASC'
            const limit = req.query.limit ? `LIMIT ${req.query.limit}` : ''

            const sql = `
                    SELECT s.id, s.title, a.name AS artist
                    FROM song s
                    JOIN artist a
                    ON s.artist_id =a.id
                    ORDER BY ${orderBy} ${dir} 
                    ${limit}`
            db.query(sql, (err, result) =>{
                if(err){
                    reject(err)
                } else{
                    resolve(result)
                }
            })
        })
    }
}

export default SongModel