import * as Playerservice from "../player/Player.service.js";

/* Create Player */
export const createPlayer = async (req, res) => {
  try {
    const player = await Playerservice.createPlayerService(req.body);
    res.status(201).json({
      success: true,
      message: "Player created successfully",
      data: player,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* Get All Players */
export const getPlayers = async (req, res) => {
  try {
    const players = await Playerservice.getPlayersService();
    res.status(200).json({ success: true, data: players });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* Get Player By ID */
export const getPlayerById = async (req, res) => {
  try {
    const player = await Playerservice.getPlayerByIdService(req.params.id);
    res.status(200).json({ success: true, data: player });
  } catch (error) {
    res.status(404).json({ success: false, message: "Player not found" });
  }
};

/* Update Player */
export const updatePlayer = async (req, res) => {
  try {
    const player = await Playerservice.updatePlayerService(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Player updated successfully",
      data: player,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* Delete Player */
export const deletePlayer = async (req, res) => {
  try {
    await Playerservice.deletePlayerService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Player deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
