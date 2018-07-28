jQuery(document).ready(function($){
  $('.registro').on(
    'submit',
    function(e){
    e.preventDefault();


 var name = $('.registro .name ').val();
 var apellido =$('.registro .apellido');
 var number = $('.registro .numbero').val();
  var edad = $('.registro .edad').val();
  var genero =$('.registro . genero').val();
  var dep = $('.registro .dep').val();
   var ciu = $('.registro .ciu').val();
   var des = $('.registro .des').val();
   var Email = $('.registro .Email').val();
   var user = $('.registro .user').val();
   var password =$('.registro .password').val();
 
  if (!Email) {
    alert('debe ingresar el campo.');
  } else if(!password){
    alert('debe ingresar el campo.');
  } else {
    firebase
    .auth()
    .createUserWithEmailAndPassword(name, apellido, Email, edad, dep, number, des, ciu)
    .then(function(){
      alert('bienvenido');
    })
    .catch(function(error) {
      alert('no eres bienvenido');
    
         });
    }
  }

  );

});

jQuery(document).ready(function($){
  $('.login').on(
    'submit',
    function(e){
    e.preventDefault();
alert('ingrsar evento');
  var number = $('.login.number').val();
  var Email = $('.login .Email').val();
  var edad = $('.login .edad').val();

  if (!number) {
    alert('debe ingresar un numero.');
  } else if(!Email){
    alert('debe ingresar un email.');
  }else {
    firebase
    .auth()
    .createUserWithNumberAndEmail(number, Email, edad)
    .then(function(){
      alert('bienvenido');
    })
    .catch(function(error) {
      alert('no eres bienvenido');
    
         });
    }
  }

  );

});
