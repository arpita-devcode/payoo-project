document.getElementById("Add-money").addEventListener('click',function(){
    const number = 12345678910;
    const pin = 1234;
    const matchTheNumber = document.getElementById("mobile-number").value;
    const matchThePinNumber = document.getElementById("pin-number").value;
    const num = parseInt(matchTheNumber);
    const code = parseInt(matchThePinNumber);
    if(num==number && code==pin){
       window.location.href="./home.html";
    } 
    else{
        console.log("Invaild Credential");
    }
})