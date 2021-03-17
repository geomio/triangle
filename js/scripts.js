$(document).ready(function() {
  $("form#triform").submit(function(event) {
    const sideA = parseInt($('input#sideA').val());
    const sideB = parseInt($('input#sideB').val());
    const sideC = parseInt($('input#sideC').val());
    $(".isosceles").hide();
    $(".equilateral").hide();
    $(".scalene").hide();
    $(".notri").hide();
    
    if(sideC === 0){
      $(".notri").show();
    }else if(sideB === 0){
      $(".notri").show();
    }else if(sideA === 0){
      $(".notri").show();
    }else if(( sideA + sideB ) <= sideC){
      $(".notri").show();
    }else if(( sideC + sideB ) <= sideA){
      $(".notri").show();
    }else if(( sideC + sideA ) <= sideB){
      $(".notri").show();
    }else if (sideA === sideB && sideC === sideA){
      $(".equilateral").show();
    }else if(sideA === sideC && sideA !== sideB){
      $(".isosceles").show();
    }else if(sideB === sideA && sideB !== sideC){
      $(".isosceles").show();
    }else if(sideB === sideC && sideB !== sideA){
      $(".isosceles").show();
    }else if(sideC === sideA && sideC !== sideB){
      $(".isosceles").show();
    }else if(sideC === sideB && sideC !== sideA){
      $(".isosceles").show();
    }else if(sideA !== sideB && sideA !== sideC){
      $(".scalene").show();
    }else if(sideB !== sideA && sideB !== sideC){
      $(".scalene").show();
    }else if(sideC !== sideA && sideC !== sideB){
      $(".scalene").show();
    }
    event.preventDefault();
  });
});