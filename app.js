const button = document.getElementById("btn")
const body = document.querySelector("body")
const card = document.getElementById("carta")
const text = document.getElementById("carta")

let toogle = true;


const colorOscuro = () => {
    toogle = !toogle;

    if(toogle){
        card.style.boxShadow = "10px 20px 40px rgb(38, 186, 149)";
        body.style.backgroundColor = "rgb(38, 186, 149)";
        text.style.color = '#222';
        card.style.backgroundColor = '#fff'
    } else {
        body.style.backgroundColor = "#222";
        card.style.boxShadow = "10px 20px 40px rgb(38, 186, 149)";
        text.style.color = "#fff";
        card.style.backgroundColor = '#5f5f5f' 

    }
}

button.addEventListener("click", colorOscuro)