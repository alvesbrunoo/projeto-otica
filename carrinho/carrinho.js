let price = 207.55;
let qty = 1;


function updateQty(type) {
if(type === 'minus' && qty > 1) qty--;
if(type === 'plus') qty++;
document.getElementById('qty').innerText = qty;
updateTotal();
}


function updateTotal() {
let total = price * qty;
document.getElementById('item-total').innerText = `R$ ${total.toFixed(2)}`;
document.getElementById('subtotal').innerText = `R$ ${total.toFixed(2)}`;
document.getElementById('total').innerText = `R$ ${total.toFixed(2)}`;
}


function clearCart() {
qty = 1;
updateTotal();
}


function applyCoupon() {
const code = document.getElementById('cupom').value.trim();
if(code === 'DESCONTO10'){
let newTotal = (price * qty) * 0.9;
document.getElementById('total').innerText = `R$ ${newTotal.toFixed(2)}`;
alert('Cupom aplicado: 10% OFF');
} else {
alert('Cupom inválido');
}
}