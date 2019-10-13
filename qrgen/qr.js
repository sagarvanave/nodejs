'use strict';
const qr=require('qr-image');
const fs=require('fs');
console.log("at 0 position : ",process.argv[0]);
console.log("at 1 position : ",process.argv[1]);
let dataToEncode=process.argv[2] || null;
let outImage=process.argv[3] || null;

if(dataToEncode !== null && outImage!==null)
{
  qr.image(dataToEncode,{
    type:'png',
    size:20
  }).pipe(fs.createWriteStream(outImage));
  console.log("QR Images Generated");
}
else {
  console.log("Please Check command line arguments");
}
