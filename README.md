# BookIt

![logo](https://github.com/dachico/BookIt/assets/151663998/a6a43113-07de-4b7b-b002-2d103dd56ea5)


![VERSION](https://img.shields.io/badge/VERSION-1.0.0-blue)
![LICENSE](https://img.shields.io/badge/LICENSE-MIT-blue)

## About The Project

BookIt is a modern calendar app made from an idea to reality, designed to simplify scheduling and booking meetings. It provides a sleek and intuitive interface for managing appointments and tracking upcoming events, Stay on top of your schedule and improve with our calendar solution.

## Screenshots

![image](https://github.com/dachico/BookIt/assets/151663998/620290d8-9e13-4da4-8f71-25f28f55984d)

![image](https://github.com/dachico/BookIt/assets/151663998/aff5e2fb-e9cb-4a5d-9cec-ffbeda009cdd)

![image](https://github.com/dachico/BookIt/assets/151663998/2259cc8f-1c09-4b31-8fb8-5bb60c36a640)

![image](https://github.com/dachico/BookIt/assets/151663998/bed8ca3d-4f59-4dd1-af17-3ec3dc335321)



## Features

- **User Authentication:** Secure login and signup process with HTTP only header cookies.
- **Real-time Notifications:** Receive real-time updates on new and upcoming bookings.
- **Multiple Calendar Views:** Easily switch between month, week, and day views.
- **Booking Management:** Create, edit, and delete bookings directly from the calendar.
- **Awaiting List:** View all pending appointments with countdown timers.
- **User Calendar Search:** Search for other users and find available slots for new meetings.
- **Password Reset:** Forget your password? Reset it easily with a token sent to your email.
- **User Profile Management:** Update your name, email, and password anytime.
- **Welcome Emails:** Receive a warm welcome email upon registration.
- **Responsive Design:** Optimized for all devices.
- **Access and Refresh Tokens:** Enhanced security.
- **Custom Calendar Hours:** Set your own calendar opening and closing hours.
-

## Built With

- **Frontend:**

  - Vite
  - React
  - Axios
  - Styled-components
  - Dayjs
  - React-hot-toast
  - React-router-dom

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - Socket.IO
  - Nodemailer

## How to use

### Fork the Repository

Click the "Fork" button at the top of the page to create your own copy of the repository.

### Clone the Repository

Open your terminal or command prompt.
Clone the forked repository to your local machine

### Navigate to the project directory

```bash
cd BookIt
```

### Set Up Environment Variables

#### Client

```bash
cd client
```

Create a '.env' file in the client directory.

Add the neccessary environment variables, Here's an example:

```bash
VITE_BASE_API_URL=http://your-api-url.com
```

#### Server

```bash
cd server
```

Create a '.env' file in the server directory.

Add the necessary environment variables, Here's an example:

```bash
DATABASE_URL=mongodb://your-mongo-db-url
JWT_SECRET=your-jwt-secret
```

### Install Dependencies

#### Client

Navigate to the client directory if you are not already there:

```bash
cd client
```

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

#### Server

Navigate to the server directory if you are not already there:

```bash
cd server
```

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### Start the server

#### Client

```bash
npm run dev
# or
yarn dev
```

#### Server

```bash
npm run dev
# or
yarn dev
```

### Happy Coding!

## License

[MIT](https://choosealicense.com/licenses/mit/)
