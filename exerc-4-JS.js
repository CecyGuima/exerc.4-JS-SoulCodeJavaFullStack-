const btn = document.getElementById("btn")
const img1 = document.getElementById("img")

btn.addEventListener('click', () => {

    console.log(btn)
    if (btn.innerText === "Acender") {
        btn.innerText = "Apagar"
        img1.src = "Img/lampada-acesa.png"
    } else {        
        btn.innerText = "Acender"
        img1.src = "Img/lampada-apagada.png"
    }
})