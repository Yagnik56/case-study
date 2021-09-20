const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection:{
        filename:"subjects.sqlite3"
    }
})

module.exports = connectedKnex;