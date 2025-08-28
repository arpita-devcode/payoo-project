document
  .getElementById("button_clicked")
  .addEventListener("click", function () {
    const bank = getinputvalue("bank");
    const accountNumber = getinputvalue("bank-number");
    const pinNumber = getinputvalue("add-pin-number");
    const addAmount = getinputbyid("Add-amount");
    const valid_pin = 1234;
    const addamountNumber = getinputinnertext("Add-number");
    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }

    if (pinNumber != valid_pin) {
      alert("please provide valid pin");
    }
    if (addAmount < 0) {
      alert("you have to add postive number");
    }
    const in_total = addAmount + addamountNumber;
    // console.log(in_total);
   setInnerText(in_total);
  });

//  cashout button work
document.getElementById("withdraw_clicked").addEventListener("click",function(){
  const minusvalue= getinputinnertext("Add-number");
  const cashout = getinputbyid('Add-cashoutamount');
  const pinNUMBER = getinputvalue("add-pin-number1")
  if(pinNUMBER.length != 4){
    alert("aha try agin with right pin")
    return ;
  }
  const cashoutMoney = minusvalue-cashout;
  setInnerText(cashoutMoney);
})
  // set innertext as availabe balance
  function setInnerText(value){
    console.log(value);
    const balance= document.getElementById("Add-number");
   balance.innerText = value;
  }
//  function to covert input values in number 
function getinputbyid(id){
  const inputID = document.getElementById(id);
  const inputvalue = inputID.value;
  const getinputvaluenumber = parseInt(inputvalue);
  return  getinputvaluenumber;}

function getinputvalue(id){
  const inputId = document.getElementById(id);
  const indputget = inputId.value;
  return indputget;
}
function getinputinnertext(id){
  const inputId = document.getElementById(id);
  const indputget1 = inputId.innerText;
  const convert = parseInt(indputget1)
  return convert;
}
// toggle feature
document.getElementById("add-Money").addEventListener("click", function () {
  handtoggle("paymentParent")
});
document.getElementById("cash-Out").addEventListener("click", function () {
 
  handtoggle("cashoutParent")
})
document.getElementById("traniction-button").addEventListener("click", function () {

 handtoggle("Transaction")
})
document.getElementById("bonus").addEventListener("click", function () {

 handtoggle("GetBonus")
})
document.getElementById("billPayment").addEventListener("click", function () {

 handtoggle("bill")
})
// document.getElementById("").addEventListener("click", function () {

//  handtoggle("GetBonus")
// })

// function
function handtoggle(id){
  const forms = document.getElementsByClassName("form");
    for(const form of forms){
    form.style.display = 'none';
  }
   document.getElementById(id).style.display = "block";
}