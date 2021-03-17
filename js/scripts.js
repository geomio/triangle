$(document).ready(function() {
  $("form#triform").submit(function(event) {
    const sideA = parseInt($('input#sideA').val());
    const sideB = parseInt($('input#sideB').val());
    const sideC = parseInt($('input#sideC').val());
    $(".isosceles").hide();
    $(".equilateral").hide();
    $(".scalene").hide();
    $(".notri").hide();
    
    if(sideC === 0 || sideB === 0 || sideA === 0){
      $(".notri").show();
    }else if(sideA + sideB <= sideC || sideC + sideB <= sideA || sideC + sideA  <= sideB){
      $(".notri").show();
    }else if (sideA === sideB && sideC === sideA){
      $(".equilateral").show();
    }else if(sideA === sideC && sideA !== sideB || sideB === sideA && sideB !== sideC || sideB === sideC && sideB !== sideA || sideC === sideA && sideC !== sideB ||sideC === sideB && sideC !== sideA){
      $(".isosceles").show();
    }else if(sideA !== sideB && sideA !== sideC || sideB !== sideA && sideB !== sideC || sideC !== sideA && sideC !== sideB){
      $(".scalene").show();
    }
    event.preventDefault();
  });
});

