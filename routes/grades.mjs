import express from "express";
import connect from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

//Get all records and limit to 5
router.get("/all", async (req, res) => {
    try {
        console.log("Testing inside try...")
        const db = await connect();
        console.log(db.collection("grades"));
        const collection = db.collection("grades");
        const result = await collection.find({}).limit(5).toArray(); // Limit to 5 records
        //console.log(result);
        if (result.length === 0) {
            res.status(404).send("No records found");
        } else {
            res.status(200).send(result);
        }
    } catch (e) {
        console.log("inside catch block")
        res.status(500).json({"error":e.message});
    }
});

// Get a single grade entry
router.get("/:id", async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection("grades");
        const query = { _id: new ObjectId(req.params.id) };
        const result = await collection.findOne(query);

        if (!result) {
            res.status(404).send("Not found");
        } else {
            res.status(200).send(result);
        }
    } catch (e) {
        res.status(500).send("Internal Server Error");
    }
});




export default router;
