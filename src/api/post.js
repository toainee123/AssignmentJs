import instance from "./config";

export const getAll = () => {
    const url = `/posts`;
    return instance.get(url)
}
export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url)
}