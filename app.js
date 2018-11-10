const express = require("express");
const socket = require("socket.io");

const app = express();

// app.get("/", (req, res) => {
//   res.send("ok");
// });

const port = 5000;
const io = socket(
  app.listen(port, () => {
    console.log(`server is runing on the port ${port}`);
  })
);
io.on("connection", socket => {
  console.log(`Socket is connected ${socket.id}`);
  socket.on("chats", data => {
    socket.broadcast.emit("chats", data);
  });
  socket.on("type", author => {
    socket.broadcast.emit("type", author);
  });
});

app.use(express.static("public"));
