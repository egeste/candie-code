/* Control Flow Mechanisms */

// If statements
if (true)  console.log('if (true)')
if (false) console.log('if (false)')

// If/Else statements
if (true) console.log('if/else (true)')
else      console.log('if/else (else)')

// if/else/if statements
if (true)                     console.log('if/else/if (true)')
else if ('andie' === 'steve') console.log('if/else/if (anbdie === steve)')
else                          console.log('if/else/if (else)')

// switch/case/default
switch ('steve') {
  case 'andie': console.log('switch/case (andie)'); break;
  case 'steve': console.log('switch/case (steve)'); break;
  default: console.log('switch/case (default)'); break;
}

// for loop
const cycles = 0

for (let i = 0; i < cycles; i++) {
  console.log('for loop', i)
}

// do.while loop
let i = 0;
do { console.log('do/while', i++) }
while (i < cycles)
