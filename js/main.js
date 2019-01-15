

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {

    $('.html').animate({width:'80%'},2000);
    $('.css').animate({width:'60%'},2000);
    $('.js').animate({width:'75%'},2000);
    $('.jquery').animate({width:'60%'},2000);
    $('.php').animate({width:'30%'},2000);
    $('.python').animate({width:'50%'},2000);


   $('.Pweb').click(function(){
        $('.circle').attr('id',"filled"); 
        $('.circle2').removeAttr('id',"filled");
        $('.circle3').removeAttr('id',"filled");

        $('.PimageUI').fadeOut('slow');
        $('.Pimagedes').fadeOut('slow');

        var Pweb1=document.createElement('IMG');
        Pweb1.style.paddingRight="20px";
        Pweb1.setAttribute('src',"img/projet_cv.png");
        Pweb1.setAttribute('class','Pimageweb');
        document.getElementById('ligne1').appendChild(Pweb1);


        var Pweb2=document.createElement('IMG');
        Pweb2.setAttribute('src',"img/projet_securtou.png");
        Pweb2.setAttribute('class','Pimageweb');
        document.getElementById('ligne1').appendChild(Pweb2);

        var Pweb3=document.createElement('IMG');
        Pweb3.setAttribute('src',"img/projet_atelier.png");
        Pweb3.setAttribute('class','Pimageweb');
        Pweb3.style.paddingRight="20px";
        document.getElementById('ligne2').appendChild(Pweb3);

        var Pweb4=document.createElement('IMG');
        Pweb4.setAttribute('src',"img/laptop.png");

        Pweb4.setAttribute('class','Pimageweb');
        document.getElementById('ligne2').appendChild(Pweb4);


    });
    $('.Papp').click(function(){
        $('.circle2').attr('id',"filled");
        $('.circle3').removeAttr('id',"filled");
        $('.circle').removeAttr('id',"filled");

        $('.circle').removeAttr('id',"filled");
        $('.Pimageweb').fadeOut('slow');
        $('.Pimagedes').fadeOut('slow');
        var Papp1=document.createElement('IMG');
        Papp1.style.paddingRight="20px";
        Papp1.setAttribute('src',"img/ui_1.png");
        Papp1.setAttribute('class','PimageUI');
        document.getElementById('ligne1').appendChild(Papp1);

        var Papp2=document.createElement('IMG');
        Papp2.setAttribute('src',"img/ui_2.png");
        Papp2.setAttribute('class','PimageUI');
        document.getElementById('ligne1').appendChild(Papp2);

        var Papp3=document.createElement('IMG');
        Papp3.setAttribute('src',"img/ui_3.png");
        Papp3.setAttribute('class','PimageUI');
        Papp3.style.paddingRight="20px";
        document.getElementById('ligne2').appendChild(Papp3);


        var Papp4=document.createElement('IMG');
        Papp4.setAttribute('src',"img/ui_4.png");
        Papp4.setAttribute('class','PimageUI');
        document.getElementById('ligne2').appendChild(Papp4);



    });
    $('.Pgraph').click(function(){
        $('.circle3').attr('id',"filled");
        $('.circle').removeAttr('id',"filled");
        $('.circle2').removeAttr('id',"filled");

        $('.Pimageweb').fadeOut('slow');
        $('.PimageUI').fadeOut('slow');


        var Pgraph1=document.createElement('IMG');
        Pgraph1.style.paddingRight="20px";
        Pgraph1.setAttribute('src',"img/shana.png");
        Pgraph1.setAttribute('class','Pimagedes');
        document.getElementById('ligne1').appendChild(Pgraph1);

        var Pgraph3=document.createElement('IMG');
        Pgraph3.setAttribute('src',"img/rin_stephen.jpg");
        Pgraph3.setAttribute('class','Pimagedes');
        document.getElementById('ligne1').appendChild(Pgraph3);

        var Pgraph2=document.createElement('IMG');
        Pgraph2.setAttribute('src',"img/bleach5.gif");
        Pgraph2.setAttribute('class','Pimagedes');
        document.getElementById('ligne2').appendChild(Pgraph2);


        var Pgraph4=document.createElement('IMG');
        Pgraph4.setAttribute('src',"img/aria.gif");
        Pgraph4.setAttribute('class','Pimagedes');
        document.getElementById('ligne2').appendChild(Pgraph4); 

    });


});







