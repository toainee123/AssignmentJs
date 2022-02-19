import Newsjs from "./newjs";
import Header from "../component/header";
import footer from "../component/footer";
const Homepage = {
    async render() {
        return /* html */ `
            <header>
                ${Header.render()}
            </header>
            <main>
                <div class="news">
                    ${await Newsjs.render()}
                </div>
            </main>
            <div id="footer">
                ${footer.render()}
            </div>
            
        `;
    },
};
export default Homepage;