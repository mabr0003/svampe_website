fetch("https://akastixcsyqnoitkqodr.supabase.co/rest/v1/mushrooms", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrYXN0aXhjc3lxbm9pdGtxb2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MTE2NjAsImV4cCI6MjAyMzQ4NzY2MH0.0x5PoCVkdpCmIhVXAflC3YzQg-rpFCSmiQrQ9Z099-Y",
  },
})
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(mushrooms) {
  console.log(mushrooms);
  mushrooms.forEach(showAllMushrooms);
}

function showAllMushrooms(mushroom) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector(".mushroom_card img").src = mushroom.image;
  clone.querySelector(".mushcard_txtbox h2").textContent = mushroom.name;
  clone.querySelector(".mushcard_txtbox p").textContent = mushroom.landscapes;

  clone.querySelector(".read_more").setAttribute("href", `mushrooms.html?id=${mushroom.id}`);

  const parent = document.querySelector(".grid_1-1-1");
  parent.appendChild(clone);
}
