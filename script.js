// going to name all the variables here

const inpBill = document.querySelector('.money')
const butt = document.querySelectorAll('.num')
const inpPpl = document.querySelector('.people')
const tip = document.querySelector('.tip')
const total = document.querySelector('.total')

//when button pressed need to console log it

//okay, so i need it like when i press the button, it needs to take the bill, tip % and number of people and calculate that and put that into that interface. 

for (let item of butt) {
    item.addEventListener(('click'), () => {
        const ans = parseInt(inpBill.value) * (parseInt(item.innerHTML)/100)
        tip.textContent = ans
        total.textContent = ans * parseInt(inpPpl.value)
    })
}
