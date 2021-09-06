$(function(){
  $("nav").on("click", function(){
    $("nav ul, .menu-hamburger span:nth-child(1), .menu-hamburger span:nth-child(2), .menu-hamburger span:nth-child(3)").toggleClass("active");
    });
  $(".see_more").on("click", function(){
    $(".m-hide").removeClass("m-hide");
    $(".see_more").addClass("active");
  });

  //Counter
  let quantity = $(".counter p:nth-of-type(2)");
  
  $(".counter p:first-child").on("click", function(){
    if(quantity.text() > 0){
      let contagem = parseInt(quantity.text());
      quantity.text(contagem - 1);
      $("p.alert-out").css("display","none")
      $(".left-column .counter").css("border", "1px solid var(--green)");
      $(".counter p:nth-of-type(2)").css("color", "var(--black)");
    } else if (quantity.text() == 0){
      $("p.alert-negative").css("display","block");
      $(".left-column .counter").css("border", "1px solid #d00");
      $(".counter p:nth-of-type(2)").css("color", "#d00");
    };
  });
  $(".counter p:last-child").on("click", function(){
    if(quantity.text() < 10){ 
      let contagem = parseInt(quantity.text());
      quantity.text(contagem + 1);
      $("p.alert-negative").css("display","none");
      $(".left-column .counter").css("border", "1px solid var(--green)");
      $(".counter p:nth-of-type(2)").css("color", "var(--black)");
    } else if (quantity.text() == 10){
      $("p.alert-out").css("display","block")
      $(".left-column .counter").css("border", "1px solid #d00");
      $(".counter p:nth-of-type(2)").css("color", "#d00");
    };
  });
  //END COUNTER

  //outline select purchese area

  $(".right-column div").on("click", function(){
    $(".right-column div").removeClass("active");
    $(this).addClass("active");
  });
});
