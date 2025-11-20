import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerHotel } from "../controllers/hotelController.js";

const hotelRouter = express.Router();

hotelRouter.post("/api/hotels/", protect, registerHotel);

export default hotelRouter;