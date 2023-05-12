// Manipulation du DOM, on récupère nos éléments
const touches = [...document.querySelectorAll('.bouton')];
const dataClavier = touches.map(touche => touche.dataset.clavier);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const value = e.key.toString();
    calculer(value)
})

document.addEventListener('click', (e) => {
    const value = e.target.dataset.clavier;
    calculer(value)
})

// Création constante pour supprimer le dernier caractère saisi.
const boutonEffacer = document.querySelector('#bouton-effacer');
boutonEffacer.addEventListener('click', () => {
    ecran.textContent = ecran.textContent.slice(0, -1);
});

//Fonction pour calculer, prend en paramètre la valeur du keycode e
const calculer = (value) => {
    if (dataClavier.includes(value)) {
        switch(value) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul    
                break;  
            default:
                const indexClavier = dataClavier.indexOf(value);
                const touche = touches[indexClavier];
                ecran.textContent += touche.innerHTML;
        }
    }

}

// Gestion des erreurs
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue : ' + e.message)
})
