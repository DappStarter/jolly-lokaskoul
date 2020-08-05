require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strategy dash pulse common hidden knife force giant'; 
let testAccounts = [
"0xcd8aed24263938cb30884545d18256b2f8d22088808234a165ea3dfa41ce505b",
"0xdede0fc85d6c3392fb1b0d4797b3a1b426fa89fe95e8fe77cbbadf23a92abe9f",
"0x919f3271cb9e19a07a578fffa624f47abb0bee2321e5e59278ba14230730fd67",
"0x8890610ec1ea640acf36eac214c422bba61998cf42d4f1e69d1b8e46067feeb0",
"0xcbddf24645ba797b499c4766e12dc9037cf19cc8f8667feacac8fd51a394ab15",
"0xb7f4e901dc9b641cd410d289b7433d94a8dff2f00f33cc49ee516e7a9bf6c861",
"0xdd56013b57364c06acf70d5684c8c3e559eca59dbe3d2b7c8714f61946c87930",
"0xd8665053ba79dde1ca517f131146c16c08ee55309939d389b19c918dd1746bd8",
"0xb899c645db3595f2003f364570fc1434bd50b1e5d9bbe6d42bdebeb44211a3c1",
"0x2067c6ce5824dbe2dacc8cf996a02c0075c0c454fa70e83c8707bd2364f3e05a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
