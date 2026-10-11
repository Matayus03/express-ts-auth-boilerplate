import authRepositories from "../repositories/authRepositories";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const saltRounds = Number(process.env.SALT_ROUNDS) || 12;

async function register(username: string, email: string, password: string) {
    const existingEmail = await authRepositories.findByEmail(email);

    if (existingEmail) {
        throw new Error("Email already exists");
    }

    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await authRepositories.createUser(username, email, passwordHash);

    const token = jwt.sign({
        id: user.id,
        username: user.username
    },  
        process.env.JWT_SECRET!,
    { expiresIn: "1h" }
    );

    return {
        user,
        token
    };
}

async function login(email: string, password: string) {
    const user = await authRepositories.findByEmail(email);

    if (!user) {
        throw new Error("Invalid Credentials");
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
        throw new Error("Invalid Credentials");
    }

    const token = jwt.sign({
        id: user.id,
        username: user.username
    },
        process.env.JWT_SECRET!,
    { expiresIn: "1h" }
    );

    const safeUser = {
        id: user.id,
        username: user.username
    }

    return {
        user: safeUser,
        token
    };
}

export default {
    register,
    login
}