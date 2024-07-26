let btn = document.getElementById("btn");
    let cont = document.querySelector(".container");
    let code =  document.getElementById("color-code");
const getColor = () => {
    const  randomNum = Math.floor(Math.random() * 16777215);
    const colorCode = '#' + randomNum.toString(16); 
    document.body.style.backgroundColor = colorCode

btn.addEventListener("click" , () =>{
  code.innerHTML = colorCode;
})
}
getColor()
document.getElementById('btn').addEventListener("click" ,getColor)
