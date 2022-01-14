import data from "../data";

const NewDetail = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
            <div>
                <h1>${result.title}</h1>
                <img src="${result.img}" />
                <div>${result.desc}</div>
            </div>
        `;
        // console.log(result);
    },
};
export default NewDetail;