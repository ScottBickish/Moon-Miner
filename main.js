let currentClickCount = 100
let newupgrade1 = 0
let upgrade1 = {
    price: 50,
    multiplier: 2
}
let upgrade2 = {
    price: 500,
    multiplier: 50
}

//2. make variables for individual upgrades, their prices, and their multipliers. done for now
//3. upgrades should effect mining count dynamically. we can do this in our mine function by accessing multipilers and quantity of items.

function mine(){
    currentClickCount++
    document.getElementById('clicks').innerText = `current clicks are ${currentClickCount}`
    
}
function click1(){
    if(currentClickCount > 50){
        (currentClickCount + 2)
        currentClickCount -= upgrade1.price
    }
    
    update()
    
}
function update(){
    document.getElementById('upgrade1').innertext = `click +1 is ${newupgrade1 + 1}`
}


// 1. make update function that condenses all get elems by id, call this function whenever we want to see a change on the page
