export function getGif(param) {
   return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=PCkukWzdSSYZLnU5lb9ePRasOcWlGAOs&s=${param}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      return response.data.images.original.url;
    })
  }