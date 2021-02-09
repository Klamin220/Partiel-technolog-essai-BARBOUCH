interface IRecette {
    identificateur : Number,
    nom : string,
    description : string,
    liste_ingredients : Array<string>,
    photo:string
}

class Recette implements IRecette{
    identificateur:0;
    nom:"";
    description:"";
    liste_ingredients:[];
    photo:"";
    constructor(public config : IRecette){
    }
}

var salade_verte : IRecette = {
    identificateur : 1,
    nom : "Salade Verte",
    description : "L'éternelle salade accompagne avec délice un maximum de nos plats. Il y a une saison pour les salades... Il faut l'accompagner d'une bonne sauce !",
    liste_ingredients : [""],
    photo : ""
}

var croque_monsieur : IRecette = {
    identificateur : 2,
    nom : "Croque-monsieur",
    description : "Cette recette est très pratique pour réutiliser des tranches de pain un peu rassis : badigeonnées de béchamel, elles retrouveront tout leur moelleux",
    liste_ingredients : ["pain de mie", "beurre mou", "jambon", "fromage","gruyère","lait","muscade","poivre","sel"],
    photo : ""
}

var crepe : IRecette = {
    identificateur : 3,
    nom : "Crepe jambon, fromage, champignon",
    description : "Surtout il faut bien centrer la préparation pour ne pas que ça coule. Vérifier tout de même de temps en temps dans le four.",
    liste_ingredients : ["jambon", "crepes","champignon","oeuf","creme fraiche", "gruyere", "poivre","sel"],
    photo : ""
}

var recette_1 = new Recette(salade_verte);
var recette_2 = new Recette(croque_monsieur);
var recette_3 = new Recette(crepe);

var recettes = new Array<Recette>();
recettes.push(recette_1);
recettes.push(recette_2);
recettes.push(recette_3);

class CRecette extends Recette{
    resultat : Recette;

    rechercher_par_id(id:number) : Recette {
        for (let i of recettes){
            if(i.identificateur == id){
                this.resultat = i;
            }
        }
        return this.resultat
    }
}

function myFunction() {
    //var t = (<HTMLInputElement>document.getElementById("tt")).value;
    //let w = JSON.parse(t);
    var html = `<br><br><br><div>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</div>`
  document.getElementById("container").innerHTML = html;
  console.log(`TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST`);
    //return w;
  }
  