const billingForm = document.getElementById('billingForm');
const productInputs = document.querySelectorAll('input[name="products"]');
const totalElement = document.getElementById('total');
const selectedCountElement = document.getElementById('selectedCount');
const summaryCountElement = document.getElementById('summaryCount');
const billResult = document.getElementById('billResult');

function getSelectedProducts() {
    return [...productInputs].filter((product) => product.checked);
}

function updateSummary() {
    const selectedProducts = getSelectedProducts();
    const total = selectedProducts.reduce((sum, product) => {
        const price = Number(product.value.split(': ')[1]);
        return sum + price;
    }, 0);

    totalElement.textContent = total.toLocaleString('en-IN');
    selectedCountElement.textContent = selectedProducts.length;
    summaryCountElement.textContent = selectedProducts.length;
}

function GenerateBill() {
    const customerName = document.getElementById('customerName').value.trim();
    const selectedProducts = getSelectedProducts();

    if (!customerName || selectedProducts.length === 0) {
        return;
    }

    const total = selectedProducts.reduce((sum, product) => {
        return sum + Number(product.value.split(': ')[1]);
    }, 0);

    billResult.textContent = `Bill ready for ${customerName}. ${selectedProducts.length} item${selectedProducts.length === 1 ? '' : 's'} selected for ₹${total.toLocaleString('en-IN')}.`;
    billResult.classList.add('visible');
}

productInputs.forEach((product) => product.addEventListener('change', updateSummary));
billingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!billingForm.reportValidity() || getSelectedProducts().length === 0) {
        if (getSelectedProducts().length === 0) {
            billResult.textContent = 'Select at least one product to generate a bill.';
            billResult.classList.add('visible');
        }
        return;
    }
    GenerateBill();
});

updateSummary();
