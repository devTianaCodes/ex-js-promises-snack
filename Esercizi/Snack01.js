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

function getPostTitle1(id) {
  return new Promise ((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then (post => resolve(post.title))
        .catch( reject)
  } )
}

getPostTitle(4)
      .then(console.log);
getPostTitle1(4)
      .then( title => console.log(title));
      //.catch(err => console.error(err));



//Bonus:Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. 
// Concatena una seconda chiamata che aggiunge una proprietà user 
// che contiene i dati dell'autore, recuperati 
// dalla chiamata https://dummyjson.com/users/{post.userId}.

function getPost(id) {
  return fetch(`https://dummyjson.com/posts/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Errore nel recupero del post: ${response.status}`);
      }
      return response.json();
    })
    .then((post) => {
      return fetch(`https://dummyjson.com/users/${post.userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Errore nel recupero dell'autore: ${response.status}`);
          }
          return response.json();
        })
        .then((user) => {
          post.user = user;
          return post;
        });
    });
}

getPost(4).then(console.log);