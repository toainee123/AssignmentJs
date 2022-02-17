const Header = {
    render() {
        return /* html */ ` 
            <div class="bg-blue-900 py-4">
                <a href="" class="bg-blue-900 py-4">
                    <img src="https://ap.poly.edu.vn/images/logo.png" alt="" class="mx-auto mt-2 ">
                </a>
            </div>
            <div class="py-2 bg-red-500">
                <nav class="flex justify-between">
                    <ul class="flex mt-2">
                        <li class=" pl-10 text-white text-lg "><a class=" link_item hover:text-blue-900" href="/">Home</a></li>

                        <li class=" pl-10 text-white text-lg "><a class="link_item hover:text-blue-900" href="/about">About </a>
                        </li>

                        <li class=" pl-10 text-white text-lg "><a class="link_item hover:text-blue-900" href="/product">Product</a>
                        </li>

                        <li class=" pl-10 text-white text-lg "><a class="link_item hover:text-blue-900" href="/signup">Đăng kí</a>
                        </li>

                        <li class=" pl-10 text-white text-lg "><a class="link_item hover:text-blue-900" href="/signin">Đăng nhập</a></li>
                        <li class=" pl-10 text-white text-lg "><a class="link_item hover:text-blue-900" href="/admin/dashboard">Dashboard</a></li>
                    </ul>
                    <div class="action flex">
                        <a href=""><i class="fa-solid fa-cart-arrow-down text-2xl mt-2 text-white mr-5"></i></a>
                        <div class="flex items-center justify-center mr-5">
                            <div class="flex border-1 border-gray-100  ">
                                <input type="text" class="px-4 py-2 w-30" placeholder="Search...">
                                <button class="px-2 text-white bg-black border-l ">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </nav>
            </div>
            
        `;
    },
};
export default Header;