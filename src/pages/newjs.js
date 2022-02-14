import { getAll } from "../api/post";

const Newsjs = {
    async render() {
        const { data } = await getAll()
        return `
        <h2 class="font-semibold text-2xl text-blue-900 my-4 uppercase">Tin tức học tập</h2>
        <div class="news">
            <div class="grid grid-cols-3 gap-8">
                ${data.map((posts) => /*html */`
                            <div class="news-item border p-5">
                                <div class="news-img">
                                    <a href="/news/${posts.id}">
                                        <img src="${posts.img}"  width="380px" />
                                    </a>
                                </div>
                                <h3 class="my-3"><a href="/news/${posts.id}" class="font-semibold text-xl text-orange-500">${posts.title}</a></h3>
                                <p class="text-sm text-gray-600">${posts.desc}</p>
                            </div>
                    `).join("")}
            </div>
        </div>`;
            
    },
};
export default Newsjs;