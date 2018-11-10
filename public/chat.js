const socket = io.connect("http://localhost:5000");
const my_form = document.getElementById("my-form");
const output = document.getElementById("output");
const aware = document.getElementById("awre");

// ====== EVENT LISTENER FOR SUBMITIMG THE FORM ======

$(".doo").scrollTop($(".doo")[0].scrollHeight);
my_form.addEventListener("submit", e => {
  let p = document.createElement("span");

  p.appendChild(
    document.createTextNode(
      `${e.target.author.value}:${e.target.message.value}`
    )
  );
  p.className = "message";
  aware.appendChild(p);
  let author = e.target.author.value;
  output.socket.emit("chats", {
    author: e.target.author.value,
    message: e.target.message.value
  });

  e.target.message.value = "";
  e.preventDefault();
});
my_form.children[2].children[0].addEventListener("keyup", e => {
  socket.emit("type", my_form.children[1].value);
  e.preventDefault();
});

// socket.on("chats", message => {
//   document.getElementById("awre").innerHTML = "";
//   let div = document.createElement("div");
//   div.className = "message";
//   div.appendChild(
//     document.createTextNode(`${message.author}:${message.message}`)
//   );
//   output.children[1].appendChild(div);

//   console.log((output.children[0].textContent = message.author));
// });
socket.on("type", author => {
  document.getElementById("awre").innerHTML = `

${author} is typing.....
`;
});
