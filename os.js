const state=require('os');
console.log('CPU architecture: ', state.arch());
console.log('Hostname of cuurent Operating System: ',state.hostname());
console.log('Load Averages: ',state.loadavg());
console.log('PlatForm : ', state.platform());
console.log('Version: ',state.version());

console.log('Here we gonna take the last line', state.EOL, 'Hi ,Welcome');


console.log("EOL varies from os to os" + state.EOL + "For windows it is \\r\\n" + state.EOL+ "For POSIX it is \\n" + state.EOL);