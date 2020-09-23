// Variables Setup 
const switchBtn = document.querySelector('.check-btn');
const prices = document.querySelectorAll('.card__head h1');

// Prices 
const annualPrices = ['$199.99', '$249.99', '$399.99'];
const monthlyPrices = ['$19.99', '$24.99', '$39.99']

// Function Convertor
switchBtn.addEventListener('click', function () {

    /*
        This function checks if the checkbox if checked or no and based on that it toggles between
        the annual and montly prices using If condition
    */
    if (this.checked == false) {

        prices[0].textContent = annualPrices[0];
        prices[1].textContent = annualPrices[1];
        prices[2].textContent = annualPrices[2];

    } else if (this.checked == true) {

        prices[0].textContent = monthlyPrices[0];
        prices[1].textContent = monthlyPrices[1];
        prices[2].textContent = monthlyPrices[2];

    }
}, false);