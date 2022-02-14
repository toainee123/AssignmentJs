import { getAll } from "../api/post";

const Newsjs = {
    async render() {
        const { data } = await getAll()
        return `
        <h2 class="font-semibold text-2xl text-blue-900 my-4 uppercase">Tin tức học tập</h2>
        <div class="news">
            <div class="grid grid-cols-3 gap-8"
                ${data.map((post) => `
                    <div class="news-item border p-5 w-96">
                        <a href="/newsjs/${post.id}" >
                            <img src="${post.img}" width="380px"/>
                        <a>
                        <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-xl text-orange-500">${post.title}</a><h3>
                        <p class="text-sm text-grey-600">${post.desc}</p>
                    </div>
                    
                `).join("")}
            </div>
        </div>`;
    },
};
export default Newsjs;