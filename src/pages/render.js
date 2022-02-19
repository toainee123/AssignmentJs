export const Render = async (component, domEle) =>{
    if(component){
        document.querySelector(domEle).innerHTML = await component.render();
    } 
    if(component.afterRender) await component.afterRender();
}