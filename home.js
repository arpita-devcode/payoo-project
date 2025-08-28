const transaction = [];
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
    const data = {
      name: "Add Money",
      date: new Date().toLocaleString(),
    };
    transaction.push(data);
    // console.log(transaction);
  });

//  cashout button work
document
  .getElementById("withdraw_clicked")
  .addEventListener("click", function () {
    const minusvalue = getinputinnertext("Add-number");
    const cashout = getinputbyid("Add-cashoutamount");
    const pinNUMBER = getinputvalue("add-pin-number1");
    if (pinNUMBER.length != 4) {
      alert("aha try agin with right pin");
      return;
    }
    if (cashout <= 0) {
      alert("You must withdraw a positive amount");
      return;
    }
    
    const cashoutMoney = minusvalue - cashout;
    if (cashoutMoney < 0) { 
      alert("You don't have enough money");
      return;
    }
    setInnerText(cashoutMoney);
    const data = {
      name: "Cashout Money",
      date: new Date().toLocaleString(),
    };
    transaction.push(data);
    // console.log(transaction);
  });

document
  .getElementById("Transactionhistory")
  .addEventListener("click", function () {
    const trasiction_history = document.getElementById("transaction-container");
    trasiction_history.innerText = "";
    for (const data of transaction) {
      const div = document.createElement("div");
      div.innerHTML = `
         <div class="max-w-lg mx-auto" id="transaction-container">
            <div class="flex justify-between p-2 mt-2 ">
                <h1 class="font-bold text-xl">Latest payment</h1>
                <p>View All</p>
            </div>
            <div class="bg-white p-4 rounded-xl">
                <div class="flex justify-between ">
                    <div class="flex items-center gap-2">
                        <div class="">
                            <img src="assests/wallet1.png" alt=""
                                class="border-1 rounded-full p-5 bg-[#f4f5f7] border-none">
                        </div>
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="mt-1">${data.date}</p>
                        </div>
                    </div>
                    <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
            </div>
        </div>
        `;
      trasiction_history.appendChild(div);
    }
  });
// set innertext as availabe balance
function setInnerText(value) {
  console.log(value);
  const balance = document.getElementById("Add-number");
  balance.innerText = value;
}
//  function to covert input values in number
function getinputbyid(id) {
  const inputID = document.getElementById(id);
  const inputvalue = inputID.value;
  const getinputvaluenumber = parseInt(inputvalue);
  return getinputvaluenumber;
}

function getinputvalue(id) {
  const inputId = document.getElementById(id);
  const indputget = inputId.value;
  return indputget;
}
function getinputinnertext(id) {
  const inputId = document.getElementById(id);
  const indputget1 = inputId.innerText;
  const convert = parseInt(indputget1);
  return convert;
}
// toggle feature
document.getElementById("add-Money").addEventListener("click", function () {
  handtoggle("paymentParent");
  selectColour("add-Money");
});
document.getElementById("cash-Out").addEventListener("click", function () {
  selectColour("cash-Out");
  handtoggle("cashoutParent");
});
document
  .getElementById("traniction-button")
  .addEventListener("click", function () {
    selectColour("traniction-button");
    handtoggle("Transaction");
  });
document.getElementById("bonus").addEventListener("click", function () {
  selectColour("bonus");
  handtoggle("GetBonus");
});
document.getElementById("billPayment").addEventListener("click", function () {
  selectColour("billPayment");
  handtoggle("bill");
});
document
  .getElementById("Transactionhistory")
  .addEventListener("click", function () {
    selectColour("Transactionhistory");
    handtoggle("history");
  });

// function
function handtoggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
function selectColour(id) {
  const button = document.getElementsByClassName("form-btn");
  for (buttons of button) {
    buttons.classList.remove("border-[#0874F2]", "bg-[#0874F20d]");
    buttons.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "bg-[#0874F20d]");
}
