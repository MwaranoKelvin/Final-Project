# HotelBooking - Full Stack Hotel Reservation Platform

> A modern, full-stack hotel booking application built with React, Node.js, Express, and MongoDB

![Project Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-ISC-blue)

## 📋 Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

## 📖 Project Description

HotelBooking is a comprehensive hotel reservation platform that connects travelers with hotel owners. The application allows users to:

- **Browse and search** for hotels across different cities
- **View detailed room information** with pricing and availability
- **Book rooms** with integrated Stripe payment processing
- **Manage bookings** through a personal dashboard
- **View hotel recommendations** based on search history
- **Leave testimonials** and ratings for hotels

Hotel owners can:

- **Register as hotel owners**
- **Add and manage rooms** with images and pricing
- **View booking requests** from guests
- **Access their business dashboard**

The platform uses **Clerk** for authentication, **Cloudinary** for image management, **Stripe** for payment processing, and **Nodemailer** for email notifications.

---

## ✨ Features

### User Features
- 🔐 Secure authentication with Clerk
- 🏨 Browse and search hotels by location
- 💰 Integrated Stripe payment gateway
- ⭐ Star ratings and reviews
- 📱 Responsive UI with Tailwind CSS
- 🎯 Recently searched cities tracking
- 📊 Personal booking dashboard
- 💌 Newsletter subscription

### Hotel Owner Features
- 📝 Hotel and room management
- 🖼️ Image upload via Cloudinary
- 📈 Dashboard analytics
- 🔔 Real-time booking notifications

### Technical Features
- 🎨 Modern React with Vite
- 🎯 Client-side routing with React Router
- 🌐 RESTful API with Express.js
- 💾 MongoDB database with Mongoose
- 📧 Email notifications with Nodemailer
- 🎁 Form validation and error handling

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Clerk** - Authentication
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Stripe** - Payment processing
- **Cloudinary** - Image hosting
- **Nodemailer** - Email service
- **Clerk Express** - Authentication middleware

---

## 🏆 SDG Goals Tackled

This project contributes to several United Nations Sustainable Development Goals (SDGs). Below are the goals addressed and brief notes on how the project supports them. Replace or expand these entries with your own details as needed.

- **SDG 8 — Decent Work and Economic Growth:** The platform supports local economies by enabling small hotels and independent owners to reach more customers, helping increase bookings and revenue.
- **SDG 9 — Industry, Innovation and Infrastructure:** By using modern web technologies and providing an online marketplace, the project promotes innovation in the hospitality industry and improves digital infrastructure for small businesses.
- **SDG 11 — Sustainable Cities and Communities:** The application encourages responsible tourism and helps travelers discover local accommodations, supporting sustainable local development.
- **SDG 12 — Responsible Consumption and Production:** The platform can be extended to highlight eco-friendly hotels and sustainable practices, encouraging more responsible choices by travelers.

Add any additional SDGs you specifically targeted (for example, accessibility improvements or community impact) and short evidence/examples demonstrating the impact.


## 📸 Screenshots

### Screenshots Section
Add your screenshots here to showcase the application:

#### Home Page
![Home Page](./screenshots/home-page.png)

#### Hotel Search Results
![Search Results](./screenshots/search-results.png)

#### Room Details Page
![Room Details](./screenshots/room-details.png)

#### Booking Page
![Booking Page](./screenshots/booking-page.png)

#### User Dashboard
![User Dashboard](./screenshots/user-dashboard.png)

#### Hotel Owner Dashboard
![Owner Dashboard](./screenshots/owner-dashboard.png)

#### Payment Page
![Payment Page](./screenshots/payment-page.png)

#### My Bookings
![My Bookings](./screenshots/my-bookings.png)

---

## 🚀 Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or MongoDB Atlas account)
- **Git**

Required third-party accounts:
- **Clerk** account for authentication
- **Stripe** account for payments
- **Cloudinary** account for image storage
- **Email service** (Gmail/Nodemailer setup for notifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MwaranoKelvin/Final-Project.git
   cd HotelBooking
   ```

2. **Install backend dependencies**
   ```bash
   cd Server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../Client
   npm install
   ```

### Environment Variables

Create `.env` files in both Server and Client directories:

#### Server/.env
```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Clerk Authentication
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Cloudinary Image Upload
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe Payment
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Email Configuration (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_app_password
EMAIL_SERVICE=gmail

# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

#### Client/.env
```env
# Clerk
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# API Base URL
VITE_API_BASE_URL=http://localhost:5000/api

# Stripe
VITE_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
```

### Running the Application

#### Development Mode

1. **Start the backend server**
   ```bash
   cd Server
   npm run server
   ```
   The server will run on `http://localhost:5000`

2. **In a new terminal, start the frontend**
   ```bash
   cd Client
   npm run dev
   ```
   The client will run on `http://localhost:5173`

#### Production Build

1. **Build the frontend**
   ```bash
   cd Client
   npm run build
   ```

2. **Start the production server**
   ```bash
   cd Server
   npm start
   ```

---

## 🌐 Deployment

### Deployed Application Links

- **Frontend**: [Frontend Url](https://makazy.vercel.app/)
- **Backend API**: [Backend Url](https://hotel-booking-backend-one-liart.vercel.app/)

### Deployment Platforms Used

- **Frontend**: Vercel
- **Backend**: [Your hosting platform]
- **Database**: MongoDB Atlas
- **Image Storage**: Cloudinary

---

## 📁 Project Structure

```
HotelBooking/
├── Client/                          # Frontend React application
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   │   ├── hotelOwner/         # Hotel owner specific components
│   │   │   └── ...other components
│   │   ├── pages/                   # Page components
│   │   │   ├── hotelOwner/         # Hotel owner pages
│   │   │   └── ...other pages
│   │   ├── context/                 # React context for state management
│   │   ├── assets/                  # Static assets
│   │   ├── App.jsx                  # Main app component
│   │   └── main.jsx                 # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── Server/                          # Backend Node.js application
│   ├── controllers/                 # Route handlers
│   ├── models/                      # Mongoose schemas
│   ├── routes/                      # API routes
│   ├── middleware/                  # Custom middleware
│   ├── configs/                     # Configuration files
│   ├── server.js                    # Server entry point
│   └── package.json
│
└── README.md                        # This file
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile

### Hotel Endpoints
- `GET /hotels` - Get all hotels
- `GET /hotels/:id` - Get hotel details
- `POST /hotels` - Create new hotel (Hotel owner)
- `PUT /hotels/:id` - Update hotel (Hotel owner)
- `DELETE /hotels/:id` - Delete hotel (Hotel owner)

### Room Endpoints
- `GET /rooms` - Get all rooms
- `GET /rooms/:id` - Get room details
- `POST /rooms` - Create new room (Hotel owner)
- `PUT /rooms/:id` - Update room (Hotel owner)
- `DELETE /rooms/:id` - Delete room (Hotel owner)

### Booking Endpoints
- `GET /bookings` - Get user bookings
- `POST /bookings` - Create booking
- `GET /bookings/:id` - Get booking details
- `PUT /bookings/:id` - Update booking
- `DELETE /bookings/:id` - Cancel booking

### User Endpoints
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update user profile
- `GET /users/search-history` - Get search history

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 📧 Contact & Support

For support, email: [Email Me](kelvinmwarano4@gmail.com)

Project Link: [https://github.com/MwaranoKelvin/Final-Project](https://github.com/MwaranoKelvin/Final-Project)

---
Updating soon.....
**Last Updated**: November 2025



