function myFunction(e) {
    console.log("Comes here");
    var x = document.getElementById("submit-form").action;
    let name = document.getElementById("name-input").value
    let message = document.getElementById("message-input").value
    let email = document.getElementById("email-input").value
    
    let waUrl =  `https://wa.me/7902231794?text=Name: ${name}%0aEmail: ${email}%0aMessage: ${message}`
    window.open(waUrl, '_blank')
  } 