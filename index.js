AOS.init({
  duration: 1200,
})


const rmain = document.querySelector(".rmain");

const iut= document.querySelector(".iut");
const urssaf = document.querySelector(".urssaf");
const n2j = document.querySelector(".n2j");
const carriat = document.querySelector(".carriat");

const workText = document.getElementById("work-text");
const workLink = document.getElementById("work-link");

const listText = [{text: 'Le BUT à Bourg-En-Bresse est un diplôme de 3 ans qui offre une formation professionnalisante dans divers domaines technologiques. Accessible après le baccalauréat, il prépare les étudiants à une insertion directe dans le monde du travail ou à poursuivre leurs études en Master.', url: "https://iut.univ-lyon1.fr/"}, 
  {text: "Je me suis lancé dans une auto-entreprise avec deux autres de mes collègues de l'IUT durant ma première année, nous avons réalisé différents projets notamment dans le web avec la réalisation de site vitre ou même d'applications plus complexes dans le domaine de la sneakers.", url: "https://ladifsoftware.com/"}, 
  {text: "N2JSoft est une entreprise spécialisée dans les solutions logicielles, notamment dans la gestion des notes de frais. Elle propose un logiciel innovant permettant aux entreprises de gérer, simplifier et automatiser le processus de traitement des notes de frais. Je suis actuellement en alternance dans cette entreprise depuis le debut d'année", url: "https://www.n2f.com/fr/note-de-frais/"}, 
  {text: "Le lycée Carriat, situé à Bourg-en-Bresse, est un établissement public d'enseignement secondaire qui propose une large gamme de formations, incluant des sections générales, technologiques et professionnelles. J'y es effectué mon bac STI2D option SIN", url: "https://carriat.ent.auvergnerhonealpes.fr/"}];

if(iut){
  iut.addEventListener("click", () => {
    selectItem(0);
  })
}

if(urssaf){
  urssaf.addEventListener("click", () => {
    selectItem(1);
  })
}
if(n2j){
  n2j.addEventListener("click", () => {
    selectItem(2);
  })
}
if(carriat){
  carriat.addEventListener("click", () => {
    selectItem(3);
  })
}

if(rmain){
  selectItem(0);
}

function selectItem(index){
  let rotation = index*90;
  iut.style.transform = `translateY(-50%) translateX(-50%) rotate(-${rotation}deg)`;
  urssaf.style.transform = `translateY(-50%) translateX(-50%) rotate(-${rotation}deg)`;
  n2j.style.transform = `translateY(-50%) translateX(-50%) rotate(-${rotation}deg)`;
  carriat.style.transform = `translateY(-50%) translateX(-50%) rotate(-${rotation}deg)`;

  workLink.href= listText[index].url
  workText.textContent = listText[index].text;

  rmain.style.transform = `rotate(${rotation}deg)`;
}


let headerSelection = document.querySelectorAll(".header-selection p");
let headerSelectionContext = document.querySelector(".header-selection-context");
let headerSelectionMonTravail = document.querySelector(".header-mon-travail");
let headerSelectionRecap = document.querySelector(".header-recap");

function headerInit(){
  if(headerSelectionContext){
    headerSelectionContext.style.display = "none";
    headerSelectionMonTravail.style.display = "block";
    headerSelectionRecap.style.display = "none";
  }
  
}

headerInit();

headerSelection.forEach((e, index)=>{
  e.addEventListener('click', () =>{
    if(index == 0){
      headerSelectionContext.style.display = "block";
      headerSelectionMonTravail.style.display = "none";
      headerSelectionRecap.style.display = "none";
    }else if(index == 1){
      headerSelectionMonTravail.style.display = "block";
      headerSelectionContext.style.display = "none";
      headerSelectionRecap.style.display = "none";
    }else{
      headerSelectionContext.style.display = "none";
      headerSelectionRecap.style.display = "block"
      headerSelectionMonTravail.style.display = "none";
    }

  })
})