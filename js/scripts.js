$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var companyInput = parseInt($("#company").val());
    var interestsInput = parseInt($("#interests").val());
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var addressInput = $("input#address").val();
    var commentsInput = $("input#comments").val();
    var styleInput = parseInt($("input:radio[name=style]:checked").val());

    $(".name").text(nameInput);
    $(".email").text(emailInput);

    if (companyInput + interestsInput + styleInput === 18) {
    $("#ruby").show();
  } else if (companyInput + interestsInput + styleInput === 13) {
    $("#csharp").show();
  } else if (companyInput + interestsInput + styleInput === 14) {
    $("#java").show();
  } else if (companyInput + interestsInput + styleInput === 16) {
    $("#php").show();
  } else if (companyInput + interestsInput + styleInput === 30) {
    $("#design").show();
  }

    event.preventDefault();

  });

});
