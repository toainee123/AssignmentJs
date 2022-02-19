import Navigo from "navigo";
import Homepage from "./pages/homepage";
import NewDetail from "./pages/detailNews";
// import Header from "./component/header";
import footer from "./component/footer";
import signIn from "./pages/sign_in";
import signUp from "./pages/sign_up";
import dashBoard from "./pages/admin/Dashboard";
import adminNews from "./pages/admin/News";
import adminAddnews from "./pages/admin/News/Adminaddnews";
import newUpdate from "./pages/admin/updateNew";
import contact from "./pages/contact";
import product from "./pages/product";
const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    // document.getElementById("Header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) {
        content.afterRender();
    }
    // document.getElementById("footer").innerHTML = footer.render();
};
router.on({
    "/": () => {
        print(Homepage);
    },
    "/newsjs/:id": ({ data }) => {
        const { id } = data;
        print(NewDetail, id);
    },
    "/signin": () => {
        print(signIn);
    },
    "/signup": () => {
        print(signUp);
    },
    "/admin/dashboard": () => {
        print(dashBoard);
    },
    "/admin/news": () => {
        print(adminNews);
    },
    "/admin/news/add": () => {
        print(adminAddnews);
    },
    "/update/:id": ({data}) => {
        print(newUpdate, data.id)
        // console.log(data);
    },
    "/contact": () => {
        print(contact)
    },
    "/product": () => {
        print(product)
    }
});
router.resolve();
// router.notFound(()=> console.log('Not Found Page'))
// class Khuonbanh {
//     constructor(luongDuong,luongBot){
//         this.duong = luongDuong;
//         this.bot = luongBot;
//     }
//     showInfo(){
//         console.log(`
//             lượng đường: ${this.duong}
//             lượng bột: ${this.bot}
//         `)
//     }
// }
// const banhDeo = new Khuonbanh(10,20);
// banhDeo.showInfo();
// console.log(banhDeo.bot);