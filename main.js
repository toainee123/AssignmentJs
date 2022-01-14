import Navigo from "navigo";
import Homepage from "./pages/homepage";
import NewDetail from "./pages/detailNews";
// import Header from "./component/header";
// import footer from "./component/footer";
import signIn from "./pages/sign_in";
import signUp from "./pages/sign_up";
import dashBoard from "./pages/admin/Dashboard";
import adminNews from "./pages/admin/News";
import adminAddnews from "./pages/admin/News/Adminaddnews";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    // document.getElementById("Header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    // document.getElementById("footer").innerHTML = footer.render();
};
router.on({
    "/": () => {
        print(Homepage.render());
    },
    "/newsjs/:id": ({ data }) => {
        const { id } = data;
        print(NewDetail.render(id));
    },
    "/sign_in": () => {
        print(signIn.render());
    },
    "/signUp": () => {
        print(signUp.render());
    },
    "/admin/dashboard": () => {
        print(dashBoard.render());
    },
    "/admin/news": () => {
        print(adminNews.render());
    },
    "/admin/news/add": () => {
        print(adminAddnews.render());
    },
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