# Contact Backend API

A Node.js/Express backend application for managing user messages and contact form submissions. Built with MongoDB and designed for deployment on Vercel.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

## ✨ Features

- RESTful API for user messages and contact submissions
- MongoDB database integration with Mongoose ODM
- CORS enabled for cross-origin requests
- Input validation and error handling
- Timestamp tracking for all entries
- Ready for serverless deployment on Vercel

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5.2.1
- **Database:** MongoDB with Mongoose v9.1.1
- **Environment:** dotenv for configuration
- **Dev Tools:** Nodemon for development

## 📁 Project Structure

```
contact-backend/
├── src/
│   ├── config/
│   │   └── db.js                 # MongoDB connection configuration
│   ├── models/
│   │   ├── user.model.js         # User/Message schema (name, email, messages)
│   │   └── contact.model.js      # Contact schema (name, email, address, message)
│   ├── services/
│   │   ├── user.service.js       # User business logic
│   │   └── contact.service.js    # Contact business logic
│   ├── controllers/
│   │   ├── user.controller.js    # User request handlers
│   │   └── contact.controller.js # Contact request handlers
│   ├── routes/
│   │   ├── user.routes.js        # User API routes
│   │   └── contact.routes.js     # Contact API routes
│   ├── middlewares/
│   │   └── auth.middleware.js    # Authentication middleware (placeholder)
│   ├── utils/
│   │   └── response.js           # Response utility functions
│   ├── app.js                    # Express app configuration
│   ├── server.js                 # Server setup (for Vercel)
│   └── index.js                  # Entry point (for local development)
├── .env                          # Environment variables
├── .gitignore                    # Git ignore rules
├── package.json                  # Dependencies and scripts
├── vercel.json                   # Vercel deployment configuration
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database (local or cloud instance like MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codeswithrahul/contact-backend.git
   cd contact-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The server will start on `http://localhost:3000`

### Production Build

```bash
npm start
```

## 📡 API Endpoints

### User/Message Endpoints

#### Get All Users
```http
GET /api/users
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "messages": "Hello, this is a test message",
      "createdAt": "2026-01-08T12:00:00.000Z",
      "updatedAt": "2026-01-08T12:00:00.000Z"
    }
  ]
}
```

#### Create User/Message
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "messages": "Hello, this is a test message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "message sent successfully"
}
```

### Contact Endpoints

#### Get All Contacts
```http
GET /api/contacts
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "address": "123 Main Street, City, State",
      "message": "I would like to get in touch!",
      "createdAt": "2026-01-08T12:00:00.000Z",
      "updatedAt": "2026-01-08T12:00:00.000Z"
    }
  ]
}
```

#### Create Contact
```http
POST /api/contacts
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "address": "123 Main Street, City, State",
  "message": "I would like to get in touch!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact submitted successfully",
  "data": {
    "_id": "...",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "address": "123 Main Street, City, State",
    "message": "I would like to get in touch!",
    "createdAt": "2026-01-08T12:00:00.000Z",
    "updatedAt": "2026-01-08T12:00:00.000Z"
  }
}
```

### Error Responses

All endpoints return error responses in the following format:

```json
{
  "success": false,
  "message": "Error description"
}
```

**Common HTTP Status Codes:**
- `200` - Success (GET requests)
- `201` - Created (POST requests)
- `400` - Bad Request (validation errors)
- `500` - Internal Server Error

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port number | No (default: 3000) |
| `MONGO_URI` | MongoDB connection string | Yes |

**Example `.env` file:**
```env
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

## 🌐 Deployment

### Vercel Deployment

This project is configured for deployment on Vercel.

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set environment variables** in Vercel dashboard:
   - Go to your project settings
   - Add `MONGO_URI` in the Environment Variables section

### Manual Deployment

The `vercel.json` configuration routes all requests to `src/server.js`, which is optimized for serverless deployment.

## 📝 Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🏗 Architecture

This project follows a **layered architecture** pattern:

1. **Routes Layer** - Defines API endpoints
2. **Controller Layer** - Handles requests, validation, and responses
3. **Service Layer** - Contains business logic and database operations
4. **Model Layer** - Defines MongoDB schemas

**Data Flow:**
```
Request → Routes → Controller → Service → Model → MongoDB
                                                      ↓
Response ← Routes ← Controller ← Service ← Model ← MongoDB
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

ISC

## 👤 Author

**Rahul Chouhan**
- GitHub: [@codeswithrahul](https://github.com/codeswithrahul)

## 🐛 Issues

If you encounter any issues, please file them in the [issues section](https://github.com/codeswithrahul/contact-backend/issues).