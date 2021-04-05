export const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    previewImage: offer.preview_image,
    isPremium: offer.is_premium,
    isFavorite: offer.is_favorite,
    maxAdults: offer.max_adults,
    host: {
      avatar: offer.host.avatar_url,
      ispro: offer.is_pro
    }
  };

  return adaptedOffer;
};
