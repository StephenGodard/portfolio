document.addEventListener("DOMContentLoaded", function(event) {

    var g1, g2, g3;

    var g1 = new JustGage({
        id: "g1",
        value: 75,
        min: 0,
        max: 100,
        title: "Développement"
    });


    var g2 = new JustGage({
        id: "g2",
        value: 45,
        min: 0,
        max: 100,
        title: "Design"
    });

    var g3 = new JustGage({
        id: "g3",
        value: 59,
        min: 0,
        max: 100,
        title: "Réseaux"

    });
  
$('.circle').on('click', function(){
  $(this).toggleClass('filled');
});
$('.circle2').on('click', function(){
  $(this).toggleClass('filled');
});  

});
var clickdevButton=0;
var clickdesButton=0;
var clickresButton=0;
function clicj1(){
    if(clickdevButton===1){
        document.getElementById('langages').removeChild(document.getElementById("pictureDev"));
        clickdevButton=0;
        return;
    }
    

    var image=document.createElement('IMG');

    image.setAttribute('src',"img/skills.png");
    image.id="pictureDev";
    image.class="img-responsive";
    image.style.paddingLeft="420px";
    image.style.display="inline-bloc";
    image.setAttribute('alt',"mes compétences");
       
       document.getElementById("langages").appendChild(image);
    
    clickdevButton++;


}
function clicj2(){
     if(clickdesButton===1){
        document.getElementById('langages').removeChild(document.getElementById("pictureDes"));
        clickdesButton=0;
        return;
    }
    

    var image=document.createElement('IMG');

    image.setAttribute('src',"img/skillsD.png");
    image.id="pictureDes";
    image.class="img-responsive";
    image.style.paddingLeft="780px";
    image.style.display="inline-bloc";
    image.setAttribute('alt',"mes compétences");
       
       document.getElementById("langages").appendChild(image);
    
    clickdesButton++;

    
}

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {
    
    var skillDev=document.getElementById("j1");
    skillDev.addEventListener("click",clicj1);
    var skillDes=document.getElementById("j2");
    skillDes.addEventListener("click",clicj2);
    
    

});

