//-----PANIER----------//

//Panier de l'utilisateur
//let panier = JSON.parse(localStorage.getItem("produit"));
let panier = localStore.getItem('produit')

if(panier && panier.length >0){

  displayArticleHeader.displayArticleHeader()
  
  document.querySelector('.container__false').setAttribute("style", "display:none");
  //Prix Total du panier
  let priceStorage = []
  for(let i=0; i<panier.length; i++){
   let pricestorage = panier[i].totalPrice;
   priceStorage.push(pricestorage)
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let totalPrice = document.querySelector('.recapCommande__prixTotal')
  totalPrice.innerHTML = 'Total de votre commande ' + priceStorage.reduce(reducer)  + '€'

  //Nombre d'article dans le panier
  let produitPanier = document.querySelector(".recapCommande__nombreArticles");
  produitPanier.textContent = "Nombre d'articles dans le panier: " + panier.length;


  

  //------HTML Page Panier-------//

  function panierCreation () {
    
    for (let i = 0; i<panier.length; i++) {
    
      let template = document.querySelector("#panier__template");
      let clone = document.importNode(template.content, true);

      clone.querySelector(".panier__img").src = panier[i].image;
      clone.querySelector(".panier__titre").textContent = panier[i].name;
      clone.querySelector(".produits__details--price").textContent = 'Prix unitaire ' +(panier[i].price) + '€';
      clone.querySelector(".produits__details--Totalprice").textContent =panier[i].totalPrice;
      clone.querySelector('.color').textContent = panier[i].color;
      clone.querySelector('.nbr').value = panier[i].quantite;

      document.getElementById("panier").appendChild(clone)
      
    };

    //------Ajout des data-id/color-------//

    //ajout data id + color
    let panier__cards = ".panier__cards"
    additionId.additionId(panier__cards);

    //ajout de l'id sur le btn plus//
    let plus__btn = '.plus-btn'
    additionId.additionId(plus__btn);

    //ajout de l'id sur le btn moins//
    let minus__btn = '.minus-btn'
    additionId.additionId(minus__btn);
    
    //ajout de la couleur sur le btn suppr//
    let suppr__btn = '.btn__suppr'
    additionId.additionId(suppr__btn);
    
    //ajout de la couleur sur l'input//
    let nbr__btn = '.nbr'
    additionId.additionId(nbr__btn);
    
    //ajout de la couleur sur totalprice//
    let totalprice = '.produits__details--Totalprice'
    additionId.additionId(totalprice);

    //---------------button suppr panier--------------------------//
    buttonPanier.buttonSuppr()
    //---------------button augmenter----------------------------------//
    let btnPlus = document.querySelectorAll('.plus-btn');
    buttonPanier.buttonQuantity(btnPlus, 'plus')
    //---------------button diminuer----------------------------------//
    let btnMoins = document.querySelectorAll('.minus-btn');
    buttonPanier.buttonQuantity(btnMoins, 'moins')

  };

  panierCreation ()

  
  const btnFormulaire = document.querySelector("#validationFormulaire");

  btnFormulaire.addEventListener('click', (e) => {
    e.preventDefault()

    //validation des champs du formulaires//
    let formulaire = validationCommande.validationFormulaire()
    console.log(formulaire)
    
    //Récupérer les données du formulaire//

    const contact = {
      firstName: document.querySelector('#prenom').value,
      lastName: document.querySelector('#nom').value,
      address: document.querySelector('#adresse').value,
      city: document.querySelector('#ville').value,
      email:  document.querySelector('#email').value,
    }

    //récupération des ID du localstorage//

    const products = []
    for(i=0; i<panier.length; i++){
      id=panier[i].identifiant
      products.push(id)
    }
    const aEnvoyer = {
      contact,
      products,
    };

    console.log(aEnvoyer)
    
    //Stockage de la commande + recuperatrion de l'id + stockage dans le localstorage
    const recapCommande = async function (data){
      try{
        let response = await fetch('http://localhost:3000/api/teddies/order', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if(response.ok && formulaire === true){
          let idOrder = await response.json();
          getidOrder(idOrder);
          window.location = "./confirmationCommande.html"
        }else{
          console.error('Retour du serveur : ', response.status);
        }
      } catch (e) {
        console.log(e);
      } 
    }
    //----------------------------------------------------------------------------------------------//
    recapCommande(aEnvoyer)

    function getidOrder(idOrder) {
      let orderId = idOrder.orderId;
      localStorage.setItem("orderConfirmationId", orderId);
    }
  })


}else{
  document.querySelector('.container__true').setAttribute("style", "display:none");
}






  