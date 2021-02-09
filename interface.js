var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Recette = /** @class */ (function () {
    function Recette(config) {
        this.config = config;
    }
    return Recette;
}());
var salade_verte = {
    identificateur: 1,
    nom: "Salade Verte",
    description: "L'éternelle salade accompagne avec délice un maximum de nos plats. Il y a une saison pour les salades... Il faut l'accompagner d'une bonne sauce !",
    liste_ingredients: [""],
    photo: ""
};
var croque_monsieur = {
    identificateur: 2,
    nom: "Croque-monsieur",
    description: "Cette recette est très pratique pour réutiliser des tranches de pain un peu rassis : badigeonnées de béchamel, elles retrouveront tout leur moelleux",
    liste_ingredients: ["pain de mie", "beurre mou", "jambon", "fromage", "gruyère", "lait", "muscade", "poivre", "sel"],
    photo: ""
};
var crepe = {
    identificateur: 3,
    nom: "Crepe jambon, fromage, champignon",
    description: "Surtout il faut bien centrer la préparation pour ne pas que ça coule. Vérifier tout de même de temps en temps dans le four.",
    liste_ingredients: ["jambon", "crepes", "champignon", "oeuf", "creme fraiche", "gruyere", "poivre", "sel"],
    photo: ""
};
var recette_1 = new Recette(salade_verte);
var recette_2 = new Recette(croque_monsieur);
var recette_3 = new Recette(crepe);
var recettes = new Array();
recettes.push(recette_1);
recettes.push(recette_2);
recettes.push(recette_3);
var CRecette = /** @class */ (function (_super) {
    __extends(CRecette, _super);
    function CRecette() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CRecette.prototype.rechercher_par_id = function (id) {
        for (var _i = 0, recettes_1 = recettes; _i < recettes_1.length; _i++) {
            var i = recettes_1[_i];
            if (i.identificateur == id) {
                this.resultat = i;
            }
        }
        return this.resultat;
    };
    return CRecette;
}(Recette));
function myFunction() {
    //var t = (<HTMLInputElement>document.getElementById("tt")).value;
    //let w = JSON.parse(t);
    var html = "<br><br><br><div>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</div>";
    document.getElementById("container").innerHTML = html;
    console.log("TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST");
    //return w;
}
