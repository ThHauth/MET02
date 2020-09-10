$('form').submit(function(evt) {
  if (($('#inputPassword').val() === $('#inputConfirmPassword').val())) {
    if($('#inputPassword').val() === "" && $('#inputConfirmPassword').val()=== ""){     
      alert('Veuillez renseigner un mot de passe');
    }
    else{
      alert('Les mots de passe correspondent');
      evt.preventDefault();
    }
    
  }
  else{
    alert('Les mots de passe ne correspondent pas');
  }
})