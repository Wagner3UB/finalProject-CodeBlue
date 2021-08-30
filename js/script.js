$(function(){
  $("nav").on("click", function(){
    $("nav ul, .menu-hamburger span:nth-child(1), .menu-hamburger span:nth-child(2), .menu-hamburger span:nth-child(3)").toggleClass("active");
    });
  $(".see_more").on("click", function(){
    $(".m-hide").removeClass("m-hide");
    $(".see_more").addClass("active");
  });
});
