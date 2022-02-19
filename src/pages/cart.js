import { plusQty, minumQty, removeProduct } from "./logicCart";
import { Render } from "./render";
import Header from "../component/header";
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
            <table class="table-auto">
            <thead>
              <tr>
                <th scope="col">#</th>
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
                        <td>data chua co gia</td>
                        <td>
                            <button data-id="${item.id}" class="btn btn-minium">-</button/>
                            <input type="number" value="${item.quantity}" id="quantity" />
                            <button data-id="${item.id}" class="btn btn-plus">+</button/>
                        </td>
                        <td>gia * quantity</td>
                        <td><button data-id="${item.id}" class="btn">Xoa</button></td>
                    </tr>
                
                `).join("")}  
              
            </tbody>
          </table>
            
            
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