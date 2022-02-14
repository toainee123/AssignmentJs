import instance from "./config";

export const getAll = () => {
    const url = `/post`;
    return instance.get(url)
}
export const get = () => {
    const url = `/post${id}`;
    return instance.get(url)
}