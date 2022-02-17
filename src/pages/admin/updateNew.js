import { get, update } from "../../api/posts";

const newUpdate = {
    async render(id){
        // lay id nhan tu tham so router
        const {data} = await get(id)
        // console.log(data);
        // goi ham get o post truyen id de lay du lieu tu object
        return /*html */`
        <form id="formEdit">
            <input type="text" id="title" value="${data.title}" placeholder="Ten sp"/>
            <img src="${data.img}" width="30%" />
            <input type="text" id="desc" value="${data.desc}" placeholder="Noi dung"/><br>
            <button type="submit" class="bg-red-300 text-white">Doi</button/>
        </form>
        `
    },
    afterRender(id) {
        const formEdit = document.querySelector("#formEdit");
        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("submit");
            update({
                id: id,
                title: document.querySelector("#title").value,
                desc: document.querySelector("#desc").value
            })
            console.log(update);
        })
    }
}
export default newUpdate