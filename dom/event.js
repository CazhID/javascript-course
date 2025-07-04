// Event
// Objek event yang dibawa ke handler

document.getElementById("btn").addEventListener("click", function(e) {
  console.log("Event type:", e.type);
});
