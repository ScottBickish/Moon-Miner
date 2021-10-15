let currentClickCount = 99
let totalmultiplier = 1
let upgrade1 = {
    price: 50,
    multiplier: 1,
    qty: 0,
}
let upgrade2 = {
    price: 500,
    multiplier: 50,
    qty: 0,
}

//2. make variables for individual upgrades, their prices, and their multipliers. done for now
//3. upgrades should effect mining count dynamically. we can do this in our mine function by accessing multipilers and quantity of items.

function mine(){
    currentClickCount += totalmultiplier
    document.getElementById('clicks').innerText = `current clicks are ${currentClickCount}`
    
}
function click1(){
    if(currentClickCount >= upgrade1.price){
       totalmultiplier += upgrade1.multiplier
        currentClickCount -= upgrade1.price
        upgrade1.qty++
        upgrade1.price += 50
        console.log(upgrade1.price)
    }
    
    update()
    
}

function update(){
    document.getElementById('upgrade1').innerText = `click +1 is ${upgrade1.qty}`
    document.getElementById('c1-price').innerText = `cost: ${upgrade1.price}`

}


// 1. make update function that condenses all get elems by id, call this function whenever we want to see a change on the page
