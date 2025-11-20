import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

// API to create a new hotel
// POST /api/hotels
export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.user?._id;

    if (!owner) {
      return res.status(401).json({ success: false, message: 'Not authenticated' });
    }

    // Validate required fields
    if (!name || !address || !contact || !city) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if User Already Registered
    const hotel = await Hotel.findOne({ owner });
    if (hotel) {
      return res.status(400).json({ success: false, message: "Hotel Already Registered" });
    }

    const newHotel = await Hotel.create({ name, address, contact, city, owner });

    // Update User Role
    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

    res.status(201).json({ success: true, message: "Hotel Registered Successfully", hotel: newHotel });
  } catch (error) {
    console.error('Hotel registration error:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error' });
  }
};