const {Client}= require('pg');

const client=new Client({
    user:"postgres",
    host:"localhost",
    database:"inventory_application_db",
    password:"12345",
    port:"5432"
});

if (client.connect()){
    console.log("Database connected successfully!")
} else{
    console.log("error connecting to the database")
}

module.exports=client;