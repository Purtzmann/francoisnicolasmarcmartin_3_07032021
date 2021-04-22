main ()

async function main() {
   const articles = await getArticles()
   
   let urlApi = 'http://localhost:3000/api/teddies'
   console.log(articles)
  
   for (i=0; i<articles.length; i++){
      const article = articles[i];
      displayArticles(article)
      displayArticleHeader.displayArticleHeader()
   }
}

function getArticles(){
   return fetch ('http://localhost:3000/api/teddies')
      .then(function(response){
         return response.json()
      })
      .then(function(articles){
         return articles
      })
      .catch(function(error){
         alert(error)
      })
}

function displayArticles(article){
   document.querySelector('.error').setAttribute("style", "display:none")
   const templateElt = document.getElementById("produits__template")
   const clone = document.importNode(templateElt.content, true)

   clone.querySelector(".img").src = article.imageUrl;
   clone.querySelector(".produits__details--name").textContent = article.name;
   clone.querySelector(".produits__details--price").textContent = article.price/100 + '€';
  
   const link = clone.querySelectorAll('a')
   for (let index = 0; index < link.length; index++) {
      const element = link[index];
      element.setAttribute('href', 'fiche.html?id=' + article._id)
   }
   document.getElementById("produits").appendChild(clone)
}

