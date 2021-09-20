var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE "subjects" (
            "SubjectId"	INTEGER NOT NULL,
            "SubjectName"	TEXT NOT NULL,
            "SubjectCode"	TEXT,
            "professorsAssigned"	TEXT,
            PRIMARY KEY("SubjectId")
        )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO subjects (SubjectId,SubjetName,SubjectCode,professorsAssigned) VALUES (?,?,?)'
                db.run(insert, [2,"chemistry","che101","S.K sharma"])
            }
        });  
    }
});


module.exports = db