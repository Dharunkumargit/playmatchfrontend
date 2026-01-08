import Player from "../player/Player.schema.js";
import { v4 as uuidv4 } from "uuid";
/* Generate Unique Booking ID */
const generateBookingId = () => {
  const id = uuidv4().replace(/-/g, "").slice(0, 5).toUpperCase();
  return `PMID${id}`;
};
/* Create Player */
export const createPlayerService = async (data) => {
  const bookingid = await generateBookingId();

  const player = new Player({
    ...data,
    bookingid,
  });

  return await player.save();
};

/* Get All Players */
export const getPlayersService = async () => {
  return await Player.find().sort({ createdAt: -1 });
};

/* Get Single Player */
export const getPlayerByIdService = async (id) => {
  return await Player.findById(id);
};

/* Update Player */
export const updatePlayerService = async (id, data) => {
  return await Player.findByIdAndUpdate(id, data, { new: true });
};

/* Delete Player */
export const deletePlayerService = async (id) => {
  return await Player.findByIdAndDelete(id);
};
