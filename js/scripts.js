$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var companyInput = $("#company").val();

    if (companyInput === "")

    $("#results").show();
    event.preventDefault();

  });

});
