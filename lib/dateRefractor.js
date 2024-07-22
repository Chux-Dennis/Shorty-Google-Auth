const dateRefractor = (givenDate) => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = dayNames[givenDate.getDay()];
  const date = givenDate.getDate();
  const month = monthNames[givenDate.getMonth()];
  const year = givenDate.getFullYear().toString().slice(-2); // Get last two digits of the year

  const formattedDate = `${day}, ${date} ${month} '${year}`;

  return formattedDate;
};

export { dateRefractor };
