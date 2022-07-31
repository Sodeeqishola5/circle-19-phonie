const number = document.querySelector('#number')
const networkImg = document.getElementById("netImg")

const identifier = {
    "MTN": ["0703", "0704", "0706", "0706", "0806", "0810", "0813", "0814", "0816", "0903", "0906", "0913", "0916"],
    "AIRTEL": ["0701", "0708", "0802", "0808", "0812", "0901", "0902", "0904", "0907", "0912"],
    "GLO": ["0705", "0805", "0807", "0811", "0815", "0905", "0915",],
    "9MOBILE": ["0809", "0817", "0818", "0909", "0908"]
}

function myFunction(){
    var x = document.getElementById("number").value;
    const networkValue = x.slice(0,4)

    for(let mobile in identifier) {
        for(let number of identifier[mobile]) {
            console.log(mobile)
            if(networkValue === number && mobile === "MTN") {
                networkImg.src ="./images/mtn.png"
            }
            else if(networkValue === number && mobile === "GLO"){
                networkImg.src ="./images/Glo_logo.png"
            }
            else if(networkValue === number && mobile === "AIRTEL"){
                networkImg.src ="./images/Airtel_logo.png"
            }
            else if(networkValue === number && mobile === "9MOBILE"){
                networkImg.src ="./images/9mobile.png"
            }
        }
    }
}
function clearButton(){
    document.getElementById("number").value = ""
}