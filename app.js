function sohail(){
    let time = new Date()
    document.getElementById("time").innerHTML = time.toLocaleTimeString()

}
setInterval(sohail,1000)

function akhtar(){
    let date = new Date()
    document.getElementById("date").innerHTML = date.toLocaleDateString()

}
setInterval(akhtar,1000)


function first(){
    let price = +document.getElementById("price").value
    let rate = +document.getElementById("rate").value
    let mi = +document.getElementById("inst").value

    if(price=="" || rate=="" || mi==""){
        alert("plase fill out all value")
    }
    else{
        let ia = price/100*rate
        document.getElementById("in").innerHTML = ia
        let tp = ia + price
        document.getElementById("tp").innerHTML = tp
        let min = tp / mi
        document.getElementById("mi").innerHTML = min
    }
}