let adults = 25;
// statement for negative numbers
if (adults < 0) { 
adults = 0; 
}

let children = 0;
if (children < 0) { 
children = 0; 
}
let price;
price = calc(adults, children); //using the function calc to calculate the price
console.log(price);

// Loop for adults tickets
for(let i = 1; i <= adults; i++) {
    console.log("ticket #" + i)
}

//function to calculate and return the price
function calc (adults, children) {
return price = adults*12 + children*5;
}

//event handler
window.onload = function() {
    let btn = document.getElementById('som');
    btn.onclick = function() {
        let adults = document.getElementById('adults').value;
        let children = document.getElementById('children').value;
        let price = calc(adults, children)
        alert('your total is' + ' $' + price);
    }
}