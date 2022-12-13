/* //Selector de todos los botones y creación de array, varaibles globales
const Clickbutton=document.querySelectorAll(".btn");
const tbody=document.querySelector("tbody");
let carrito=[]

console.log(Clickbutton);
// Declaración de busqueda de botones "tomar cada bt+on"
Clickbutton.forEach(boton=>{
    boton.addEventListener("click", addCarritoItem)
})
// creación de función que me extrae cada elementos de mi producto
function addCarritoItem(e){
    const button=e.target
    const item=button.closest(".card");
    const itemTitle=item.querySelector(".card-title").textContent;
    const itemPrice=item.querySelector(".text-danger").textContent;
    const itemImg=item.querySelector(".card-img-top").src;
    //Objeto que guarda cada elemento de mi producto
    const newItem={
        title:itemTitle,
        precio:itemPrice,
        image:itemImg,
        cantidad:1
    }

    addCarrito(newItem);
}

//cargo de elementos a mi un función de añadir

function addCarrito(newItem) {

    const InputElemento=tbody.getElementsByClassName("input__elemento");

 for(let i=0; i<carrito.length;i++){
    if(carrito[i].title.trim()===newItem.title.trim()){
        carrito[i].cantidad++;
        const inputValue=InputElemento[i];
        
        console.log(carrito);

        return null;
    }

}
    carrito.push(newItem);
    renderCarrito();
    
}
//hago render con carrito.html
function renderCarrito() {
    tbody.innerHTML="";
    carrito.map(item=>{
        const tr=document.createElement("tr");
        tr.classList.add("ItemCarrito");
        const Content=`
      
                    <th scope="row">1</th>
                    <td class="table__productos">
                        <img src=${item.image} alt="">
                        <h6 class="title">${item.title}</h6>
                    </td>
                    <td class="table__price>
                        <p>${item.precio}</p>
                    </td>
                    <td class="table__cantidad">
                        <input type="number" min="1" value=${item.cantidad} class="input___elemento">
                        <button class="delete btn btn-danger">x</button>
                    </td>
                  
                  `
                  tr.innerHTML=Content;
                  tbody.append(tr);
    })
} */

/* //Cart

let cartIcon=document.querySelector("#cart-icon");
let cart=document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");

//open cart
cartIcon.onclick=()=>{
    cart.classList.add("active");
};
// close cart
closeCart.onclick=()=>{
    cart.classList.remove("active");
};

//Cart Working JS

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

//Making Function

function ready(){
    //Remove items from cart
    var removeCartButtons=document.querySelector(".cart-remove");
    console.log(removeCartButtons);
    for(var i=0; i < removeCartButtons.length; i++){
    var button= removeCartButtons[i];
    button.addEventListener("click",removeCartItem);
    }
}

//contar items

var quantityInput=document.getElementsByClassName("cart-quantity");
for(var i=0; i < quantityInput.length; i++){
    var input=quantityInput[i];
    input.addEventListener("change",quantityChange);

}


//Añadir producto

var addCart=documento
function removeCartItem(event){
    var buttonClicked= event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function quantityChange(event){
    var input=event.target;
    if(NaN(input.value)|| input.value<=0){
        input.value=1;
        
    }
}



function updateTotal(){
    var cartContent=document.getElementsByClassName("cart-content")[0];
    var cartBoxes=document.getElementsByClassName("cart-box");
    var total=0;
    for(var i=0; i < cartBoxes.length; i++){
       var cartBox=cartBoxes[i];
       var priceElement=cartBox.getElementsByClassName("cart-price")[0];
       var quantityElement=cartBox.getElementsByClassName("cart-quantity")[0];
       var price= parseFloat(priceElement.innerText.replace("$", ""));
       var quantity=quantityElement.value;
       total= total + (price*quantity);

       document.getElementsByClassName("total-price")[0].innerText="$"+total;
    }
}
 */

//Función Cart-intento 3
const $btn=document.querySelectorAll(".btn-outline-secondary");
let cartIcon=document.querySelector("#cart-icon");
let cart=document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");
const $form=document.getElementById("form");


//open cart
cartIcon.onclick=()=>{
    cart.classList.add("active");
};
// close cart
closeCart.onclick=()=>{
    cart.classList.remove("active");
};

//

$btn.forEach(($btn) => {
    $btn.addEventListener("click",() => {
        myfuntion();

    });
});

function myfuntion(){
    alert("Vaya por favor al botón de compras --->")
}

/* $form.addEventListener("submit",handleSumbit);

function handleSumbit(event){
    event.preventDefault();
    const name=$form.name.value;
    const email=$form.email.value;
    
} */




//funtions

/* loadEventListener();
function loadEventListener(){
    allContainerCart.addEventListener("click",addProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains("")) {
        
    }

    console.log(e.target)
}
 */


