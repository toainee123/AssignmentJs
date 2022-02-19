const Header = {
    render() {
        return /* html */ ` 
        <div class="header">
            <nav class="bg-white py-2 md:py-4">
                <div class="container px-4 mx-auto md:flex md:items-center">
                    <div class="flex justify-between items-center">
                        <a href="/" class="font-bold text-xl text-indigo-600">Men's Shop</a>
                        <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                    <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <a href="/" class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
                        <a href="/product" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Product</a>
                        <a href="/contact" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</a>
                        <a href="/product" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Blog</a>
                        <a href="/signin" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
                        <a href="/signup" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
                    </div>
                </div>
            </nav>
        </div>
        <div class="banner ">
            <img src="https://picsum.photos/1700/500"/>
        </div>
            
        `;
    },
};
export default Header;