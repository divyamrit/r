const randElements = document.querySelectorAll(".A")
const randomNumber = Math.floor(Math.random()*10)
const randomIndex = randomNumber + 1

function colorIndex(){
    document.querySelector('body').style.background = "#CCFBF1";
    document.querySelectorAll('section article').forEach((Ele)=>Ele.style.background = "#14B8A6")
    randElements[randomIndex-1].style.background = "#FFF";
    randElements[randomIndex-1].style.color = "#FF0060";
}

randElements.forEach(function(randEle) {randEle.innerText === `${randomIndex}` ? randEle.addEventListener('click',colorIndex): randEle.addEventListener('click',()=>{randElements[parseInt(randEle.innerText)-1].style.color="#134E4A"})})