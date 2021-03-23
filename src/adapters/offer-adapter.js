export const adaptToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    previewImage: offer.preview_image,
    isPremium: offer.is_premium,
    isFavorite: offer.is_favorite,
    maxAdults: offer.max_adults,
  };

  return adaptedOffer;
};
