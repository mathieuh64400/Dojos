let doc=document.querySelector('aside > div');
console.log(doc);

doc.addEventListener('mouseover',function() {
    doc.style.borderRadius="0%";
    console.log(doc);
});
doc.addEventListener('mouseleave',function () {
   doc.style.borderRadius="50%" ;
});

let image=document.getElementsByClassName("picto");
console.log(image);

let nonimage=document.querySelectorAll("article>header>div")
console.log(nonimage);
let fleche = document.querySelectorAll("article>header");
console.log(fleche);
for (let element  of fleche) {
    console.log(element);
let aflecher= element.nextElementSibling;
console.log(aflecher);
element.addEventListener("click",function(){
if(aflecher.style.visibility=='visible'){
    aflecher.style.visibility='hidden';
    aflecher.style.height="0px";
} else{aflecher.style.visibility='hidden';
       aflecher.style.height='auto'};

});
 
};

    



//let nav= document.querySelector("nav");
//let pied=document.querySelector("footer");

//class Menu{
 //   constructor(nom,lien){
 //       this.nom=nom;
 //       this.lien=lien;
 //   }
 //   requeter(){
 //       let nav = document.querySelector("nav");
       
 //       let lien = document.createElement("a");
       
 //       lien.innerHTML=this.lien; 
 //       nav.appendChild(lien);
       
       

//    }
//}
//let xhr= new XMLHttpRequest();
//xhr.open("get",'./dojo.json');
//xhr.responseType="json";
//xhr.addEventListener("load",function () {  
//    let nav= document.querySelector("nav");
 //   nav.textContent="";
 //   menu=JSON.parse(xhr.response);
 //   menu.forEach(element => {
 //       let menu = new Menu(element.nom, element.lien);
 //       menu.requeter();   
 //   });
//});
//xhr.send();

