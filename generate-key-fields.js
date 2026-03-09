import crypto from'crypto';
import fs from 'fs';

const {publicKey,privateKey}=crypto.generateKeyPairSync('rsa',{
    modulusLength:2048,
    publicKeyEncoding:{
        type:'pkcs1',
        format:'pem'
    },
    privateKeyEncoding:{
        type:'pkcs1',
        format:'pem'
    }
});

// const privateKeyString=privateKey.toString();
// const publicKeyString=publicKey.toString();

const formattedPrivateKey=privateKey.replace(/\\n/g, '\n').trim();
const formattedPublicKey=publicKey.replace(/\\n/g,'\n').trim();

console.log('ACCESS_TOKEN_PRIVATE_KEY="' + formattedPrivateKey + '"');
console.log('\nACCESS_TOKEN_PUBLIC_KEY="' + formattedPublicKey + '"');
console.log('\nREFRESH_TOKEN_PRIVATE_KEY="' + formattedPrivateKey + '"');
console.log('\nREFRESH_TOKEN_PUBLIC_KEY="' + formattedPublicKey + '"');