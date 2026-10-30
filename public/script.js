
// Objet qui décrit le chatbot
const chatbot = {
    nom: "Immigré IA ",
    accueil: "Bonjour ! Je suis Assistant Web. Comment puis-je t'aider ?"
};

// Récupération des éléments HTML
const champMessage = document.getElementById("message");
const boutonEnvoyer = document.getElementById("envoyer");
const boutonRecommencer = document.getElementById("recommencer");

const dernierMessage = document.getElementById("dernier-message");
const reponse = document.getElementById("reponse");
const compteurHTML = document.getElementById("compteur");
const erreur = document.getElementById("erreur");

// Compteur des messages valides
let compteur = 0;


// Fonction qui choisit la réponse du chatbot
function choisirReponse(messagePrepare) {

    if (messagePrepare === "bonjour") {
        return "Bonjour ! Je suis " + chatbot.nom + ". Ravi de discuter avec toi !";

    } else if (messagePrepare === "Aide") {
        return "Pour utiliser le chatbot, écris un mot-clé : bonjour, aide, html, css ou javascript.";

    } else if (messagePrepare === "html") {
        return "HTML permet de structurer le contenu d'une page web.";

    } else if (messagePrepare === "css") {
        return "CSS permet de modifier le style et l'apparence d'une page web.";

    } else if (messagePrepare === "javascript") {
        return "JavaScript permet de rendre une page web interactive.";

    } else {
        return "Je ne reconnais pas ce message. Tape « aide » pour découvrir les mots-clés.";
    }
}


// Fonction pour envoyer un message
function envoyerMessage() {

    // Récupérer le message original
    const messageOriginal = champMessage.value;

    // Préparer le message pour la comparaison
    const messagePrepare = messageOriginal.trim().toLowerCase();

    // Vérifier si le message est vide
    if (messagePrepare === "") {
        erreur.textContent = "Attention ! Veuillez écrire un message.";
        return;
    }

    // Afficher le message et la réponse
    dernierMessage.textContent = messageOriginal;
    reponse.textContent = choisirReponse(messagePrepare);

    // Augmenter le compteur
    compteur++;
    compteurHTML.textContent = compteur;

    // Vider le champ et l'erreur
    champMessage.value = "";
    erreur.textContent = "";
}


// Fonction pour recommencer
function recommencer() {

    compteur = 0;

    compteurHTML.textContent = compteur;
    dernierMessage.textContent = "Aucun message envoyé.";
    reponse.textContent = chatbot.accueil;

    champMessage.value = "";
    erreur.textContent = "";
}


// Écouteurs des boutons
boutonEnvoyer.addEventListener("click", envoyerMessage);
boutonRecommencer.addEventListener("click", recommencer);
