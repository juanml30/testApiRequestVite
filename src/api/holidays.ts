export const getHolidays = async () => {
  const response = await fetch("https://api.argentinadatos.com/v1/feriados/2024");
  const data = await response.json();
  return data;
};
