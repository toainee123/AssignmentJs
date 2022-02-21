import { get, update } from "../../api/posts";

const newUpdate = {
    async render(id){
        // lay id nhan tu tham so router
        const {data} = await get(id)
        // console.log(data);
        // goi ham get o post truyen id de lay du lieu tu object
        return /*html */`
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
        <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> Cập nhật sản phẩm</h2>
        </div>
        <form class="mt-8 space-y-6" action="" id="formEdit" >
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="name" class="sr-only">Tên sản phẩm</label>
                    <input id="title" name="title" type="text"  value="${data.title}" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tên sản phẩm">
                </div>
                <div>
                    <label for="price" class="sr-only">Giá sản phẩm</label>
                    <input id="price" name="price" type="text"  value="${data.price}" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tên sản phẩm">
                </div>
                <div>
                    <label for="img" class="sr-only">Ảnh sản phẩm</label>
                    <input id="img" name="img" type="file" value="${data.img}" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                </div>
                <div>
                    <label for="desc" class="sr-only">Chi tiết sản phẩm</label>
                    <input id="desc" name="desc" type="text" value="${data.desc}" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                </div>
            <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <!-- Heroicon name: solid/lock-closed -->
                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                </span>
                Update
            </button>
            </div>
        </form>
        </div>
    </div>
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
                img: document.querySelector('#img').value,
                price: document.querySelector("#price").value,
                desc: document.querySelector("#desc").value,
            
            })
            console.log(update);
        })
    }
}
export default newUpdate