import navAdmin from "../header_dashboard";
import { add } from "../../../api/post";
import axios from "axios";
const adminAddnews = {
    render() {
        return /* html */ `
        <div class="min-h-full">
      <!-- Include Nav admin -->
        ${navAdmin.render()}
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Thêm mới 
              </h2>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
              <a href="/admin/news"  class="sm:ml-3">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <!-- Heroicon name: solid/check -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  Quay lại
                </button>
              </a>
            </div>
          </div>
          </div>
        </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Thêm mới bài viết</h2>
          
        </div>
        <form class="mt-8 space-y-6" id="formadd">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="password" class="sr-only">Tiêu đề bài viết</label>
              <input id="title" name="title" type="text" autocomplete="current-password" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tiêu đề bài viết">
            </div>
            <div>
              <label for="img" class="sr-only">Hình ảnh</label>
              <input id="img" name="img" type="file" autocomplete="current-password" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Hình ảnh">
            </div>
            <div>
              <label for="content" class="sr-only">Nội dung</label>
              <input id="content" name="content" type="text" autocomplete="current-password" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nội dung bài viết">
            </div>
          </div>

          <div class="flex items-center justify-between">
          </div>

          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <!-- Heroicon name: solid/lock-closed -->
                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Thêm mới
            </button>
          </div>
        </form>
      </div>
      </div>

          <!-- /End replace -->
        </div>
      </main>
    </div>
    `;
    },
    afterRender() {
        const formadd = document.querySelector("#formadd");
        const img = document.querySelector("#img");

        img.addEventListener("change", async (e) => {
          const file = e.target.files[0];
          const CLOUD = "https://api.cloudinary.com/v1_1/toaibvph16467/image/upload";
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "fb8psmbv");
          const reponse = await axios.post(CLOUD, formData, {
            headers: {
              "Content-Type": "application/form-data"
            }
          });
          formadd.addEventListener("submit", (e) => {
            e.preventDefault();
            add({
              title: document.querySelector("#title").value,
              img: reponse.data.url,
              desc: document.querySelector("#content").value,
            });
            
          });
          console.log(reponse.data.url)
        });

    },
};
export default adminAddnews;