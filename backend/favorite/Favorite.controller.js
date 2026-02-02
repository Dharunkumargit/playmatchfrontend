import * as FavoriteService from "../favorite/Favorite.service.js";

export const toggleFavorite = async (req, res) => {
  try {
    const userId = req.body.userId; // TEMP (later from JWT)
    const { turfId } = req.body;

    const result = await FavoriteService.toggleFavorite(userId, turfId);

    res.status(200).json({
      success: true,
      liked: result.liked,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const userId = req.query.userId;

    const favorites = await FavoriteService.getUserFavorites(userId);

    res.status(200).json({
      success: true,
      data: favorites,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

