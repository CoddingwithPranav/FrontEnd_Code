hackerSent = ["Initilizing hack Program.....", "hacking User id...","Scanning:", "User found.....", "Connecting to id... ","Users personal data donwloading .....","creating new data.....", "Attacking with firebase.....", "control achived....."]

timer = null
index = 0;
const dislpay =()=>{
    return new Promise((reslove,reject)=>{
         let div = document.createElement("div")
         div.innerHTML = hackerSent[index]
         div.setAttribute("id","div")
         if(index==hackerSent.length -1){
            let lastDiv = document.querySelector(".div2")
            lastDiv.removeAttribute('hidden')
            clearInterval(timer)
         }
         else{
            index++
         }
         document.body.appendChild(div)

    })
}
timer = setInterval(dislpay, 3000)