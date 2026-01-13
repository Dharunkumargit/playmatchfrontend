import Favorite from "../favorite/Favorite.schema.js";

export const toggleFavorite = async (userId, turfId) => {
  const existing = await Favorite.findOne({ userId, turfId });

  if (existing) {
    await Favorite.deleteOne({ userId, turfId });
    return { liked: false };
  }

  await Favorite.create({ userId, turfId });
  return { liked: true };
};

export const getUserFavorites = async (userId) => {
  return await Favorite.find({ userId }).populate("turfId");
};

export const getFavoriteTurfIds = async (userId) => {
  const favorites = await Favorite.find({ userId });
  return favorites.map(f => f.turfId.toString());
};
