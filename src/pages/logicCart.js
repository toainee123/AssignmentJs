let cart = [];
if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"));
}
// add san pham 
export const addCart = (product, next) =>{
    // existPro tim kiem de lay gtri id === nhau
    const existProduct = cart.find(item => item.id === product.id);
    // neu k co gtri id trung nhau thi add vao
    if(!existProduct){
        cart.push(product)
    }else{  //neu co gtri id trung nhau thi +1 quantity
        existProduct.quantity += product.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart)); //add vao localStorage
    next(); //next la ham thuc thi cau lenh thong bao sau khi add xong sp
}

export const plusQty = (id, next) => {
    cart.find(item => item.id === id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
}

export const minumQty = (id, next) =>{
    const saveCart = cart.find(item => item.id === id);
    saveCart.quantity--;
    if(saveCart.quantity < 1){
        const confirm = window.confirm("Ban co xoa san pham");
        if(confirm){
            cart = cart.filter(item => item.id !== id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
}

export const removeProduct = (id, next) =>{
    const confirm = window.confirm("Ban muon xoa san pham");
    if(confirm){
        cart = cart.filter(item => item.id !== id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
}