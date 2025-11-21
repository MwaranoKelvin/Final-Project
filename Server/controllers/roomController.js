import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { v2 as cloudinary } from "cloudinary";

// API to create a new room for a hotel
// POST /api/rooms
export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities } = req.body;

    // Prefer req.user (set by protect middleware). Fall back to req.auth.userId if present.
    const ownerId = req.user?._id ?? req.auth?.userId;
    if (!ownerId) return res.status(401).json({ success: false, message: 'Not authenticated' });

    const hotel = await Hotel.findOne({ owner: ownerId });

    if (!hotel) return res.status(404).json({ success: false, message: "No Hotel found" });

    // upload images to cloudinary
    const uploadImages = req.files.map(async (file) => {
      const response = await cloudinary.uploader.upload(file.path);
      return response.secure_url;
    });

    // Wait for all uploads to complete
    const images = await Promise.all(uploadImages);

    const newRoom = await Room.create({
      hotel: hotel._id,
      roomType,
      pricePerNight: +pricePerNight,
      amenities: JSON.parse(amenities),
      images,
    });

    return res.status(201).json({ success: true, message: "Room created successfully", room: newRoom });
  } catch (error) {
    console.error('Create room error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// API to get all rooms
// GET /api/rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isAvailable: true })
      .populate({
        path: 'hotel',
        populate: {
          path: 'owner', 
          select: 'image',
        },
      }).sort({ createdAt: -1 });
    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to get all rooms for a specific hotel
// GET /api/rooms/owner
export const getOwnerRooms = async (req, res) => {
  try {
    const ownerId = req.user?._id ?? req.auth?.userId;
    if (!ownerId) return res.status(401).json({ success: false, message: 'Not authenticated' });

    const hotelData = await Hotel.findOne({ owner: ownerId });
    if (!hotelData) return res.status(404).json({ success: false, message: 'No hotel found for owner' });

    const rooms = await Room.find({ hotel: hotelData._id.toString() }).populate("hotel");
    return res.json({ success: true, rooms });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ success: false, message: error.message });
  }
};

// API to toggle availability of a room
// POST /api/rooms/toggle-availability
export const toggleRoomAvailability = async (req, res) => {
  try {
    const { roomId } = req.body;
    const roomData = await Room.findById(roomId);
    roomData.isAvailable = !roomData.isAvailable;
    await roomData.save();
    res.json({ success: true, message: "Room availability Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};