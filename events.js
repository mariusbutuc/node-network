var events = require('events');
var eventEmitter = new events.EventEmitter()

function mainLoop() {
  console.log('Starting application');
  eventEmitter.emit('ApplicationStart');

  console.log('Running Application');
  eventEmitter.emit('ApplicationRun');

  console.log('Stopping Application');
  eventEmitter.emit('ApplicationStop');
}

function onApplicationStart() {
  console.log('»1 Handling Application start Event');
}

function onApplicationRun() {
  console.log('»2 Handling Application run Event');
  setTimeout(function() {
    console.log('»3 » Marius runs here!');
  }, 5000);
}

function onApplicationStop() {
  console.log('»4 Handling Application Stop event');
}

eventEmitter.on('ApplicationStart', onApplicationStart);
eventEmitter.on('ApplicationRun', onApplicationRun);
eventEmitter.on('ApplicationStop', onApplicationStop);

function onApplicationStart () {
  console.log('»1 » » Start: go, go, go!!!');
}

mainLoop();