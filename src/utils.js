export const formatDate = (date) => {
  const newDate = new Date(date);
  const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' });
  const formattedDate = formatter.format(newDate);

  return formattedDate;
};
