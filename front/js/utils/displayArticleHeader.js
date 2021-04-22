class DisplayArticleHeader {
   displayArticleHeader(){
   let panier = localStore.getItem('produit');
      if (panier && panier.length > 0) {
         let nbrArticle = document.querySelector('.header__panier--article')
         nbrArticle.textContent = panier.length
      }else{
         document.querySelector('.header__panier--article').style.display = "none";
      }
   }
}
