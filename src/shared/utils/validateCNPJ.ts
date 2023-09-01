export function validateCNPJ(cnpj: string) {
  cnpj = cnpj.replace(/[^\d]/g, '');

  if (cnpj.length !== 14) {
    return false;
  }

  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  const pesosPrimeiroDigito = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const pesosSegundoDigito = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const calcularDigito = (cnpj, pesos) => {
    let soma = 0;
    for (let i = 0; i < pesos.length; i++) {
      soma += parseInt(cnpj[i]) * pesos[i];
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const digito1 = calcularDigito(cnpj, pesosPrimeiroDigito);
  const digito2 = calcularDigito(cnpj, pesosSegundoDigito);

  return parseInt(cnpj[12]) === digito1 && parseInt(cnpj[13]) === digito2;
}
