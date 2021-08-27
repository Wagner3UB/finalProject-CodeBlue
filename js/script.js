$(function(){
  $("nav").on("click", function(){
    $("nav ul, .menu-hamburger span:nth-child(1), .menu-hamburger span:nth-child(2), .menu-hamburger span:nth-child(3)").toggleClass("active");
    })
  });