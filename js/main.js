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
var onglet=1;

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {

    var skillDev=document.getElementById("j1");
    skillDev.addEventListener("click",clicj1);
    var skillDes=document.getElementById("j2");
    skillDes.addEventListener("click",clicj2);
   $('.Pweb').click(function(){
       $('.circle').attr('id',"filled"); 
       $('.circle2').removeAttr('id',"filled");
       $('.circle3').removeAttr('id',"filled");
       
           var myNode = document.getElementById("ligne1");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
      var myNode1 = document.getElementById("ligne2");
while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
}
       
       
        var Pweb1=document.createElement('IMG');
        Pweb1.style.paddingRight="20px";
        Pweb1.setAttribute('src',"img/projet_cv.png");
        document.getElementById('ligne1').appendChild(Pweb1);
        var Pweb2=document.createElement('IMG');
        Pweb2.setAttribute('src',"img/projet_securtou.png");
        document.getElementById('ligne1').appendChild(Pweb2);

        var Pweb3=document.createElement('IMG');
        Pweb3.setAttribute('src',"img/projet_atelier.png");
        document.getElementById('ligne2').appendChild(Pweb3);
        var Pweb4=document.createElement('IMG');
        Pweb4.setAttribute('src',"img/laptop.png");
        document.getElementById('ligne2').appendChild(Pweb4);
       
   });
     $('.Papp').click(function(){
       $('.circle2').attr('id',"filled");
         $('.circle3').removeAttr('id',"filled");
         $('.circle').removeAttr('id',"filled");
       
       $('.circle').removeAttr('id',"filled");
       var myNode = document.getElementById("ligne1");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
      var myNode1 = document.getElementById("ligne2");
while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
}
          var Papp1=document.createElement('IMG');
        Papp1.style.paddingRight="20px";
        Papp1.setAttribute('src',"img/ui_1.png");
        document.getElementById('ligne1').appendChild(Papp1);
        var Papp2=document.createElement('IMG');
        Papp2.setAttribute('src',"img/ui_2.png");
        document.getElementById('ligne1').appendChild(Papp2);

        var Papp3=document.createElement('IMG');
        Papp3.setAttribute('src',"img/ui_3.png");
        document.getElementById('ligne2').appendChild(Papp3);
        var Papp4=document.createElement('IMG');
        Papp4.setAttribute('src',"img/ui_4.png");
        document.getElementById('ligne2').appendChild(Papp4);
       
         
   });
 $('.Pgraph').click(function(){
       $('.circle3').attr('id',"filled");
       $('.circle').removeAttr('id',"filled");
       $('.circle2').removeAttr('id',"filled");
     
         var myNode = document.getElementById("ligne1");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
      var myNode1 = document.getElementById("ligne2");
while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
}
     
       var Pgraph1=document.createElement('IMG');
        Pgraph1.style.paddingRight="20px";
        Pgraph1.setAttribute('src',"img/shana.png");
        document.getElementById('ligne1').appendChild(Pgraph1);
        var Pgraph3=document.createElement('IMG');
        Pgraph3.setAttribute('src',"img/rin_stephen.jpg");
        document.getElementById('ligne1').appendChild(Pgraph3);
        var Pgraph2=document.createElement('IMG');
        Pgraph2.setAttribute('src',"img/bleach5.gif");
        document.getElementById('ligne2').appendChild(Pgraph2);

     
        var Pgraph4=document.createElement('IMG');
        Pgraph4.setAttribute('src',"img/aria.gif");
        document.getElementById('ligne2').appendChild(Pgraph4); 
   });
                          

});







