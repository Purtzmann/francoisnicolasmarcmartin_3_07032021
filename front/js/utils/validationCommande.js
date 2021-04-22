class ValidationCommande{

   validationFormulaire(){
   
      const nameInput = document.getElementById("nom")
    if (!nameInput.checkValidity()) {
      let alertName = document.getElementById("alertNom")
      alertName.innerHTML = nameInput.validationMessage
      alertName.style.color = '#D40000'
      alertName.style.fontSize = '0.7rem'
    }else{
      let alertName = document.getElementById("alertNom")
      alertName.innerHTML = '<i class="fas fa-check"></i>'
      alertName.style.color = '#06D400'
    }

    const firstnameInput = document.getElementById("prenom")
    if (!firstnameInput.checkValidity()) {
      let alertName = document.getElementById("alertPrenom")
      console.log(alertName)
      alertName.innerHTML = firstnameInput.validationMessage
      alertName.style.color = '#D40000'
      alertName.style.fontSize = '0.7rem'
    }else{
      let alertName = document.getElementById("alertPrenom")
      alertName.innerHTML = '<i class="fas fa-check"></i>'
      alertName.style.color = '#06D400'
    }

    const emailInput = document.getElementById("email")
    console.log(emailInput.validity)
    if (!emailInput.checkValidity()) {
      let alertName = document.getElementById("alertEmail")
      alertName.innerHTML =  emailInput.validationMessage
      alertName.style.color = '#D40000'
      alertName.style.fontSize = '0.7rem'
    }else{
      let alertName = document.getElementById("alertEmail")
      alertName.innerHTML = '<i class="fas fa-check"></i>'
      alertName.style.color = '#06D400'
    }

    const phoneInput = document.getElementById("telephone")
    if (!phoneInput.checkValidity()) {
      let alertName = document.getElementById("alertPhone")
      alertName.innerHTML = phoneInput.validationMessage
      alertName.style.color = '#D40000'
      alertName.style.fontSize = '0.7rem'
    }else{
      let alertName = document.getElementById("alertPhone")
      alertName.innerHTML = '<i class="fas fa-check"></i>'
      alertName.style.color = '#06D400'
    }

    const adresseInput = document.getElementById("adresse")
    if (!adresseInput.checkValidity()) {
      let alertName = document.getElementById("alertAdresse")
      alertName.innerHTML = adresseInput.validationMessage
      alertName.style.color = '#D40000'
      alertName.style.fontSize = '0.7rem'
    }else{
      let alertName = document.getElementById("alertAdresse")
      alertName.innerHTML = '<i class="fas fa-check"></i>'
      alertName.style.color = '#06D400'
    }

    const villeInput = document.getElementById("ville")
    if (!villeInput.checkValidity()) {
      let alertName = document.getElementById("alertVille")
      alertName.innerHTML = villeInput.validationMessage
      alertName.style.color = '#D40000'
      alertName.style.fontSize = '0.7rem'
    }else{
      let alertName = document.getElementById("alertVille")
      alertName.innerHTML = '<i class="fas fa-check"></i>'
      alertName.style.color = '#06D400'
    }

    const codePostalInput = document.getElementById("codePostal")
    if (!codePostalInput.checkValidity()) {
      let alertName = document.getElementById("alertCP")
      alertName.innerHTML = codePostalInput.validationMessage
      alertName.style.color = '#D40000'
      alertName.style.fontSize = '0.7rem'
    }else{
      let alertName = document.getElementById("alertCP")
      alertName.innerHTML = '<i class="fas fa-check"></i>'
      alertName.style.color = '#06D400'
    }

    const paysInput = document.getElementById("pays")
    if (!paysInput.checkValidity()) {
      let alertName = document.getElementById("alertPays")
      alertName.innerHTML = paysInput.validationMessage
      alertName.style.color = '#D40000'
      alertName.style.fontSize = '0.7rem'
    }else{
      let alertName = document.getElementById("alertPays")
      alertName.innerHTML = '<i class="fas fa-check"></i>'
      alertName.style.color = '#06D400'
    }

    return nameInput.checkValidity() && firstnameInput.checkValidity() && emailInput.checkValidity() && 
    phoneInput.checkValidity() && phoneInput.checkValidity() && adresseInput.checkValidity() && villeInput.checkValidity() &&
    codePostalInput.checkValidity() && paysInput.checkValidity()

    console.log()
  }
   
}