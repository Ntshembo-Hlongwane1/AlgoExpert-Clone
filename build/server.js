import express from "express";
import { config } from "dotenv";
config();
const app = express();
//=============================================================Server configs & cONNECTION=============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
//# sourceMappingURL=server.js.map