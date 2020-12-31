var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { IncomingForm } from "formidable";
import { hash, compare, genSalt } from "bcrypt";
import { userModel } from "../../Models/User/User";
class AuthController {
    SignUp(request, response) {
        const form = new IncomingForm();
        try {
            form.parse(request, (error, fields) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    return response.status(500).json({
                        msg: "Network Error could not sign you up please try again later",
                    });
                }
                const { username, password, verifiedPassword } = fields;
                if (!username || !password || !verifiedPassword) {
                    return response.status(400).json({ msg: "All fields are required" });
                }
                if (password.trim().length < 6) {
                    return response
                        .status(400)
                        .json({ msg: "Password has to be at least 6 characters long" });
                }
                if (password.trim() !== verifiedPassword.trim()) {
                    return response.status(400).json({ msg: "Password's do not match" });
                }
                const isUserExisting = yield userModel.findOne({ username: username });
                if (isUserExisting) {
                    return response
                        .status(400)
                        .json({ msg: "Account with this username already exist" });
                }
                const salt = yield genSalt(15);
                const hashedPassword = yield hash(password, salt);
                const newUser = new userModel({
                    username,
                    password: hashedPassword,
                });
                const savedUser = yield newUser.save();
                return response
                    .status(201)
                    .json({ msg: "Account successfully created, please login in" });
            }));
        }
        catch (error) {
            return response.status(500).json({
                msg: "Network Error could not sign you up please try again later",
            });
        }
    }
    SignIn(request, response) {
        const form = new IncomingForm();
        try {
            form.parse(request, (error, fields) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    return response.status(500).json({
                        msg: "Network Error could not sign you in please try again later ",
                    });
                }
                const { username, password } = fields;
                if (!username || !password) {
                    return response.status(400).json({ msg: "All fields are required" });
                }
                const isUserExisting = yield userModel.findOne({
                    username: username,
                });
                if (!isUserExisting) {
                    return response
                        .status(400)
                        .json({ msg: "Account with this username does not exist" });
                }
                const user = isUserExisting;
                const hashedPassword = user.password;
                const isPasswordValid = compare(password, hashedPassword);
                if (!isPasswordValid) {
                    return response.status(400).json({ msg: "Invalid crendentials" });
                }
                return response.status(200).json({ msg: "Authenticated!!!!!!!!!" });
            }));
        }
        catch (error) {
            return response.status(500).json({
                msg: "Network Error could not sign you in please try again later ",
            });
        }
    }
}
export { AuthController };
//# sourceMappingURL=Auth.js.map