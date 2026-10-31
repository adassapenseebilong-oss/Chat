# Mon travail

Prénom ou membres du binôme :MBONGO KOTTO MARC YVES 
                            KASSI ADJOUA MARIE ROSE
                            OUCHELLOUCHE RAYANE
                            EKANGA NATHAN FORTUNE
                            BILLONG PENSEE THERESIA

Nom du chatbot : Immigré IA

## 01 Le chemin d’un message

Expliquez en quatre à six phrases ce qui se passe entre l’activation du bouton Envoyer et l’affichage de la réponse.

Votre réponse :Lorsque l'utilisateur clique sur le bouton envoyer ; Javascript détecte le clic grâce à un évènement . Il récupère le texte saisi dans le champ ayant l'identifiant message . Le programme analyse ensuite le message pour identifier les mots clés reconnus ( HTML , CSS ,...) . Il choisit une réponse adaptée et l'affiche dans la zone prévue à cet effet , identifiée par réponse . Le dernier message envoyé est également envoyé.. Enfin le compteur permet de suivre le nombre de message envoyé.

## 02 Les variables et les objets

Quelle variable est réaffectée ? Pourquoi les références aux éléments peuvent-elles être déclarées avec const ? Quelles propriétés de votre objet chatbot utilisez-vous ?

Votre réponse : Les variables qui font référence aux éléments HTML peuvent être déclarées avec const car elles conservent leur référence pendant l'exécution du programme . Une variable contenant le message de l'utilisateur peut être réaffecter pour transformer le texte en minuscules ou supprimer les espaces inutiles . Les propriétés de l'objet chatbot ne sont pas visibles dans le code HTML fourni : elles doivent être vérifiées dans le fiechier script.js 

## 03 Les fonctions

Quel est le paramètre de choisirReponse ? Que renvoie cette fonction ? Pourquoi est-il utile de séparer le choix de la réponse de l’affichage ?

Votre réponse :Cette fonction recoit le paramètre saisi par l'utilisateur . Elle analyse le message et renvoie une réponse correspondant aux mots clés reconnus . Séparer le choix de la réponse de son affichage permet de de mieux organiser le programme Cela facilite également la modification des réponses et la compréhension du code.

## 04 Une difficulté rencontrée

Décrivez l’observation, votre hypothèse, votre vérification et la correction effectuée.

Votre réponse : La difficulté rencontré est le mauvais affichage des réponses du chatbot .Cela peut être dû à une mauvaise correspondance entre les identifiants HTML et ceux utilisés dans Javascript . Pour résoudre ce problème , il faut vérifier les identifiants des éléments comme message , réponse et envoyer . Après correction, il faut tester à nouveau le chatbot et vérifier les réponses qui s'affichent correctement.

## 05 Vos vérifications

- [ ] Les cinq mots-clés ont été testés.
- [ ] Une saisie avec espaces et majuscules a été testée.
- [ ] Le message inconnu et la saisie vide ont été testés.
- [ ] Le compteur et la remise à zéro ont été testés.
- [ ] Les commandes au clavier et une fenêtre étroite ont été testées.
- [ ] La console ne présente pas d’erreur pendant ces essais.

Ce qui fonctionne : 

Ce qui reste à terminer :
