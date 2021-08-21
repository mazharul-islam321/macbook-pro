const bestPriceText = document.getElementById("best-Price");
const ramCostText = document.getElementById("extra-Memory-Cost");
const romCostText = document.getElementById("extra-Storage-Cost");
const deliveryChargeText = document.getElementById("delivery-Charge");
const totalPrice = document.getElementById("total-Price");
const finalTotal = document.getElementById("final-total");

//Total Price calculation function
function calculation() {
    const bestPrice = parseInt(bestPriceText.innerText);
    const ramCost = parseInt(ramCostText.innerText);
    const romCost = parseInt(romCostText.innerText);
    const deliveryCharge = parseInt(deliveryChargeText.innerText);
    // adding value to total Price
    totalPrice.innerText = bestPrice + ramCost + romCost + deliveryCharge;
    // adding value to ultimate total
    finalTotal.innerText = totalPrice.innerText;
}

// promo code function
function promoCode(value) {
    const inputField = document.getElementById("input-field");
    if (isNaN(value) == false || value != "stevekaku") {
        inputField.style.borderColor = "red";
        inputField.value = "";
        inputField.setAttribute("placeHolder", "use your promo code");
    } else if (value == "stevekaku") {
        finalTotal.innerText =
            totalPrice.innerText - totalPrice.innerText * 0.2;
        inputField.value = "";
        inputField.setAttribute("placeHolder", "");
    }
}

// Extra memory cost
document.getElementById("eightGbMemo").addEventListener("click", function () {
    ramCostText.innerText = "0";
    calculation();
});

document.getElementById("sixteenGbMemo").addEventListener("click", function () {
    ramCostText.innerText = "180";
    calculation();
});

// Extra Storage Cost
document.getElementById("firstSsd").addEventListener("click", function () {
    romCostText.innerText = "0";
    calculation();
});

document.getElementById("secondSsd").addEventListener("click", function () {
    romCostText.innerText = "100";
    calculation();
});

document.getElementById("thirdSsd").addEventListener("click", function () {
    romCostText.innerText = "180";
    calculation();
});

// Delivery Charge
document.getElementById("twentyFive").addEventListener("click", function () {
    deliveryChargeText.innerText = "0";
    calculation();
});

document.getElementById("twentyOne").addEventListener("click", function () {
    deliveryChargeText.innerText = "20";
    calculation();
});

// promo code eventlistener and calling promo code function
document.getElementById("apply").addEventListener("click", function () {
    const inputField = document.getElementById("input-field");
    const inputFieldValue = inputField.value;
    promoCode(inputFieldValue);
});
