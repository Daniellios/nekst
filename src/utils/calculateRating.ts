export const calculateRating = (reviewsAmount?: number) => {
  const ratings = new Array(5).fill(false);

  if (!reviewsAmount) return ratings;

  const reviewsNumber = Math.round(reviewsAmount);

  for (let j = 0; j < ratings.length; j++) {
    if (j < reviewsNumber) {
      ratings[j] = true;
    } else {
      ratings[j] = false;
    }
  }
  return ratings;
};

export default calculateRating;
