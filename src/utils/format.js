function formatMoney(value) {
    const result = Number(value)
    return new Intl.NumberFormat("pt-br", { style: "currency", "currency": "BRL" }).format(result);
};

export {
    formatMoney,
}