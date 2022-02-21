import { plusQty, minumQty, removeProduct } from "./logicCart";
import { Render } from "./render";
import Header from "../component/header";
import footer from "../component/footer";
const Cart = {
    render() {
        
        let cart = [];
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        if(localStorage.getItem("cart") === null){
            return /*html*/ `
                <p class="mx-auto text-center">Chua co san pham</p>
                `
        }else{
            return /*html*/ `
                ${Header.render()}
                <h1 class="text-3xl mt-2 text-center mb-5">Giỏ hàng</h1>
                <table class="mx-auto">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Ten san pham</th>
                        <th scope="col">Hinh anh</th>
                        <th scope="col">Gia tien</th>
                        <th scope="col">So luong</th>
                        <th scope="col">Tong tien</th>
                        <th scope="col">Xoa</th>
                    </tr>
                    </thead>
                <tbody>
                    ${cart.map((item, index) => /*html*/`
                        <tr>
                            <th scope="row">${index+1}</th>
                            <td>${item.title}</td>
                            <td width="150px"><img src="${item.img}" width="80%" /></td>
                            <td>${item.price}</td>
                            <td>
                                <button data-id="${item.id}" class="btn btn-minium">-</button/>
                                <input type="text" value="${item.quantity}" id="quantity" width="20%"/>
                                <button data-id="${item.id}" class="btn btn-plus">+</button/>
                            </td>
                            <td>${item.price * item.quantity}</td>
                            <td><button data-id="${item.id}" class="btn">Xoa</button></td>
                        </tr>
                    `).join("")}  
                </tbody>
            </table>
            ${footer.render()}
            `
           
        }
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach( (btn) => {
            const btnId = btn.dataset.id;
            btn.addEventListener("click", ()=>{
                if(btn.classList.contains("btn-plus")){
                    // console.log("plus");
                    plusQty(btnId, () => Render(Cart, "#app"));
                }else if(btn.classList.contains("btn-minium")){
                    minumQty(btnId, () => Render(Cart, "#app"));
                }else{
                    removeProduct(btnId, () => Render(Cart, "#app"));
                    alert("Xoa thanh cong");
                }
            })
        })


    }

}
export default Cart;