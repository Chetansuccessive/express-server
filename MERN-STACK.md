# M = MongoDB (We'll use Mongoose to make it easier for Node.js to   work with MongoDB, and we'll use MongoDB Atlas = MongoDB database, but cloud.
## E = Express (makes it easier to work with Node.js. We'll use cors middleware to access other servers outside our server).
### R = React (for the frontend. We'll use bootstrap for styling,  react-router-dom for React routes, react-datepicker for React Datepicker component, and axios to connect to the backend).
#### N = Node.js (for the server. We'll use dotenv to load environment variables from an .env file into process.env, and nodemon to make the app auto-restart when you edit/save files).
###### Exercise Tracker App:

**Exercises collection**
<p>Users collection<br>
every Exercise has one User</p>
To just get it running after you git clone, set up MongoDB Atlas, and then follow these CLI steps:

cd mern-exercise-tracker
npm install
cd backend
npm install
touch .env

# inside /mern-exercise-tracker: (separate CLI tab)
cd ..
cd mern-exercise-tracker
npm start

# inside /backend folder: (separate CLI tab)
cd mern-exercise-tracker/backend
nodemon server.js
# or: nodemon -x 'npm run lint; node server.js'
To develop it yourself from scratch, follow CLI steps below, and copy the code from this repo to fill in the files you create.

MongoDB
Project Setup
Backend Setup
ESLint Setup (Optional)
React
Frontend Setup
Setup Connection Between Frontend and Backend