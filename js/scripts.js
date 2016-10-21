$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var companyInput = parseInt($("#company").val());
    var interestsInput = parseInt($("#interests").val());
console.log(companyInput);

    if (companyInput + interestsInput === 8) {
    $("#ruby").show();
  } else if (companyInput + interestsInput === 3) {
    $("#csharp").show();
  } else if (companyInput + interestsInput === 4) {
    $("#java").show();
  } else if (companyInput + interestsInput === 6) {
    $("#php").show();
  } else if (companyInput + interestsInput === 10) {
    $("#design").show();
  }

    event.preventDefault();

  });

});
