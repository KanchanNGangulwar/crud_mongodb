In this project, we are going to create node CRUD application with express and mongodb.

To run this project clone and install modules  
    "axios": "^1.6.0",
    "body-parser": "^1.20.2",
    "dotenv": "^16.3.1",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "mongodb": "^6.2.0",
    "mongoose": "^7.6.3",
    "morgan": "^1.10.0",
    "nodemon": "^3.0.1"

To run use nodemon or npm start

Then Create config.env file and create PORT and MONGO_URI Variable and specify Value. That's it. You are ready to go. To execute this project just type

Apis List
POST: http://localhost:3000/api/users/
GET: http://localhost:3000/api/users/
GET by ID: http://localhost:3000/api/users/:id
PUT: http://localhost:3000/api/users/:id
DELETE: http://localhost:3000/api/users/:id