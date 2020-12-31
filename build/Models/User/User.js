import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    useranme: { type: String, required: true, unique: true },
    passwird: { type: String, required: true },
});
export const userModel = mongoose.model("userModel", userSchema);
//# sourceMappingURL=User.js.map