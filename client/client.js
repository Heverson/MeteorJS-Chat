
/**************************************
* Templates
***************************************/
Template.messages.messages = function () {
  return Messages.find({}, { sort: { time: -1 }});
};
 
/****************************
* Cuida dos eventos do client
*****************************/
Template.input.events = {

  'keydown input#message' : function (event) {

     if (event.which == 13) { // 13 is the enter key event
          
      // verica se o usuário está autenticado
      if (Meteor.user()){
        var name = Meteor.user().profile.name;
        
        // recupera a mensagem
        var message = document.getElementById('message');

        // verifica se existe valor no objeto message
        if (message.value != '') {
          // insere os dados
          Messages.insert({
            name: name,
            message: message.value,
            time: Date.now(),
          });
        }

        
      }
      else{
        // Mostra o a mensagem de que precisa estar cadastrado para logar no sistema.
        var popover = document.querySelector('.pop-over');
       
        popover.innerHTML = "Faça o Login!";
        popover.style.display = "block";
        
        setTimeout(function(){
          popover.style.display = "none";
        }, 1000);
        
      }

      document.getElementById('message').value = '';
      message.value = '';
    
    }
  }
};


