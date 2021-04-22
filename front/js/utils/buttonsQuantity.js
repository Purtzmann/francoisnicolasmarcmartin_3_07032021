class ButtonPanier{
  //plus/moins
   buttonQuantity(buttons, typeOperator){
      
      buttons.forEach(button => {
       button.addEventListener('click', (e) =>{
         e.preventDefault()
 
           let productLocalStorage = localStore.getItem('produit');
           console.log(productLocalStorage)
           const choiceColorProduct = e.target.dataset.productColor;
           const idProduct = e.target.dataset.productId;
 
           let colorDuLocalStorage = productLocalStorage.filter(elem => elem.color === choiceColorProduct)
           let idDuLocalStorage = productLocalStorage.filter(elem => elem.identifiant === idProduct)
           let recupeQuantite = typeOperator === 'plus' ? colorDuLocalStorage[0].quantite + 1 : colorDuLocalStorage[0].quantite - 1
           let recupeQuantiteId = typeOperator === 'plus' ? idDuLocalStorage[0].quantite + 1 : idDuLocalStorage[0].quantite - 1
           let recupePrice = colorDuLocalStorage[0].price*recupeQuantite
           let recupePriceId = idDuLocalStorage[0].price*recupeQuantiteId
           let priceProductId = idDuLocalStorage[0].price
           let priceProductColor = colorDuLocalStorage[0].price
 
           recupeQuantite = Number(recupeQuantite)
           recupeQuantiteId = Number(recupeQuantiteId)
           recupePrice = Number(recupePrice)
           recupePriceId = Number(recupePriceId)
 
           let valueCount = document.querySelectorAll(".nbr")
           
           let tableauNbr = Array.from(valueCount);
           let tableauId = tableauNbr.filter(e => e.dataset.productId === idProduct)[0];
           let tableauColor = tableauNbr.filter(e => e.dataset.productColor === choiceColorProduct)[0];
 
           let nbrId = tableauId.value
           let nbrColor = tableauColor.value
 
           let totalPrice = document.querySelectorAll(".produits__details--Totalprice")
 
           let tableauNbrPrice = Array.from(totalPrice);
           let tableauIdPrice = tableauNbrPrice.filter(e => e.dataset.productId === idProduct)[0];
           let tableauColorPrice = tableauNbrPrice.filter(e => e.dataset.productColor === choiceColorProduct)[0];
 
           let nbrIdPrice = tableauIdPrice.textContent
           let nbrColorPrice = tableauColorPrice.textContent
 
 
           if(colorDuLocalStorage.length > 1 && idDuLocalStorage.length === 1){
             //Modifie la quantité dans le localstorage
             Object.defineProperty(idDuLocalStorage[0], 'quantite',{
               value: recupeQuantiteId,
               writable: false,
             })
             //Modifie le prix total dans le localstorage
             Object.defineProperty(idDuLocalStorage[0], 'totalPrice',{
               value: recupePriceId,
               writable: false,
             })
             //Modifie la quantite dans l'input
             console.log('cas 1')
             typeOperator === 'plus' ? nbrId++ : nbrId--
             console.log(nbrId)
             tableauId.value = nbrId
             //Modifie le prix total sur la fiche
             nbrIdPrice = Number(nbrIdPrice)+Number(priceProductId)
             tableauIdPrice.textContent = nbrIdPrice
 
 
           }else if(colorDuLocalStorage.length > 1 && idDuLocalStorage.length > 1){
             // id
             Object.defineProperty(idDuLocalStorage[0], 'quantite',{
               value: recupeQuantiteId,
               writable: false,
             })
             Object.defineProperty(idDuLocalStorage[0], 'totalPrice',{
               value: recupePriceId,
               writable: false,
             })
             typeOperator === 'plus' ? nbrId++ : nbrId--
             tableauId.value = nbrId
             //Modifie le prix total sur la fiche
             nbrIdPrice = Number(nbrIdPrice)+Number(priceProductId)
             tableauIdPrice.textContent = nbrIdPrice
 
           }else if(colorDuLocalStorage.length ===1 && idDuLocalStorage.length > 1){
             // color
             Object.defineProperty(colorDuLocalStorage[0], 'quantite',{
               value: recupeQuantite,
               writable: false,
             })
             Object.defineProperty(colorDuLocalStorage[0], 'totalPrice',{
               value: recupePrice,
               writable: false,
             })
             typeOperator === 'plus' ? nbrColor++ : nbrColor--
             tableauColor.value = nbrColor
             //Modifie le prix total sur la fiche
             nbrColorPrice = Number(nbrColorPrice)+Number(priceProductColor)
             tableauIdPrice.textContent = nbrColorPrice
             
             
           }else if(colorDuLocalStorage.length ===1 && idDuLocalStorage.length === 1){
             // color
             Object.defineProperty(colorDuLocalStorage[0], 'quantite',{
               value: recupeQuantite,
               writable: false,
             })
             Object.defineProperty(colorDuLocalStorage[0], 'totalPrice',{
               value: recupePrice,
               writable: false,
             })
             typeOperator === 'plus' ? nbrColor++ : nbrColor--
             tableauColor.value = nbrColor
             //Modifie le prix total sur la fiche
             nbrColorPrice = Number(nbrColorPrice)+Number(priceProductColor)
             tableauIdPrice.textContent = nbrColorPrice
 
           } 
 
         localStore.setItem('produit', productLocalStorage)
 
         //Modifie le prix total sur le formulaire
 
         formulaireTotalPriceFunction.formulaireTotalPriceMaj()
         })
      });
   }
   buttonSuppr(){
      const product = document.querySelectorAll('.panier__cards')
      const btnsuppr = document.querySelectorAll('.btn__suppr')
  
      btnsuppr.forEach(btn =>{
        btn.addEventListener('click', (e) => {
          e.preventDefault()
          //suppr le local storage si panier est vide
          if(panier.length > 1 ){
            console.log('le panier est pas vide')
            const choiceColorProduct = e.target.dataset.productColor;
   
            panier = panier.filter(el => el.color !== choiceColorProduct);
            let tableauDiv = Array.from(product);
            let tableauDiv2 = tableauDiv.filter(e => e.dataset.productColor === choiceColorProduct)[0];
  
            tableauDiv2.remove()
            localStore.setItem('produit',panier)
  
            //Modifier nbr article sur le formulaire
            let produitPanier = document.querySelector(".recapCommande__nombreArticles");
            produitPanier.textContent = "Nombre d'articles dans le panier: " + panier.length;
  
            let nbrArticle = document.querySelector('.header__panier--article')
            nbrArticle.textContent = panier.length
  
          }else{
            const choiceColorProduct = e.target.dataset.productColor;
   
            panier = panier.filter(el => el.color !== choiceColorProduct);
            let tableauDiv = Array.from(product);
            let tableauDiv2 = tableauDiv.filter(e => e.dataset.productColor === choiceColorProduct)[0];
  
            tableauDiv2.remove()
            localStore.setItem('produit',panier)
            document.location.reload();
            
          }
        })
      }) 
   }
}
