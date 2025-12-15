export const formatDate = (value: string) => {
  const formattedDate = new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};

export const formatTime = (value: string) => {
  const formttedDate = new Date(value).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return formttedDate;
};

export const combinedName = (firstName: string, lastName: string) => {
  const fullName = `${firstName} ${lastName}`;

  return fullName;
};

export const convertedPercent = (reliability: GLfloat) => {
  const percent = Math.round(reliability * 100);

  return percent;
};
