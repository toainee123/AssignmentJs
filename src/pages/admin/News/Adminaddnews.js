import navAdmin from "../header_dashboard";

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
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
    `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        console.log("btns");
    },
};
export default adminAddnews;