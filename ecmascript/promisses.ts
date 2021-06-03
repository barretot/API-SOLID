import fetch from 'node-fetch';
// Callback
function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback('3s depois');
  }, 3000);
}

esperar3s(function (resultado: string) {
  console.log(resultado);
});

// promise
function esperarPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve('3s depois promise');
    }, 3000);
  });
}

esperarPromise().then((dado: any) => console.log(dado));

fetch('https://swapi.dev/api/people/1')
  .then((res) => res.json())
  .then((personagem) => personagem.films)
  .then((films) => fetch(films[1]))
  .then((resFilm) => resFilm.json())
  .then((filmes) => console.log(filmes.title))
  .catch((res) => console.log(`Error: ${res}`));
