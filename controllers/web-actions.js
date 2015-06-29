/* core de la funcionalidad de la aplicación */
var sdk = require('./../sdks/chat');


// actions
// ==============================================

// obtiene todos los mensajes desde la persistencia
var getAllMessages = function getAllMessages(req, res) {  
    
  var page = req.query.page ? Number(req.query.page) : 1

  sdk.getMessages(page, function(messages){
    res.render('messages', { messages: messages, page: page } );
  });
  
};


// publica un nuevo mensaje
var postNewMessage = function postNewMessage(req, res) {
  
 
};



//exports
var exports = module.exports = {};
    exports.postNewMessage = postNewMessage;
    exports.getAllMessages = getAllMessages;