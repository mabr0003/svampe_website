const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://akastixcsyqnoitkqodr.supabase.co/rest/v1/mushrooms" + id, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrYXN0aXhjc3lxbm9pdGtxb2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MTE2NjAsImV4cCI6MjAyMzQ4NzY2MH0.0x5PoCVkdpCmIhVXAflC3YzQg-rpFCSmiQrQ9Z099-Y",
  },
})
  .then((response) => response.json())
  .then((data) => showMushroom(data));

function showMushroom(mushroom) {
  console.log(mushroom);
  //const data = mushroom[0];

  document.querySelector("h1").textContent = data.titlerecipe;
  document.querySelector(".time").textContent = data.time;
}

