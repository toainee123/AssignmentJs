import data from "../data";
import Header from "../component/header";
import footer from "../component/footer";
const NewDetail = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
            <header>${Header.render()}</header>
            <div>
                <h1>${result.title}</h1>
                <img src="${result.img}" />
                <div>${result.desc}</div>
            </div>
            <footer>${footer.render()}</footer>
        `;
        // console.log(result);
    },
};
export default NewDetail;