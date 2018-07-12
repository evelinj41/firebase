// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBa27gvCISh95m3XFf1vA4sYnOEVpJb8wg",
    authDomain: "chat-ba37b.firebaseapp.com",
    databaseURL: "https://chat-ba37b.firebaseio.com",
    projectId: "chat-ba37b",
    storageBucket: "chat-ba37b.appspot.com",
    messagingSenderId: "151313050576"
  };
  firebase.initializeApp(config);
  const username = prompt('nombre');
  const database = firebase.database();

$('button').click( function( event ){
event.preventDefault();
var mensaje = $('#mensaje').val() ;

var data = { usuario: username, mensaje: mensaje}
database.ref('chat/').push(data, function(error) {
if (error) { throw error; }
else {
  console.info ('guardamos la información');
  ponerMensaje(data);
  $('#mensaje').val('') 
     }
   });
 });

function ponerMensaje( cdn ) {
  $('#caja').append('<p>' + cdn.usuario +': ' + cdn.mensaje + '<p>');

}

function iterar(data){
    for ( var agua in data) {
      if (data.hasOwnProperty( agua) ){
        var elemento = data [agua];
        var pato = { 
          usuario: elemento.usuario,
          mensaje: elemento.mensaje
        };
        ponerMensaje(pato);
      }
    }
}



var traerMensajes = new Promise(function(res, rej) {
var mensaje = database.ref('/chat/').once('value').then(function(snapshot){
return res(snapshot.val() );

    });
  
  if (!mensaje) {return rej(); }
   });
 
  
  traerMensajes.then(function(data){
    console.warn(data);
    iterar(data);
  });
    
