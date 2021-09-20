const knex = require("./knex");


function createsubject(subjects){
    return knex("subjects").insert(subjects);
};

function getallsubjects(){
    return knex("subjects").select("*");
};

module.exports={
    createsubject,
    getallsubjects
}