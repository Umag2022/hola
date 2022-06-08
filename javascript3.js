
var pelicula = {nombre:"El Conjuro", genero: "Terror y suspenso", lanzamiento: 2013};
var pelicula2 = {nombre:"Annabelle", genero: "Terror y suspenso", lanzamiento: 2014};
var pelicula3 = {nombre:"El Conjuro 2", genero: "Terror y suspenso", lanzamiento: 2017};
var videoclub=[pelicula,pelicula2,pelicula3];
console.log(pelicula);
console.log(pelicula2);
console.log(pelicula3);
console.log(videoclub);
videoclub.forEach(pelicula => console.log (pelicula,pelicula3,pelicula2));
videoclub.length=[2];
function Pelicula(nombre, genero, lanzamiento)
{
this.nombre = nombre;
this.genero = genero;
this.lanzamiento = lanzamiento;
};