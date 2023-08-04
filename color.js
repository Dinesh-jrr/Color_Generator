// const getColor=()=>{
//    const randomNumber=Math.random();
//    console.log(randomNumber);
// }
function getColor(){
    const randomNumber=Math.floor(Math.random() * 16777215) ;
    const randomCode= "#"+randomNumber.toString(16);
    console.log(randomCode);
    console.log(randomNumber);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerHTML=randomCode;

}
//event call
document.getElementById("btn").addEventListener("click",getColor);
getColor()

