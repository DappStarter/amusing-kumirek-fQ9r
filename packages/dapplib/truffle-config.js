require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note punch pumpkin harvest nasty food giant'; 
let testAccounts = [
"0xfe703a755424d70fbd2cc1d9ba1d0d2d69b707c8f451188c539dda7f599d1810",
"0x1ce3851e8236d188e7c3ec587ddbd577f25350f9dbebf85149f8d894b3e5bcc1",
"0x01fbec1def68ac379f6424a00844ab4482fe904b16bb4ea95e0d53d57bd2dbdf",
"0x56648e3f98595c2503e7d25ad390766bc817d87a27c801414b9743260c3ae1c8",
"0xb7c0eb8726ff5ceb0d244b223a5906b34a2d975ee9f4f6b29f61735331429967",
"0x3c6daf55c2b719d11098ab85f2713a1f5e06d8d3593b2fa708e2ab6b1912c078",
"0xc062773e64b66564b64bcf5371d331cc2e1214b65af1963c56e29cf18d59f77e",
"0x5eb0cdb9a7fec6d37cd823fe0e3211b0e140368bed287d5898a50b0a88848f8f",
"0x127461e5da271eeda025991a9f34f1ba7d54d5abcd63491b475ca9396842e6ca",
"0xf0cee46089c8bdf378e7761c367f8bf00becb013b8bd6f732dc0a1800b766d0f"
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
            version: '^0.8.0'
        }
    }
};

