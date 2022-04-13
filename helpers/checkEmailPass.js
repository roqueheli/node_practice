import { users } from "../data/users.js";

const checkEmailPass = (email, password) => {
    const user = users.find((user) => user.email === email);
    if (!user) throw new Error();
    if (user.password !== password) throw new Error();
    return user;
}

export default checkEmailPass;