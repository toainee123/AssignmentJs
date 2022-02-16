import instance from "./config";

export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user)
} 
export const signin = (user) => {
    const url = "/sign_in";
    return instance.post(url, user);
}