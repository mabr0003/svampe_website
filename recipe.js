const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(
  "https://akastixcsyqnoitkqodr.supabase.co/rest/v1/mushrooms?id=eq." + id,
  {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrYXN0aXhjc3lxbm9pdGtxb2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MTE2NjAsImV4cCI6MjAyMzQ4NzY2MH0.0x5PoCVkdpCmIhVXAflC3YzQg-rpFCSmiQrQ9Z099-Y",
    },
  }
)
  .then((response) => response.json())
  .then((data) => showMushroom(data));

function showMushroom(data) {
  console.log("fucking data er: ", data);
  //const data = mushroom[0];

  const stepsGuide = data[0].descriptionRecipe;
  const ingridients = data[0].ingridients;
  console.log("setpsguide er ", stepsGuide);
  stepsGuide.forEach(makeSteps);
  ingridients.forEach(showIngridient);

  console.log(data.recipeimg + "test");

  document.querySelector(".single-view-recipe-image").src = data[0].recipeimg;
  document.querySelector(".time").textContent = data[0].time;
  document.querySelector(".level").textContent = data[0].level;
  document.querySelector(".person").textContent = data[0].person;
  document.querySelector(".month").textContent = data[0].monthtext;

  document.querySelector("h1").textContent = data[0].titlerecipe;
}
function makeSteps(step) {
  console.log("makeSteps");
  const template = document.querySelector(".direction_list").content;
  const clone = template.cloneNode(true);

  clone.querySelector("label").textContent = step;

  const parent = document.querySelector(".direction_main");
  parent.appendChild(clone);
}

function showIngridient(ingridient){
  console.log(ingridient);
  const template = document.querySelector(".ingridient_list").content;

  const clone = template.cloneNode(true);

  clone.querySelector(".ingridients").textContent = ingridient;

  const parent = document.querySelector(".ingridient_main");
  parent.appendChild(clone);
  

}
