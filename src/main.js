import Navigo from "navigo";
import Homepage from "../pages/homepage";
import About from "../pages/About";
import product from "../pages/product";



const router = new Navigo('/',{linksSelector:'a'});
const print = (content) => {
    document.getElementById("app").innerHTML = content;
}
router.on({
    "/": () => {
        print(Homepage.render());
    },
    "/About": () => {
        print(About.render())
    },
    "/product":() => {
        print(product.render())
    }
})

router.resolve()
router.notFound(()=> console.log('Not Found Page'))
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
