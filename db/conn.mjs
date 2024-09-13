import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const connectionString = process.env.DB_URL;
const client = new MongoClient(connectionString);
//console.log("MongoDB Connection String:", connectionString);

let connection = null;
let db;

async function connect() {
    console.log("Trying to connect to the MongoDB.... ")
    // if (!db) {
        try {
            console.log("Still Trying ......... ")
            connection=await client.connect();
            console.log('Connected to the database');
            db = connection.db("sample_training");  
             // Log the database name
             console.log(`Successfully connected to database: ${db.databaseName}`);
             
             // Optionally log a collection name
            //const collection = db.collection("grades");
             // console.log(`Successfully accessed collection: ${collection.collectionName}`);
            return db;
        } catch (e) {
            console.error('Error connecting to the database:', e);
            throw e;
        }
    // }
   
}

export default connect;
