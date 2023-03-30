

export const camelize = (string: string): string => {
  return string
    .split(" ")
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

export const getDate = (date: string): string => {
  if (!date) return "";
  return date.split("T")[0];
};

export const getCurrencyPrice = (price: number, currency: string): string => {
  switch (currency) {
    case "USD": {
      return `$${price}`;
    }

    default: {
      return `$${price}`;
    }
  }
};

export const parseJwt = (token: string) => {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};


export const capitalize = (word: string): string =>
  `${word[0].toUpperCase()}${word.slice(1)}`;



export const trimStr = (str: string, charCount = 15) => {
  if (!str) return "";
  const res = str.substring(0, charCount);
  return res + "...";
};

export const isMorePages = (dataLength: number, perPageRecord = 10) => {
  dataLength = dataLength ? dataLength : 0;
  return dataLength > perPageRecord ? true : false;
};
