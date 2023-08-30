// Format the createdAt/updatedAt date strings from db

const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (dateString) => {
  const dateObject = new Date(dateString);

  const day = dateObject.getDate();
  const month = months[dateObject.getMonth()];
  const year = dateObject.getFullYear();
  const hour = dateObject.getHours();
  const minute = dateObject.getMinutes();

  const formattedDate = `${day} ${month}, ${year} ${hour}:${minute}`;

  return formattedDate;
};
