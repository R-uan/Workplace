// Events on Node

const EventEmiter = require('events'); 
const emitter = new EventEmiter();

emitter.on('messageLogged', function() {
    console.log('Listener called');
});


emitter.emit('messageLogged');