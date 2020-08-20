// import web3/v1.0.0-beta.34
// web3.min.js
// @dev - `sendMessage(string,address)`

    function onAddressChange(e) {
      let encodedFunctionSignature = web3.eth.abi.encodeFunctionSignature(e.value);
      console.log(encodedFunctionSignature);
      document.getElementById('result').innerText = encodedFunctionSignature;
    }

    window.onload = function() {
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
      } else {
        web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io"));
      }
      console.log(web3.version);
    }

