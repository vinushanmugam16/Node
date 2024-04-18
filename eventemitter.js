const emitter = require('events');

const state = new emitter();

state.on('start', () => {
    console.log('Has started ');
})

state.emit('start');


state.on('click', (name, age) => {
    console.log(`Name is ${name} and age is ${age}`);
})
state.emit('click', 'Reka', 24);


state.once('connection', () => {
    console.log('Getting executed');
})
state.emit('connection');
state.emit('connection');


state.on('main', () => { console.log('Emitting value'); })
state.prependListener('main', (stream) => {
    console.log('someone connected!');
});
state.emit('main');


state.prependOnceListener('system', () => {
    console.log('Only listen once a time');
})
state.emit('system');
state.emit('system');



const callback = () => {
    console.log('Have a nice day');
};
state.on('save', callback);
console.log('good Listener');
state.removeListener('save', callback);
state.emit('save')



function pong() {
  console.log('pong');
}

state.on('ping', pong);
state.once('ping', pong);
state.removeListener('ping', pong);
state.off('ping', pong);

state.emit('ping');  //doubt
state.emit('ping');