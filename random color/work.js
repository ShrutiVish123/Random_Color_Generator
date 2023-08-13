const getColor = () =>{
    const randomnumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#" + randomnumber.toString(16);
    document.body.style.backgroundColor = randomCode
    // console.log(randomnumber,randomCode)
    document.getElementById("color-code").innerText = randomCode

    navigator.clipboard.writeText(randomCode)
}
/* number is taken because we want a random number become hexa dec number
math.floor is used for dec number as alowest int number*/

//event call
document.getElementById("btn").addEventListener("click",
getColor
)
//inital call//
getColor();