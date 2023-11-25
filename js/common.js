function formatCurrency(number) {
    return number.toLocaleString('en', { style: 'currency', currency: 'VND' });
}