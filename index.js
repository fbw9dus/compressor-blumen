const fs = require('fs');
const zlib = require('zlib')
const gzip = zlib.createGzip();
const path = require('path')
const pfad = process.argv[2]

const inp = fs.createReadStream(pfad);
const out = fs.createWriteStream('input.txt.gz');
inp.pipe(gzip)
  .on('error', () => {
    // handle error
  })
  .pipe(out)
  .on('error', () => {
    // handle error
  });
  
 