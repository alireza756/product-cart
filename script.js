let card = [];
function add_card(){
    let product = {name : 'book' , price : 150000};
    card.push(product);
    let i = 1;
    while(i < card.length){
        document.getElementById('price').innerHTML = i * product.price;
        i++;
    }
}