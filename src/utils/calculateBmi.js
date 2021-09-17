export const calculateBmi = (height: number, weight: number): number =>
  Number((weight / Math.pow(height * 1e-2, 2)).toFixed(2));
