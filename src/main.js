let shop = document.getElementById("shop");

/*let shopItemsData = [
{
    id: "item1",
    name: "Casual Shirt",
    price: 200,
    desc: "lorem ipsum dolor sit amet consectetur adipisicing",
    img: "images/img-1.jpg"
}, 
{
    id: "item2",
    name: "Casual Shirt",
    price: 150,
    desc: "lorem ipsum dolor sit amet consectetur adipisicing",
    img: "images/img-2.jpg"
}, 
{
    id: "item3",
    name: "Men's Shirt",
    price: 75,
    desc: "lorem ipsum dolor sit amet consectetur adipisicing",
    img: "images/img-3.jpg"
}, 
{
    id: "item4",
    name: "Men's Suit",
    price: 175,
    desc: "lorem ipsum dolor sit amet consectetur adipisicing",
    img: "images/img-4.jpg"
}
]*/

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () =>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
    let{id, name, price, desc, img} = x;
    let search = basket.find((x) => x.id === id) || [];
    return `
    <div id = product-id-${id}  class = "item">
    <img width="220" height="250" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>₱ ${price}</h2>
                <div class="buttons">




                    <i onclick="decrement(${id})" class="bi bi-dash-square-fill"></i>
                    <div id=${id} class="quantity">${search.item  === undefined? 0:  search.item}</div>
                    <i onclick="increment(${id})" class="bi bi-plus-square-fill"></i>





                </div>
            </div>
        </div>
    </div>
    `;
}).join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    }
    else {
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));

    //console.log(basket);
    update(selectedItem.id);
}
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)

    if(search === undefined) return;

    else if(search.item === 0){
        return;
    }
    else {
        search.item -= 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));

    update(selectedItem.id);

    basket = basket.filter((x) => x.item !== 0);

    //console.log(basket);
    
    localStorage.setItem("data", JSON.stringify(basket));

}
let update = (id) => {
    let search = basket.find((x) => x.id === id); 
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
}

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y, 0);
}

calculation();









































/*

//.reduce fucntion
prices = [5, 10 ,15, 20, 25];
total = prices.reduce(sum);
console.log(`$ ${total}`);
function sum(previous, next){
    return previous + next;
}

let numbers = [1, 2, 3, 4, 5];
let summa = 0;

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
    array[index]  = element * 2;
}

function display(element) {
    console.log(element);
}*/













