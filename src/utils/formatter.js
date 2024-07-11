export function moneyFormatter() {
    return new Intl.NumberFormat('es-mx', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
    }).format;
}