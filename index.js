
const nameForm = document.querySelector('#name');
const firstnameForm = document.querySelector('#firstname');
const civilite = document.querySelectorAll(".civilite input");

const messAlert = document.querySelector('.identite p');
const dropdown = document.querySelector('#dropdown');

const cgv = document.querySelector('#cgv');
const textbox = document.querySelector("#response");

var memCiv = '';

civilite.forEach((choix) => {
  choix.addEventListener("click", (e) => {
    memCiv = e.target.value; 
    document.querySelector('.messcivi').innerHTML = "<p>" + memCiv + "</p>";
    });
}
)

const valider = document.querySelector('#validation');
valider.addEventListener('click', controlform);

const btnvert = document.querySelector('#vert')
const btnjaune = document.querySelector('#jaune')
const btnbleu = document.querySelector('#bleu')

const cv = document.querySelector('#toSendPA')

btnvert.addEventListener('click', vert)
btnjaune.addEventListener('click', jaune)
btnbleu.addEventListener('click', bleu)

nameForm.addEventListener('focus', messNom);

function messNom() { 
  document.querySelector('.identite h5').innerHTML ="<p>Entrer votre nom</p>"
}

 function vert() {   
     document.querySelector('h4').classList.toggle("vert")
 }


//  function vert() {
//      document.getElementById('#textToColor').style.color("green") 
//     }

function jaune() {
  document.querySelector('h4').classList.toggle("jaune")
}

function bleu() {
  document.querySelector('h4').classList.toggle("bleu")
}

// *********  CV check
if (!cv.checked){ menucv();
  return false;
}

/**
 * Ma fonction func qui fait ........
 * @param toto : string, nom de toto
 */
// function func(toto) {

// }


function controlform() {

  document.querySelector('.identite h5').innerHTML ="<h5></h5>"
  document.querySelector('.identite p').innerHTML ="<p></p>";
  document.querySelector('.alertCheckbox').innerHTML ="<p></p>";
  document.querySelector('.messhero').innerHTML ="<p></p>";
  document.querySelector('.alertextbox').innerHTML ="<p></p>";
  document.querySelector('.alertcolor').innerHTML = "<p></p>";
 
  // ***** Nom
  if (nameForm.value == '' ) {
    document.querySelector('.identite p').innerHTML ="<p>Veuillez saisir un nom</p>";
    document.getElementById("name").focus();
    return false;
  }

  if (nameForm.value.length < 3 ) {
    document.querySelector('.identite p').innerHTML ="<p>3 caractères pour le Nom</p>";
    document.getElementById("name").focus();
    return false;
  }

  // ****** Prénom

  if (firstnameForm.value == '' ) {
    document.querySelector('.identite p').innerHTML ="<p>Veuillez saisir un prénom</p>";
    document.getElementById("firstname").focus();
    return false;
  }

  if (firstnameForm.value.length < 3 ) {
    document.querySelector('.identite p').innerHTML ="<p>3 caractères pour le prénom</p>"
    document.getElementById("firstname").focus();
    return false;
  }
  

  // ****** Civilité

  if(memCiv.length == '') {

    document.querySelector('.messcivi').innerHTML ="<p>Veuillez selectionner la civilité</p>"
    return false;
  }

  // ****** Hero
  
  if (dropdown.value == "Quel super héro êtes vous ?") {
    document.querySelector('.messhero').innerHTML ="<p>Veuillez selectionner un élément dans la liste</p>"
    document.queryCommandValue("select").focus();
    return false;
  }

  // ****** Cgv

  if (!cgv.checked){
    document.querySelector('.alertCheckbox').innerHTML ="<p>Vous devez valider la politique d'utilisation.</p>"
    return false;
  }
  
  if (textbox.value.length < 50){
    document.querySelector('.alertextbox').innerHTML ="<p>Vous devez minimum de 50 caractères.</p>"
    return false;
  }


  //***  ButtonColor

 
  var element = document.querySelector('#textToColor')

  if (element.classList.value == '') {
    document.querySelector('.alertcolor').innerHTML = "<p>Aucune couleur sélectionnée</p>";
    return;
  }
 
  //*** CV Dropdown

  function menucv(){
    let choiceList = ["un CV","une lettre de motivation","un CV et une lettre de motivation"];
    let choice = document.createElement("select");
    select.name = "myChoice";
    select.id = "myChoice";

    for(const element of choiceList)
    {
      const option = document.createElement("option");
      option.value = element;
      option.text = element.charAt(0).toUpperCase() + element.slice(1);
      choice.appendChild(option);
    }
    
    let label = document.createElement("label");
    label.innerHTML = "Ma/mes pièces jointes"
    label.HTMLFor = "myChoice";

    document.getElementsByClassName(".cv").appendChild(label).appendChild(select);

  
  }
 



  alert("Le formulaire et complet")

  console.log(textbox.value);
  // console.log(nameForm.value, firstnameForm.value, memCiv, dropdown.value);
  // console.log("Fin de traitement");

  return;

}

