const readMeFile = require('path').join(__dirname, 'README.md')
const readMe = require('fs').readFileSync(readMeFile, 'utf-8')
console.log(readMe)

console.log('# Control Flow Mechanisms')

console.log('## if statements')
console.log()
if (true)  console.log(' - if (true)')
if (false) console.log(' - if (false)')
console.log()

console.log('## if/else statements')
console.log()
if (true) console.log(' - if/else (true)')
else      console.log(' - if/else (else)')
console.log()

console.log('## if/else/if statements')
console.log()
if (true)                     console.log(' - if/else/if (true)')
else if ('andie' === 'steve') console.log(' - if/else/if (anbdie === steve)')
else                          console.log(' - if/else/if (else)')
console.log()

console.log('## switch/case/default')
console.log()
switch ('steve') {
  case 'andie': console.log(' - switch/case (andie)'); break;
  case 'steve': console.log(' - switch/case (steve)'); break;
  default:      console.log(' - switch/case (default)'); break;
}
console.log()

const cycles = 10
console.log('## for loop', { cycles })
console.log()
for (let i = 0; i < cycles; i++) {
  console.log(' - for loop', i)
}
console.log()

console.log('## do/while loop', { cycles })
console.log()
let i = 0;
do { console.log(' - do/while', i++) }
while (i < cycles)
console.log()
