const bestPriceText = document.getElementById("best-Price");
const ramCostText = document.getElementById("extra-Memory-Cost");
const romCostText = document.getElementById("extra-Storage-Cost");
const deliveryChargeText = document.getElementById("delivery-Charge");
const totalPrice = document.getElementById("total-Price");
const finalTotal = document.getElementById("final-total");

function calculation() {
    const bestPrice = parseInt(bestPriceText.innerText);
    const ramCost = parseInt(ramCostText.innerText);
    const romCost = parseInt(romCostText.innerText);
    const deliveryCharge = parseInt(deliveryChargeText.innerText);

    totalPrice.innerText = bestPrice + ramCost + romCost + deliveryCharge;

    finalTotal.innerText = totalPrice.innerText;
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

document.getElementById("twentyFive").addEventListener("click", function () {
    deliveryChargeText.innerText = "0";
    calculation();
});

document.getElementById("twentyOne").addEventListener("click", function () {
    deliveryChargeText.innerText = "20";
    calculation();
});

// apply button input-field
let executed = true;
document.getElementById("apply").addEventListener("click", function () {
    const inputField = document.getElementById("input-field");
    const inputFieldvalue = inputField.value;
    if (executed == false) {
        inputField.style.borderColor = "green";
        inputField.value = "";
        inputField.setAttribute("placeHolder", "promo code used");
    } else if (
        isNaN(inputFieldvalue) == false ||
        inputFieldvalue != "stevekaku"
    ) {
        inputField.style.borderColor = "red";
        inputField.value = "";
        inputField.setAttribute("placeHolder", "use your promo code");
    } else if (inputFieldvalue == "stevekaku" && executed) {
        finalTotal.innerText =
            finalTotal.innerText - finalTotal.innerText * 0.2;
        inputField.style.borderColor = "green";
        inputField.value = "";
        inputField.setAttribute("placeHolder", "promo code used");
        executed = false;
    }
});
