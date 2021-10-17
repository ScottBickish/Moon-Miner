let currentClickCount = 0
let totalmultiplier = 1
let totalIdlePower = 0

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
let upgrade3 = {
    price: 2500,
    multiplier: 100,
    qty: 0,
}
let upgrade4 = {
    price: 10000,
    multiplier: 250,
    qty: 0,
}
function evaluate(){
 if(currentClickCount < upgrade1.price){
            document.getElementById('test1').disabled = true;
        }else if(currentClickCount >= upgrade1.price){ document.getElementById('test1').disabled = false;}
        if(currentClickCount < upgrade2.price){
            document.getElementById('test2').disabled = true;
        }else if(currentClickCount >= upgrade2.price){ document.getElementById('test2').disabled = false;}
        if(currentClickCount < upgrade3.price){
            document.getElementById('test3').disabled = true;
        }else if(currentClickCount >= upgrade3.price){ document.getElementById('test3').disabled = false;}
        if(currentClickCount < upgrade4.price){
            document.getElementById('test4').disabled = true;
        }else if(currentClickCount >= upgrade4.price){ document.getElementById('test4').disabled = false;}
        if(currentClickCount < upgrade1.price){
            document.getElementById('test1').classList.remove('effect')
        }else if(currentClickCount >= upgrade1.price){
            document.getElementById('test1').classList.add('effect')
        }
        if(currentClickCount < upgrade2.price){
            document.getElementById('test2').classList.remove('effect')
        }else if(currentClickCount >= upgrade2.price){
            document.getElementById('test2').classList.add('effect')
        }
        if(currentClickCount < upgrade3.price){
            document.getElementById('test3').classList.remove('effect')
        }else if(currentClickCount >= upgrade3.price){
            document.getElementById('test3').classList.add('effect')
        }
        if(currentClickCount < upgrade4.price){
            document.getElementById('test4').classList.remove('effect')
        }else if(currentClickCount >= upgrade4.price){
            document.getElementById('test4').classList.add('effect')
        }
}
evaluate()


function mine(){
    currentClickCount += totalmultiplier
    document.getElementById('clicks').innerText = `Current clicks are ${currentClickCount}`
   evaluate()
        
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
    document.getElementById('upgrade1').innerText = `Cheese knives purchased ${upgrade1.qty}`
    document.getElementById('c1-price').innerText = `Cost: ${upgrade1.price}`
    document.getElementById('click-tally').innerText = `Total click power is ${totalmultiplier}`
    document.getElementById('clicks').innerText = `Current clicks are ${currentClickCount}`
    evaluate()
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
    document.getElementById('upgrade2').innerText = `Cheese wheels purchased ${upgrade2.qty}`
    document.getElementById('c2-price').innerText = `Cost: ${upgrade2.price}`
    document.getElementById('click-tally').innerText = `Total click power is ${totalmultiplier}`
    document.getElementById('clicks').innerText = `Current clicks are ${currentClickCount}`
    evaluate()
}

function click3(){
    if(currentClickCount >= upgrade3.price){
        currentClickCount -= upgrade3.price
         upgrade3.qty++
         upgrade3.price += upgrade3.price
         totalIdlePower += upgrade3.multiplier
        
       update3()
             setInterval(() => {
         currentClickCount += upgrade3.multiplier;
          update3()
    }, 3000);
        
          }
          
    }
function update3(){
    document.getElementById('upgrade3').innerText = `Idle rookie is ${upgrade3.qty}`
    document.getElementById('c3-price').innerText = `Cost: ${upgrade3.price}`
    document.getElementById('click-tally').innerText = `Total click power is ${totalmultiplier}`
    document.getElementById('clicks').innerText = `Current clicks are ${currentClickCount}`
    document.getElementById('idle-tally').innerText = `Total idle power is ${totalIdlePower}`
    evaluate()
}

function click4(){
    if(currentClickCount >= upgrade4.price){
        currentClickCount -= upgrade4.price
         upgrade4.qty++
         upgrade4.price += upgrade4.price
         totalIdlePower += upgrade4.multiplier
         
         update4()
             setInterval(() => {
                  currentClickCount += upgrade4.multiplier;
                   update4()
             }, 3000);
         
    }
         
}
function update4(){
    document.getElementById('upgrade4').innerText = `Idle boss is ${upgrade4.qty}`
    document.getElementById('c4-price').innerText = `Cost: ${upgrade4.price}`
    document.getElementById('click-tally').innerText = `Total click power is ${totalmultiplier}`
    document.getElementById('clicks').innerText = `Current clicks are ${currentClickCount}`
    document.getElementById('idle-tally').innerText = `Total idle power is ${totalIdlePower}`
    evaluate()
}

function easteregg(){
currentClickCount += 100000
updateunknown()
}
function updateunknown(){
    document.getElementById('clicks').innerText = `Current clicks are ${currentClickCount}`
    evaluate()
}



