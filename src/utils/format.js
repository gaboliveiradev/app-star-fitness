import moment from 'moment-timezone';
import 'moment/locale/pt-br';

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

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function formatCreatedAt(timestamp) {
    const formatoDesejado = 'DD/MMM/YY à[s] HH[h]mm[m]';
    moment.locale('pt-br');

    const momentoUtc = moment.utc(timestamp, 'YYYY-MM-DD HH:mm:ss');
    const momentoBrasilia = momentoUtc.tz('America/Sao_Paulo');

    const resultado = momentoBrasilia.format(formatoDesejado);

    return resultado;
}

function formatBirthday(data) {
    const partes = data.split('-'); // Dividir a data pelos hífens
    if (partes.length === 3) {
        const ano = partes[0];
        const mes = partes[1];
        const dia = partes[2];
        const dataBrasil = `${dia}/${mes}/${ano}`;
        return dataBrasil;
    } else {
        return 'Data de Nascimento Não Informada';
    }
}


export {
    formatMoney,
    formatCPF,
    formatPhone,
    formatCEP,
    formatCreatedAt,
    formatBirthday,
    capitalizeFirstLetter,
    getCurrentDate,
    add30Days
}