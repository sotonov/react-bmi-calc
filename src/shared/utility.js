export const toLb = (w: number) => `${Math.round(w * 2.2046)}`;

export const toFtInch = (h: number) => {
  const feet = Math.floor(h * 0.0328);
  const inches = Math.round((h % 30.48) / 2.54);
  return `${feet}' ${inches}"`;
};
