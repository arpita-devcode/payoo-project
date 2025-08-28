document
  .getElementById("button_clicked")
  .addEventListener("click", function () {
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("bank-number").value;
    const pinNumber = document.getElementById("add-pin-number").value;
    const addAmount = parseInt(document.getElementById("Add-amount").value);
    const addamountNumber = parseInt(document.getElementById("Add-number").innerText);
    const in_total = addAmount + addamountNumber;
    console.log(in_total);
   document.getElementById("Add-number").innerText = in_total;
  });
