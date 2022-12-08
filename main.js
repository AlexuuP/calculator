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


$("#nod")
  .keyup(function() {
    var nod = $( this ).val();
    var res = nod*100;
    $("#res1").text( res );
    var res2 = nod*67;
    $("#res2").text( res2 );
    var res3 = nod*50;
    $("#res3").text( res3 );
    var res4 = nod*44;
    $("#res4").text( res4 );
    var res5 = nod*34;
    $("#res5").text( res5 );
  })
  .keyup();





  $("#moc")
  .keyup(function() {
    var moc = $( this ).val();
    var res = moc*1000;
    $("#res2").text( res );
  })
  .keyup();



  $("#desk")
  .keyup(function() {
    var desl = $( this ).val();
    var res = desk*125;
    $("#res2").text( res );
  })
  .keyup();

