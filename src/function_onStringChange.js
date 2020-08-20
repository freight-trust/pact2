let Web3 = require("Web3");

console.log(Web3.version);

let string = Web3.utils.hexToUtf8(data);
console.log(string);

console.log(Web3.version);

function onStringChange(e) {
  let data = Web3.utils.utf8ToHex(e.value);
  document.getElementById("data").value = data;
}
