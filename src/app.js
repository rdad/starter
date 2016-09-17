
import config from './config';

let message = `Application "${config.name} (${config.status})" version ${config.version} ready and running`;
console.log( message );
document.body.innerHTML += message;
