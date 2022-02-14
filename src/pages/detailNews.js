import Header from "../component/header";
import footer from "../component/footer";
import { get } from "../api/post";
const NewDetail = {
    async render(id) {
        const {data} = await get(id);
        return /* html */ `
            <header>${Header.render()}</header>
            <div>
                <h1>${data.title}</h1>
                <img src="${data.img}" />
                <div>${data.desc}</div>
            </div>
            <footer>${footer.render()}</footer>
        `;
        // console.log(result);
    },
};
export default NewDetail;