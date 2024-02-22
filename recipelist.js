fetch(
  "https://akastixcsyqnoitkqodr.supabase.co/rest/v1/mushrooms",
  {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrYXN0aXhjc3lxbm9pdGtxb2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MTE2NjAsImV4cCI6MjAyMzQ4NzY2MH0.0x5PoCVkdpCmIhVXAflC3YzQg-rpFCSmiQrQ9Z099-Y",
    },
  }
)
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(mushrooms) {
  console.log(mushrooms);
  mushrooms.forEach(showAllMushrooms);
}

function showAllMushrooms(mushroom) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  console.log(mushroom.recipeimg + "test");

  clone.querySelector(".recipe-image").src = mushroom.recipeimg;
  clone.querySelector(".recipe-title").textContent = mushroom.titlerecipe;
  clone.querySelector(".time").textContent = mushroom.time;
  clone.querySelector(".level").textContent = mushroom.level;
  clone.querySelector("a").href = `recipes.html?id=${mushroom.id}`;

  const parent = document.querySelector("main");
  //Send brugeren vider til singleview-sitet
  //copy.querySelector(".read-more").setAttribute("href", `recipes.html?id=${data.id}`);
  parent.appendChild(clone);
}
