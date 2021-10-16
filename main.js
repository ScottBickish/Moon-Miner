let currentClickCount = 500
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



function mine(){
    currentClickCount += totalmultiplier
    document.getElementById('clicks').innerText = `current clicks are ${currentClickCount}`

    
}
function click1(){
    if(currentClickCount >= upgrade1.price){
       totalmultiplier += upgrade1.multiplier
        currentClickCount -= upgrade1.price
        upgrade1.qty++
        upgrade1.price += upgrade1.price
        
    }
    
    update()
    
}

function update(){
    document.getElementById('upgrade1').innerText = `click +1 is ${upgrade1.qty}`
    document.getElementById('c1-price').innerText = `cost: ${upgrade1.price}`
    document.getElementById('click-tally').innerText = `total click power is ${totalmultiplier}`
    document.getElementById('clicks').innerText = `current clicks are ${currentClickCount}`
}

function click2(){
    if(currentClickCount >= upgrade2.price){
        totalmultiplier += upgrade2.multiplier
         currentClickCount -= upgrade2.price
         upgrade2.qty++
         upgrade2.price += upgrade2.price
         
     }
     update2()
}
function update2(){
    document.getElementById('upgrade2').innerText = `click +50 is ${upgrade2.qty}`
    document.getElementById('c2-price').innerText = `cost: ${upgrade2.price}`
    document.getElementById('click-tally').innerText = `total click power is ${totalmultiplier}`
    document.getElementById('clicks').innerText = `current clicks are ${currentClickCount}`
}

