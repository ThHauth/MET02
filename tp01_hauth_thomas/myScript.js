/*$('form').submit(function(evt) {
  TestOnlyLettersFields();
  TestPasswordConfirmation(evt);

})*/

function CheckFormFields(){
  RemoveErrorMessages();
  var a = TestOnlyLettersFields();
  var b = ControlMail();
}

function TestPasswordConfirmation(evt){
  if (($('#inputPassword').val() === $('#inputConfirmPassword').val())) {
    if($('#inputPassword').val() === "" && $('#inputConfirmPassword').val()=== ""){     
      //alert('Veuillez renseigner un mot de passe');
    }
    else{
      //alert('Les mots de passe correspondent');
      evt.preventDefault();
    }
    
  }
  else{
    //alert('Les mots de passe ne correspondent pas');
  }
}

function HasOnlyLetters(text)
{
  var letters = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]+$/;
  return text.match(letters);
} 

function IsEmailValid(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function ControlMail(){
  $( ".mail" ).each(function() {
    if($(this).val() === ""){
      $(this).css("border", "2px solid red");
      $(this).after("<p class='errorMessages'>Veuillez remplir ce champ<p>");
      return false;
    }
    else if(IsEmailValid(mail.val())){
      $(this).css("border", "2px solid green");  
      return true;
    }
    else{
      $(this).css("border", "2px solid red");
      $(this).after("<p class='errorMessages'>Mail non valide<p>");
      return false;
    }
  });
}

function RemoveErrorMessages(){
  $( ".errorMessages" ).each(function() {
    $(this).remove();
  });
}

function TestOnlyLettersFields(){
  res = false;
  $( ".onlyLetters" ).each(function() {
    if($(this).val() === ""){
      $(this).css("border", "2px solid red");
      $(this).after("<p class='errorMessages'>Veuillez remplir ce champ<p>");
    }
    else if(HasOnlyLetters($(this).val())){
      $(this).css("border", "2px solid green");    
      res = true;
    }

    else{
      $(this).css("border", "2px solid red");
      $(this).after("<p class='errorMessages'>Ce champ ne peut contenir que des lettres<p>");
    }

  });
  return res;
  
}