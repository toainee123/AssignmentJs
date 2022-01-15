const Header = {
    render() {
        return /* html */ ` 
            <div class="bg-blue-900 py-4">
                <a href="" class="bg-blue-900 py-4">
                    <img src="https://ap.poly.edu.vn/images/logo.png" alt="" class="mx-auto mt-2 ">
                </a>
            </div>
            <div class="  py-2 bg-red-500">
                <nav>
                    <ul class="flex">
                        <li class=" pl-10 text-white text-lg "><a class=" link_item hover:text-blue-900" href="/">Home</a></li>

                        <li class=" pl-10 text-white text-lg "><a class="link_item hover:text-blue-900" href="/about">About </a>
                        </li>

                        <li class=" pl-10 text-white text-lg "><a class="link_item hover:text-blue-900" href="/product">Product</a>
                        </li>

                        <li class=" pl-10 text-white text-lg "><a class="link_item hover:text-blue-900" href="/signUp">Đăng kí</a>
                        </li>

                        <li class=" pl-10 text-white text-lg "><a class="link_item hover:text-blue-900" href="/sign_in">Đăng nhập</a></li>
                        <li class=" pl-10 text-white text-lg "><a class="link_item hover:text-blue-900" href="/admin/dashboard">Dashboard</a></li>
                    </ul>
                </nav>
            </div>
            
        `;
    },
};
export default Header;