
class FetchHelper2{
   async getArticles2(url){
      return fetch (url)
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
}



