export function handlePriceToSaveInDb(price) {
  let valueToShow = price.replace(/\D/g, '');
  valueToShow = (parseInt(valueToShow) / 100).toFixed(2).replace('.', ',');

  return valueToShow;
}

export function handlePriceToShow(price) {
  let valueToShow = price.replace(/\D/g, '');
  valueToShow = (parseInt(valueToShow) / 100).toFixed(2).replace('.', ',');
  let formatted = 'R$ ' + valueToShow;

  return formatted;
}

export function handleFormatData(order_data) {
  const data = new Date(order_data)

  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  const hora = data.getHours().toString().padStart(2, '0');
  const minutos = data.getMinutes().toString().padStart(2, '0');

  const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}`;
  
  return dataFormatada;
}

export function handleSaveUpdatedAtInDb() {
  const data = new Date();

  const formatDateToUTC = (date) => {
    const ano = date.getUTCFullYear();
    const mes = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const dia = date.getUTCDate().toString().padStart(2, '0');
    const hora = date.getUTCHours().toString().padStart(2, '0');
    const minutos = date.getUTCMinutes().toString().padStart(2, '0');
    const segundos = date.getUTCSeconds().toString().padStart(2, '0');
    return `${ano}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
  };

  return formatDateToUTC(data);
}