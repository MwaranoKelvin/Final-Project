// import User from "../models/User.js";

// // Middleware to check if user is authenticated
// export const protect = async (req, res, next) => {
//   try {
//     const userId = req.auth?.userId;
//     if (!userId) {
//       return res.status(401).json({ success: false, message: "not authenticated" });
//     }

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(401).json({ success: false, message: "user not found" });
//     }

//     req.user = user;
//     return next();
//   } catch (error) {
//     console.error('Auth middleware error:', error);
//     return res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };

// import User from "../models/User.js";

// // Middleware to check if user is authenticated
// export const protect = async (req, res, next) => {
//   const { userId } = req.auth();
//   if (!userId) {
//     res.json({ success: false, message: "not authenticated" });
//   } else {
//     const user = await User.findById(userId);
//     req.user = user;
//     next();
//   }
// };

import User from "../models/User.js";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
  try {
    // Clerk may attach `req.auth` as an object or a function depending on versions/config.
    // Support both shapes safely.
    let userId;
    if (typeof req.auth === 'function') {
      try {
        const authResult = req.auth();
        userId = authResult?.userId;
      } catch (e) {
        userId = undefined;
      }
    } else {
      userId = req.auth?.userId;
    }

    console.log('protect: auth present?', !!req.auth, 'userId=', userId);

    if (!userId) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    req.user = user;
    return next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
