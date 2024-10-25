const pays = document.getElementById("pays");
const bouton = document.querySelector("#bouton");
const resultat = document.querySelector("#resultat");

bouton.addEventListener("click", afficherInformation);

async function afficherInformation() {
  const url = "https://restcountries.com/v3.1/name/" + pays.value;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response status: ${response.status}");
    }

    const json = await response.json();
    console.log(json[0]);

    let contenu = "";

    contenu += "<b>Pays :</b>" + json[0]['name']['common'] + "<br>";

    contenu += "<b>Capitale :</b>" + json[0]['capital']['0'] + "<br>";

    contenu += "<b>Population :</b>" + json[0]['population'] + "<br>";

    contenu += "<img src='" + json[0]['flags']['png'] + "'>" + "<br>";

    resultat.innerHTML = contenu;

  } catch (error) {
    console.error(error.message);
  }
}
