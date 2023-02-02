/*let entrada = prompt("Digite o ano que você nasceu:")
alert(2023-entrada)
alert(typeof entrada)*/

let section = document.querySelector("section");
/*section.classList.add("dark")
section.classList.remove("ligth")*/

function toDarkSide() {
  section.classList.add("dark");
  section.classList.remove("ligth");
}

function toJediSide() {
  section.classList.toggle("dark");
}
