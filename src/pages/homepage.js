import Newsjs from "./newjs";
import Header from "../component/header";

const Homepage = {
    render() {
        return /* html */ `
            <header>
                ${Header.render()}
            </header>
            <main>
                <div class="banner">
                    <img src="https://picsum.photos/1500/400"/>
                </div>
                <div class="news">
                    ${Newsjs.render()}
                </div>
            </main>
            <div id="footer">
                <p class="mb-0 text-black text-xl">Copy by Toaibvph</p>
            </div>
            
        `;
    },
};
export default Homepage;