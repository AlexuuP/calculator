$("document").ready(function () {
  $(".tab-slider--body").hide();
  $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function () {
  $(".tab-slider--body").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  if ($(this).attr("rel") == "tab2") {
     $(".tab-slider--tabs").addClass("slide");
  } else {
     $(".tab-slider--tabs").removeClass("slide");
  }
  $(".tab-slider--nav li").removeClass("active");
  $(this).addClass("active");
});



//Submit button validation

function valideaza(){
 if($("#noe").val() && $("#moc").val() && $("#nod").val()) {
  //console.log("e okay");
  alert("e OK!");
 

  $([document.documentElement, document.body]).animate({
   scrollTop: $(".move").offset().top
}, 400);

}else {

 console.log("nuuuuu e okay");
 alert(" Nuuuu e okk");
// $('body').scrollTo('.formular');
 $([document.documentElement, document.body]).animate({
   scrollTop: $(".formular").offset().top
}, 400);
}
}


//Formular calculator
$("input")
 .keyup(function() {
   var moc =  $("#moc").val();
   var nod = $( this ).val();
   var res = Math.round(nod/1);
   $("#res1").text( res );
     $("#res1m").text( res );
   var res2 = Math.round(nod/1.5);
   $("#res2").text( res2 );
     $("#res2m").text( res2 );
   var res3 = Math.round(nod/2);
   $("#res3").text( res3 );
     $("#res3m").text( res3 );
   var res4 = Math.round(nod/2.3);
   $("#res4").text( res4 );
     $("#res4m").text( res4 );
   var res5 = Math.round(nod/3);
   $("#res5").text( res5 );
     $("#res5m").text( res5 );
     var mocres = (nod*7)*(moc*12);


     var r1s = Math.round((nod - res)/res);
     var res1s = r1s*mocres;
     $("#res1s").text( res1s );
     $("#res1sm").text( res1s );
     var res2s = Math.round((nod - res2)/nod*mocres);
     $("#res2s").text( res2s );
     $("#res2sm").text( res2s );
     var res3s = Math.round((nod - res3)/nod*mocres);
     $("#res3s").text( res3s );
     $("#res3sm").text( res3s );
     var res4s = Math.round((nod - res4)/nod*mocres);
     $("#res4s").text( res4s );
     $("#res4sm").text( res4s );
     var res5s = Math.round((nod - res5)/nod*mocres);
     $("#res5s").text( res5s );
     $("#res5sm").text( res5s );
 })
 .keyup();