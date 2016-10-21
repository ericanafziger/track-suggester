$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var companyInput = parseInt($("#company").val());
    var interestsInput = parseInt($("#interests").val());
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

  if (nameInput) {

    if (companyInput + interestsInput + styleInput + environmentInput === 28) {
    $("#ruby").show();
    $("#formInputSection").hide();
  } else if (companyInput + interestsInput + styleInput + environmentInput === 37) {
    $("#csharp").show();
    $("#formInputSection").hide();
  } else if (companyInput + interestsInput + styleInput + environmentInput === 38 || companyInput + interestsInput + styleInput + environmentInput === 40) {
    $("#java").show();
    $("#formInputSection").hide();
  } else if (companyInput + interestsInput + styleInput + environmentInput === 26 || companyInput + interestsInput + styleInput + environmentInput === 27) {
    $("#php").show();
    $("#formInputSection").hide();
  } else if (companyInput + interestsInput + styleInput === 30 || companyInput + interestsInput + styleInput === 29) {
    $("#design").show();
    $("#formInputSection").hide();
  }

} else {
  $("#name").parent().addClass("has-error").append("Name required to continue!");
  return false;
}


if (emailInput) {

  if (companyInput + interestsInput + styleInput === 18) {
  $("#ruby").show();
  $("#formInputSection").hide();
} else if (companyInput + interestsInput + styleInput === 13) {
  $("#csharp").show();
  $("#formInputSection").hide();
} else if (companyInput + interestsInput + styleInput === 14) {
  $("#java").show();
  $("#formInputSection").hide();
} else if (companyInput + interestsInput + styleInput === 16 || companyInput + interestsInput + styleInput === 17) {
  $("#php").show();
  $("#formInputSection").hide();
} else if (companyInput + interestsInput + styleInput === 30 || companyInput + interestsInput + styleInput === 29 || companyInput + interestsInput + styleInput === 28 || companyInput + interestsInput + styleInput === 20) {
  $("#design").show();
  $("#formInputSection").hide();
}

} else {
$("#email").parent().addClass("has-error").append("Email required to continue!");
return false;
}

    event.preventDefault();

  });

});
