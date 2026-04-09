//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise 
// che recupera il titolo di un post 
// dal link https://dummyjson.com/posts/{id}

function getPostTitle(id) {
  return fetch(`https://dummyjson.com/posts/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Errore nel recupero del post: ${response.status}`);
      }
      return response.json();
    })
    .then((post) => post.title);
}

getPostTitle(4)
  .then(console.log);


//correction from video lesson:
function getPostTitle1(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(response => response.json())
      .then(post => resolve(post.title))
      .catch(reject)
  })
}

getPostTitle1(4)
  .then(title => console.log(title));
//.catch(err => console.error(err));



