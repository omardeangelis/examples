export const generateTempKey = () => {
  return Math.random().toString(36).substring(2, 15);
};
