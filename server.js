import { app } from "./app.js";
import { logger } from "./src/lib/logging.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

// running server
app.listen(PORT, HOST, () => {
   logger.info(`Running on http://${HOST}:${PORT}`);
});
