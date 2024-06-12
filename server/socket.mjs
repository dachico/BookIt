import { Server } from "socket.io";

let io;

export const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("join", (userId) => {
      socket.join(userId);
    });

    socket.on("leave", (userId) => {
      socket.leave(userId);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  return io;
};

export const notifyNewBooking = (booking, userId) => {
  if (io) {
    io.to(userId).emit("newBooking", booking);
  }
};
