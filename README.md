# Node-Next-Note - Full-Stack Note Web Application

## Overview
Node-Next-Note is a secure and efficient note-taking application developed using a full-stack approach. It enables users to create, edit, and manage notes seamlessly, offering a user-friendly interface for optimal productivity.

## Features
- **User Authentication:** Implemented secure signup, login, and logout functionality using JWT for token-based authentication and bcryptjs for password encryption, ensuring data privacy and security.
- **Note Management:** Users can create, edit, and delete notes effortlessly, with real-time updates and a responsive user experience.
- **Responsive Design:** Built with Tailwind CSS, ensuring the application adapts smoothly across different devices and screen sizes.
- **Robust Backend:** Developed with Node.js, Express.js, and MongoDB to ensure fast and reliable data processing and storage.
- **Secure Data Handling:** Utilized industry-standard encryption and authentication methods to protect user data.

## Tech Stack
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT), bcryptjs
- **Hosting:** Deployed on Vercel and Render for frontend and backend hosting, respectively.

## Installation and Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/PixelNomad-lang/node-next-note.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd node-next-note
   ```

### Backend Setup
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage
1. Access the application by navigating to the frontend development server URL (e.g., `http://localhost:3000`).
2. Create a new account or log in with an existing account.
3. Start managing notes by creating, editing, and deleting them as needed.

## Folder Structure
```
node-next-note
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── utils
│   └── ...
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── ...
└── README.md
```

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact
For any questions or suggestions, feel free to reach out:
- **Email:** adarshbalmukundshukla@gmail.com
- **GitHub:** [PixelNomad-lang](https://github.com/PixelNomad-lang)
- **LinkedIn:** [Adarsh Shukla](https://www.linkedin.com/in/adarsh-shukla-55825b256/)

