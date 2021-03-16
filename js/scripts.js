$(document).ready(function() {
  $("form#triform").submit(function(event) {
    const sideA = parseInt($('input#sideA').val());
    const sideB = parseInt($('input#sideB').val());
    const sideC = parseInt($('input#sideC').val());

    if (sideA === sideB && sideC === sideA){
      $("#equilateral").show();
      $("#isosceles").hide();
      $("#scalene").hide();
    }else if(sideA === sideC && sideA !== sideB){
      $("#isosceles").show();
      $("#equilateral").hide();
      $("#scalene").hide();
    }else if(sideB === sideA && sideB !== sideC){
      $("#isosceles").show();
      $("#equilateral").hide();
      $("#scalene").hide();
    }else if(sideB === sideC && sideB !== sideA){
      $("#isosceles").show();
      $("#equilateral").hide();
      $("#scalene").hide();
    }else if(sideC === sideA && sideC !== sideB){
      $("#isosceles").show();
      $("#equilateral").hide();
      $("#scalene").hide();
    }else if(sideC === sideB && sideC !== sideA){
      $("#isosceles").show();
      $("#equilateral").hide();
      $("#scalene").hide();
    }else if(sideA !== sideB && sideA !== sideC){
      $("#scalene").show();
      $("#equilateral").hide();
      $("#isosceles").hide();
    }else if(sideB !== sideA && sideB !== sideC){
      $("#scalene").show();
      $("#equilateral").hide();
      $("#isosceles").hide();
    }else if(sideC !== sideA && sideC !== sideB){
      $("#scalene").show();
      $("#equilateral").hide();
      $("#isosceles").hide();
    }
    event.preventDefault();
  });
});