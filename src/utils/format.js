function formatMoney(value) {
    const result = Number(value)
    return new Intl.NumberFormat("pt-br", { style: "currency", "currency": "BRL" }).format(result);
};

function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return cpf;
}

function formatCEP(cep) {
    cep = cep.replace(/\D/g, '');

    if (cep.length !== 8) {
      return "CEP inválido";
    }

    cep = cep.slice(0, 5) + '-' + cep.slice(5);
  
    return cep;
  }

function formatPhone(phone) {
    phone = phone.replace(/\D/g, '');

    if (phone.length === 11) {
        phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        phone = phone.replace(/(\d{5})(\d{4})/, '$1-$2');
    }

    return phone;
}

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
    formatCPF,
    formatPhone,
    formatCEP,
    getCurrentDate,
    add30Days
}