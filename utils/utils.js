const convertNumber = (number) => {
  let strNumber = number.toString();
  let partsNumber = strNumber.split(".");
  return {
    int: Number(partsNumber[0]),
    decimals: partsNumber[1] || '00',
  };
};

module.exports = {
  convertNumber,
};
