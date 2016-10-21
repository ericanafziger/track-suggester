$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var companyInput = parseInt($("#company").val());
    var interestsInput = parseInt($("#interests").val());


    if (companyInput + interestsInput === 8)
    $("#ruby").show();

    event.preventDefault();

  });

});
