import { connect } from "mongoose";
import { MONGODB_ATLAS } from "./config";
(async () => {
    
    try {
        const db = await connect(MONGODB_ATLAS);
        console.log("Database connected to", db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();
