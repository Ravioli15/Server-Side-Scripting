const fs = require('fs');

fs.readdir('./folder', (err, dir) => {
  if (err) {
    throw err;
  }
  console.log('Check folder', dir);
  fs.unlink('./folder/newFile.js', (err) => {
    if (err) {
      throw err;
    }
    console.log('Remove file');
    fs.rmdir('./folder', (err) => {
      if (err) {
        throw err;
      }
      console.log('Removed folder');
    });
  });
});