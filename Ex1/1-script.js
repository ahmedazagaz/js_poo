function Voiture(model, marque, annee, type, carburant) {
  this.model = model;
  this.marque = marque;
  this.annee = annee;
  this.type = type;
  this.carburant = carburant;
}

function Hyndai(model, marque, annee, type, carburant, serie, hybride) {
  Voiture.call(this, model, marque, annee, type, carburant);
  this.serie = serie;
  this.hybride = hybride;

  this.alarmer = function() {
    console.log("Alerte sur la voiture " + this.model + " série " + this.serie);
  };
}

function Ford(model, marque, annee, type, carburant, options) {
  Voiture.call(this, model, marque, annee, type, carburant);
  this.options = options;
}

let voitures = [];

let v1 = new Hyndai("Tucson", "Hyundai", 2020, "SUV", "Essence", "Série X", true);
let v2 = new Ford("Focus", "Ford", 2018, "Compact", "Diesel", ["GPS", "Caméra"]);
let v3 = new Hyndai("Ioniq", "Hyundai", 2022, "Berline", "Électrique", "Série Z", true);

voitures.push(v1, v2, v3);

voitures.sort(function(a, b) {
  return a.annee - b.annee;
});

console.log("Liste des voitures triées par année :");

voitures.forEach(function(v) {
  console.log(v.marque + " " + v.model + " - " + v.annee + " (" + v.carburant + ")");
});

v1.alarmer();
