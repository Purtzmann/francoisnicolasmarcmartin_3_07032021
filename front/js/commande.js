

let idOrderCommande = localStorage.getItem("orderConfirmationId");
console.log(idOrderCommande)

let infoCommande = document.querySelector(".commande__idOrder")
infoCommande.textContent = 'Le numéro de votre commande est le : '+ idOrderCommande

localStorage.clear()