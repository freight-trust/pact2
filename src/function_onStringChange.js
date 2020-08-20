<<<<<<< HEAD
let Web3 = require('Web3');

console.log(Web3.version);

 let string = Web3.utils.hexToUtf8(data);
console.log(string);

    console.log(Web3.version);

    function onStringChange(e) {
      let data = Web3.utils.utf8ToHex(e.value);
      document.getElementById('data').value = data;
    }
=======
let Web3 = require("Web3");

console.log(Web3.version);

let string = Web3.utils.hexToUtf8(data);
console.log(string);

console.log(Web3.version);

function onStringChange(e) {
  let data = Web3.utils.utf8ToHex(e.value);
  document.getElementById("data").value = data;
}
>>>>>>> 51f0d26747232375cd97b4f389b43a9605b37c08
