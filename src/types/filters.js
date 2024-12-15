export const getPriceRangeValues = (range) => {
  switch (range) {
    case '0-15000':
      return { min: 0, max: 15000 };
    case '15000-30000':
      return { min: 15000, max: 30000 };
    case '30000-50000':
      return { min: 30000, max: 50000 };
    case '50000+':
      return { min: 50000, max: null };
    default:
      return { min: 0, max: null };
  }
};