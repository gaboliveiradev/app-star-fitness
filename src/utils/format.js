function formatMoney(value) {
    const result = Number(value)
    return new Intl.NumberFormat("pt-br", { style: "currency", "currency": "BRL" }).format(result);
};

function getCurrentDate() {
    const dataAtual = new Date();

    const ano = dataAtual.getFullYear(); // Obtém o ano com 4 dígitos
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Obtém o mês com 2 dígitos
    const dia = String(dataAtual.getDate()).padStart(2, '0'); // Obtém o dia com 2 dígitos

    return `${ano}-${mes}-${dia}`;
}

function add30Days(data) {
    const dataOriginal = new Date(data);
    const dataNova = new Date(dataOriginal);
    dataNova.setDate(dataOriginal.getDate() + 30);
    return dataNova.toISOString().split('T')[0];
}

export {
    formatMoney,
    getCurrentDate,
    add30Days
}