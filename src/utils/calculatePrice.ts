export const calculatePrice = (price?: string) => {
  if (!price) return 0;
  const priceInRub = +price * 70;
  const res = Math.round(priceInRub);

  return res;
};
