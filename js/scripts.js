$(document).ready(function(){

  $("#welcome").click(function(){
    $("#formInputSection").show();
    $("#welcome").hide();
  })
  $("#blanks form").submit(function(event){
    var companyInput = $("#company").val();
    var interestsInput = $("#interests").val();
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var addressInput = $("input#address").val();
    var commentsInput = $("input#comments").val();
    var styleInput = parseInt($("input:radio[name=style]:checked").val());
    var environmentInput = parseInt($("input:radio[name=environment]:checked").val());


    $(".name").text(nameInput);
    $(".email").text(emailInput);

    $("#responses button").click(function(){
      location.reload();
    });

  if (nameInput && emailInput) {

    if (companyInput === "start-up" && interestsInput === "apps" && styleInput + environmentInput === 9 || interestsInput === "apps" && styleInput + environmentInput === 9) {
    $("#ruby").slideDown();
    $("#formInputSection").hide();
  } else if (companyInput === "corp" && interestsInput === "business" && styleInput + environmentInput === 12) {
    $("#csharp").slideDown();
    $("#formInputSection").hide();
  } else if (companyInput === "corp" && interestsInput === "android" && styleInput + environmentInput === 12) {
    $("#java").slideDown();
    $("#formInputSection").hide();
  } else if (companyInput === "agency" && interestsInput === "websites" && styleInput + environmentInput === 9 || companyInput === "start-up" && interestsInput === "websites" && styleInput + environmentInput === 9 || interestsInput === "websites" && styleInput === 5) {
    $("#php").slideDown();
    $("#formInputSection").hide();
  } else if (interestsInput === "websites" && styleInput === 3 || interestsInput === "operate" && styleInput === 3) {
    $("#design").slideDown();
    $("#formInputSection").hide();
  } else {
    $("#trouble").slideDown();
    $("#formInputSection").hide();
  }

} else if (nameInput){
  $("#name").parent().addClass("has-success");
  $("#email").parent().addClass("has-error");
} else if (emailInput){
  $("#email").parent().addClass("has-success");
  $("#name").parent().addClass("has-error");
} else {
  $("#name").parent().addClass("has-error");
  $("#email").parent().addClass("has-error");
  return false;
}


    event.preventDefault();

  });

});
