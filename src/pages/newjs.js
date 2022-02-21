import { getAll } from "../api/posts";

const Newsjs = {
    async render() {
        const { data } = await getAll()
        return `
        <h2 class="mt-5 mb-4 text-center font-semibold text-2xl text-blue-900 my-4 uppercase">Sản phẩm bán chạy</h2>
        
        <div class="bg-white">
    <div>
      
      <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
        
        <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
  
        
        <div class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
          
  
          <!-- Filters -->
          <form class="mt-4 border-t border-gray-200">
            <h3 class="sr-only">Categories</h3>
            <ul role="list" class="font-medium text-gray-900 px-2 py-3">
              <li>
                <a href="#" class="block px-2 py-3"> Totes </a>
              </li>
  
              
            </ul>
  
            <div class="border-t border-gray-200 px-4 py-6">
              
              <!-- Filter section, show/hide based on section state. -->
              <div class="pt-6" id="filter-section-mobile-0">
                <div class="space-y-6">
                  <div class="flex items-center">
                    <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500"> White </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500"> Beige </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500"> Blue </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500"> Brown </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500"> Green </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500"> Purple </label>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="border-t border-gray-200 px-4 py-6">
              <h3 class="-mx-2 -my-3 flow-root">
                <!-- Expand/collapse section button -->
                <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                  <span class="font-medium text-gray-900"> Category </span>
                  <span class="ml-6 flex items-center">
                    <!--
                      Expand icon, show/hide based on section open state.
  
                      Heroicon name: solid/plus-sm
                    -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    <!--
                      Collapse icon, show/hide based on section open state.
  
                      Heroicon name: solid/minus-sm
                    -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>
              <!-- Filter section, show/hide based on section state. -->
              <div class="pt-6" id="filter-section-mobile-1">
                <div class="space-y-6">
                  <div class="flex items-center">
                    <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-category-0" class="ml-3 min-w-0 flex-1 text-gray-500"> New Arrivals </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500"> Sale </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-category-2" class="ml-3 min-w-0 flex-1 text-gray-500"> Travel </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500"> Organization </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-category-4" class="ml-3 min-w-0 flex-1 text-gray-500"> Accessories </label>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="border-t border-gray-200 px-4 py-6">
              <h3 class="-mx-2 -my-3 flow-root">
                <!-- Expand/collapse section button -->
                <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                  <span class="font-medium text-gray-900"> Size </span>
                  <span class="ml-6 flex items-center">
                    <!--
                      Expand icon, show/hide based on section open state.
  
                      Heroicon name: solid/plus-sm
                    -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    <!--
                      Collapse icon, show/hide based on section open state.
  
                      Heroicon name: solid/minus-sm
                    -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>
              <!-- Filter section, show/hide based on section state. -->
              <div class="pt-6" id="filter-section-mobile-2">
                <div class="space-y-6">
                  <div class="flex items-center">
                    <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-0" class="ml-3 min-w-0 flex-1 text-gray-500"> 2L </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-1" class="ml-3 min-w-0 flex-1 text-gray-500"> 6L </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-2" class="ml-3 min-w-0 flex-1 text-gray-500"> 12L </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-3" class="ml-3 min-w-0 flex-1 text-gray-500"> 18L </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-4" class="ml-3 min-w-0 flex-1 text-gray-500"> 20L </label>
                  </div>
  
                  <div class="flex items-center">
                    <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-5" class="ml-3 min-w-0 flex-1 text-gray-500"> 40L </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">New Arrivals</h1>
  
          <div class="flex items-center">
            <div class="relative inline-block text-left">
              <div>
              </div>
            </div>
  
            <button type="button" class="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
              <span class="sr-only">View grid</span>
              <!-- Heroicon name: solid/view-grid -->
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button type="button" class="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden">
              <span class="sr-only">Filters</span>
              <!-- Heroicon name: solid/filter -->
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
  
        <section aria-labelledby="products-heading" class="pt-6 pb-24">
          <h2 id="products-heading" class="sr-only">Products</h2>
  
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            <!-- Filters -->
            <form class="hidden lg:block">
              <h3 class="sr-only">Categories</h3>
              <ul role="list" class="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                <li>
                  <a href="#"> Totes </a>
                </li>
  
                <li>
                  <a href="#"> Backpacks </a>
                </li>
  
                <li>
                  <a href="#"> Travel Bags </a>
                </li>
  
                <li>
                  <a href="#"> Hip Bags </a>
                </li>
  
                <li>
                  <a href="#"> Laptop Sleeves </a>
                </li>
              </ul>
  
              <div class="border-b border-gray-200 py-6">
                <h3 class="-my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button type="button" class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span class="font-medium text-gray-900"> Color </span>
                    <span class="ml-6 flex items-center">
                      <!--
                        Expand icon, show/hide based on section open state.
  
                        Heroicon name: solid/plus-sm
                      -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                      </svg>
                      <!--
                        Collapse icon, show/hide based on section open state.
  
                        Heroicon name: solid/minus-sm
                      -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-0">
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <input id="filter-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-color-0" class="ml-3 text-sm text-gray-600"> White </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-color-1" class="ml-3 text-sm text-gray-600"> Beige </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-color-2" class="ml-3 text-sm text-gray-600"> Blue </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-color-3" class="ml-3 text-sm text-gray-600"> Brown </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-color-4" name="color[]" value="green" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-color-4" class="ml-3 text-sm text-gray-600"> Green </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-color-5" name="color[]" value="purple" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-color-5" class="ml-3 text-sm text-gray-600"> Purple </label>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="border-b border-gray-200 py-6">
                <h3 class="-my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button type="button" class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                    <span class="font-medium text-gray-900"> Category </span>
                    <span class="ml-6 flex items-center">
                      <!--
                        Expand icon, show/hide based on section open state.
  
                        Heroicon name: solid/plus-sm
                      -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                      </svg>
                      <!--
                        Collapse icon, show/hide based on section open state.
  
                        Heroicon name: solid/minus-sm
                      -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-1">
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-category-0" class="ml-3 text-sm text-gray-600"> New Arrivals </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-category-1" class="ml-3 text-sm text-gray-600"> Sale </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-category-2" class="ml-3 text-sm text-gray-600"> Travel </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-category-3" class="ml-3 text-sm text-gray-600"> Organization </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-category-4" class="ml-3 text-sm text-gray-600"> Accessories </label>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="border-b border-gray-200 py-6">
                <h3 class="-my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button type="button" class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span class="font-medium text-gray-900"> Size </span>
                    <span class="ml-6 flex items-center">
                      <!--
                        Expand icon, show/hide based on section open state.
  
                        Heroicon name: solid/plus-sm
                      -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                      </svg>
                      <!--
                        Collapse icon, show/hide based on section open state.
  
                        Heroicon name: solid/minus-sm
                      -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-2">
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <input id="filter-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-size-0" class="ml-3 text-sm text-gray-600"> 2L </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-size-1" class="ml-3 text-sm text-gray-600"> 6L </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-size-2" class="ml-3 text-sm text-gray-600"> 12L </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-size-3" class="ml-3 text-sm text-gray-600"> 18L </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-size-4" name="size[]" value="20l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-size-4" class="ml-3 text-sm text-gray-600"> 20L </label>
                    </div>
  
                    <div class="flex items-center">
                      <input id="filter-size-5" name="size[]" value="40l" type="checkbox" checked class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-size-5" class="ml-3 text-sm text-gray-600"> 40L </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
  
            <!-- Product grid -->
            <div class="lg:col-span-3">
              <!-- Replace with your content -->
              <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
                <div class="grid grid-cols-3 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    ${data.map((product) => /*html*/`
      
                      <div class="product">
                        <div class="item">
                        <a href="/newsjs/${product.id}" >
                            <img src="${product.img}"width="280" height="370"/>
                        <a>
                        
                        </div>
                        <div class="overlay">
                          <div class="title-price text-black">
                            <a href="/newsjs/${product.id}" class="text-xl">${product.title}</a><br>
                            <span class="py-3 text-xl text-red-600 text-center ">${product.price}</span><br>
                            <span class="pt-3 font-light line-through text-black">200.000đ</span><br>
                           
                        </div>
      
                      </div>
                      `).join("")} 
                    </div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>

        
        </div>`;
    },
};
export default Newsjs;