class FormulaireTotalPriceMaj{
   formulaireTotalPriceMaj(){
      let TotalPrice = document.querySelector(".recapCommande__prixTotal")
      let newTotalPrice = document.querySelectorAll(".produits__details--Totalprice")
      let TableauPrixTotaux = []
      for (let index = 0; index < newTotalPrice.length; index++) {
        const element = Number(newTotalPrice[index].textContent);
        TableauPrixTotaux.push(element)
      }
      let totalTableauPrixTotaux = 0
      for (let index = 0; index < TableauPrixTotaux.length; index++) {
        totalTableauPrixTotaux += TableauPrixTotaux[index];
      }
      TotalPrice.innerHTML = 'Total de votre commande ' + totalTableauPrixTotaux  + '€' 
      }
}
