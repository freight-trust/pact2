let Web3 = require("Web3");

console.log(Web3.version);
// => 1.0.0-beta.34

// UTF8String to HexData
let data = Web3.utils.utf8ToHex("piyo");
console.log(data);
// => 0x7069796f

function onAddressChange(e) {
  let encodedFunctionSignature = web3.eth.abi.encodeFunctionSignature(e.value);
  console.log(encodedFunctionSignature);
  document.getElementById("result").innerText = encodedFunctionSignature;
}

window.onload = function () {
  if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider("https://mainnet.infura.io")
    );
  }
  console.log(web3.version);
};

let string = Web3.utils.hexToUtf8(data);
console.log(string);

console.log(Web3.version);

function onStringChange(e) {
  let data = Web3.utils.utf8ToHex(e.value);
  document.getElementById("data").value = data;
}

function onDataChange(e) {
  let string = Web3.utils.hexToUtf8(e.value);
  document.getElementById("string").value = string;
}
