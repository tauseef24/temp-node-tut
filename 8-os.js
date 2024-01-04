const os = require('os')

//info about users
const user = os.userInfo()
// console.log(user);
// console.log(os.uptime());

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);