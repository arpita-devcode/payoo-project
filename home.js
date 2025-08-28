document
  .getElementById("button_clicked")
  .addEventListener("click", function () {
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("bank-number").value;
    const pinNumber = document.getElementById("add-pin-number").value;
    const addAmount = parseInt(document.getElementById("Add-amount").value);
    const valid_pin = 1234;
    const addamountNumber = parseInt(document.getElementById("Add-number").innerText);
    if(accountNumber.length<11){
      alert("please provide valid account number");
      return;
    }

    if(pinNumber!=valid_pin){
      alert("please provide valid pin");
    }
    
    if(addAmount<0){
      alert("you have to add postive number")
    }
    const in_total = addAmount + addamountNumber;
    console.log(in_total);
   document.getElementById("Add-number").innerText = in_total;
  });
