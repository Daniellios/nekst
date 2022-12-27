export const calculateReviews = (reviewsAmount?: number) => {
  let reviewsText = "";
  if (!reviewsAmount) return reviewsText;
  const reviewsCount = Math.round(reviewsAmount);

  if (reviewsCount === 1) {
    reviewsText = `${reviewsCount} отзыв`;
  } else if (reviewsCount > 1 && reviewsCount < 5) {
    reviewsText = `${reviewsCount} отзыва`;
  } else if (reviewsCount >= 5) {
    reviewsText = `${reviewsCount} отзывов`;
  }

  return reviewsText;
};
