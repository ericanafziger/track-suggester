$(document).ready(function(){
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
    $("#ruby button").click(function(){
      location.reload();
    });
    $("#csharp button").click(function(){
      location.reload();
    });
    $("#php button").click(function(){
      location.reload();
    });
    $("#java button").click(function(){
      location.reload();
    });
    $("#design button").click(function(){
      location.reload();
    });
    $("#trouble button").click(function(){
      location.reload();
    });

  if (nameInput && emailInput) {

    if (companyInput === "start-up" && interestsInput === "apps" && styleInput + environmentInput === 9) {
    $("#ruby").show();
    $("#formInputSection").hide();
  } else if (companyInput === "corp" && interestsInput === "business" && styleInput + environmentInput === 12) {
    $("#csharp").show();
    $("#formInputSection").hide();
  } else if (companyInput === "corp" && interestsInput === "android" && styleInput + environmentInput === 12) {
    $("#java").show();
    $("#formInputSection").hide();
  } else if (companyInput === "agency" && interestsInput === "websites" && styleInput + environmentInput === 9 || companyInput === "start-up" && interestsInput === "websites" && styleInput + environmentInput === 9) {
    $("#php").show();
    $("#formInputSection").hide();
  } else if (interestsInput === "websites" && styleInput === 3 || interestsInput === "operate" && styleInput === 3) {
    $("#design").show();
    $("#formInputSection").hide();
  } else {
    $("#trouble").show();
    $("#formInputSection").hide();
  }

} else if (nameInput){
  $("#name").parent().addClass("has-error");
} else if (emailInput){
  $("#email").parent().addClass("has-error");
} else {
  $("#name").parent().addClass("has-error");
  $("#email").parent().addClass("has-error");
  return false;
}


    event.preventDefault();

  });

});
