# Chattr - Real-time Chat Application

Chattr is a modern, real-time chat application built with React, Node.js, and Socket.io. It provides a seamless messaging experience with features like real-time messaging, user authentication, and conversation management.

## Features

- 🔐 **User Authentication**

  - Secure login and registration
  - JWT-based authentication
  - Protected routes

- 💬 **Real-time Messaging**

  - Instant message delivery
  - Online/offline status
  - Message read receipts
  - Typing indicators

- 👥 **User Management**

  - User profiles
  - Search and add contacts
  - Online status indicators
  - Profile customization

- 🎨 **Modern UI/UX**

  - Responsive design
  - Dark/Light mode support
  - Clean and intuitive interface
  - Emoji support

- 🔄 **Conversation Features**
  - One-on-one chats
  - Message history
  - File sharing
  - Message reactions

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- DaisyUI
- Socket.io Client
- React Router
- Zustand (State Management)

### Backend

- Node.js
- Express.js
- Socket.io
- MongoDB
- JWT Authentication
- Bcrypt (Password Hashing)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/chattr.git
cd chattr
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:

````
MONGODB_URI=...
PORT=5001
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
NODE_ENV=development

5. Build the app
npm run build

6. Start the development servers

Backend:
```bash
cd backend
npm run dev
````

Frontend:

```bash
cd frontend
npm run dev
```

```
chattr/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── socket/
│   │   └── utils/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## Acknowledgments

- Socket.io for real-time communication
- React and Vite for frontend development
- MongoDB for database



START THE APP

npm start
