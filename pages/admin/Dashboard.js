import navAdmin from "./header_dashboard";

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
                Thống kê
              </h2>

            </div>
          </div>

          </div>
        </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
    `;
    },
};
export default adminAddnews;