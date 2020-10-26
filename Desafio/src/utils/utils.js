export const formatPrice = (price, minDigits = 2) => {
    const priceAsString = price.toFixed(minDigits).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `R$ ${priceAsString}`;
};

export const formatMonth = (key) => {
    const months = { 
        '1' : 'Janeiro',
        '2' : 'Fevereiro',
        '3' : 'Março',
        '4' : 'Abril',
        '5' : 'Maio',
        '6' : 'Junho',
        '7' : 'Julho',
        '8' : 'Agosto',
        '9' : 'Setembro',
        '10' : 'Outubro',
        '11' : 'Novembro',
        '12' : 'Dezembro'
    };

    return months[key];
};