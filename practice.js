onev(15)

function onev(num) {
  let username = "shreyash"
  console.log(this.username)
  return num + 1
}

let username = "Shrey";


const iam = () => {
  console.log(this)
}
iam()

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// const addTwo = (num1, num2) => ({username:"Shreyash"})

// console.log(addTwo(25,5))
const buttons = document.querySelectorAll('.container button');
console.log(typeof buttons);

const body = document.querySelector("body")

// const changeText = function() {
//   console.log("change text")
//   document.querySelector('h1').innerHTML = "best js series"
// }

// const changeMe = setTimeout(changeText, 2000);



buttons.forEach(function(button){
  button.addEventListener("click",function(e){
    // clearTimeout(changeMe)
    console.log(e.timeStamp)
    console.log(e.target.tagName)
    body.style.backgroundColor = e.target.id
  })
})



const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}


let intervalId;
console.log("name",randomColor(), intervalId)

document.querySelector("#Start").
addEventListener('click',function(){
  console.log("Start")
  function changeBg(){
    document.body.style.backgroundColor = randomColor()
  }
  if (!intervalId){ 
     intervalId = setInterval(changeBg ,1000)
  }
})

document.querySelector("#Stop").
addEventListener('click',function(e){
  clearInterval(intervalId)
  intervalId = null;
  console.log("Stop")
})
// const obj = {
//   // Normal Function
//   regularMethod: function() {
//       console.log("Regular method:", this);
//   },

//   // Arrow Function
//   arrowMethod: () => {
//       console.log("Arrow method:", this); // 'this' is determined by the enclosing scope
//   }
// };

// obj.regularMethod(); // Output: Regular method: { regularMethod: [Function], arrowMethod: [Function] }
// obj.arrowMethod();   // Output: Arrow method: Window (or global object in non-strict mode)
