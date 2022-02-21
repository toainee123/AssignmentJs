import Header from "../component/header";
import footer from "../component/footer";
import { get } from "../api/posts";
import { addCart } from "./logicCart";
const NewDetail = {
    async render(id) {
        const {data} = await get(id);
        return /* html */ `
            <header>${Header.render()}</header>
                <div class=" text-indigo-200 md:text-center py-2 px-4">
              <div class="py-10 ">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                  <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 px-4">
                      <div x-data="{ image: 1 }" x-cloak>
                        <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                          <img src="${data.img}">
                        </div>
                        <div class="flex -mx-2 mb-4">
                          <template x-for="i in 4">
                            <div class="flex-1 px-2">
                              <button x-on:click="image = i" :class="{ 'ring-2 ring-indigo-300 ring-inset': image === i }" class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                                <span x-text="i" class="text-2xl"></span>
                              </button>
                            </div>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="md:flex-1 px-4">
                      <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">${data.title}</h2>
                      
              
                      <div class="flex items-center space-x-4 my-4">
                        <div>
                          <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                            <span class="font-bold text-indigo-600 text-3xl">${data.price}</span>
                          </div>
                        </div>

                      </div>
              
                      <p class="text-gray-500">${data.desc}</p>
              
                      <div class="flex py-4 space-x-4">
                        <input type="hidden" value="1" id="quantity" />
                        <button type="button" class="btnAddCart h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
            <footer class="mt-16">${footer.render()}</footer>
        `;
        // console.log(result);
    },
    afterRender(id){
     const btnAddCart =  document.querySelector(".btnAddCart");
     btnAddCart.addEventListener('click',async (e) =>{
        e.preventDefault();
        const {data} = await get(id);
        // ...data: copy data va them key quantity vs gtri mac dinh = 1
        addCart({...data, quantity: +document.querySelector("#quantity").value}, ()=>{
          alert("Them sp vao gio hang");
        })
      // console.log(addCart);
     })
    }
};
export default NewDetail;