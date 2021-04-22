class IdDataset {
   additionId(key){
      let nameClass = key
      let datas = document.querySelectorAll(nameClass)
      for (let i = 0; i<datas.length; i++) {
      let data = datas[i]
      data.dataset.productId=panier[i].identifiant;
      data.dataset.productColor=panier[i].color;
      }
   }
}




