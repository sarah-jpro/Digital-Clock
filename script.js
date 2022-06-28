let heuresDiv = document.querySelector('.heures');
let dateDiv = document.querySelector('.date');


let affichageHeure = function (){
    // Déclaration des variables utilisées:
    let today, annee, listeMois, mois, listeJours, jourNumero, jourNom, heures,minutes, secondes,deuxChiffres;

    // Récupération date actuelle:

    today = new Date();

    // Récupération de l'année

    annee = today.getFullYear();

    // Récupération du mois:
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeMois[today.getMonth()]; 

    // Récupération du chiffre du jour du mois:
    jourNumero = today.getDate();

    //Récupération du jour. Attention demaine commence dimanche en JS

    listeJours =["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()];

    // Affichage heures, minutes et secondes avec 2 chiffres:

    deuxChiffres = function(element){
        if(element <10){
            return element = "0" + element;
        }else{
            return element;
        }
    }

    // Récupération des heures:
    heures = deuxChiffres(today.getHours());

    // Récupération des minutes:

    minutes = deuxChiffres(today.getMinutes());

    // Récupération des secondes :

    secondes = deuxChiffres(today.getSeconds());

    //Affiche dans div HTML:

    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + "," + jourNumero + "" + mois +"" + annee;

    // Lancement fonction affichage heure toutes les 1000ms, soit toutes les secondes : 

    setTimeout(affichageHeure, 1000);

}
// Lancement de la fonction 1 fois au début :

affichageHeure ();