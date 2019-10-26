const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
  if (err) {
    if (err.code ==='ENOENT') {
      console.log('There is no folder which is named /folder');
      fs.mkdir('./folder', (err) => {
        if (err) {
          throw err;
        }
        console.log('create folder');
        fs.open('./folder/file.js','w', (err, fd) => {
          if (err) {
            throw err;
          }
          console.log('create empty folder', fd);
          fs.rename('./folder/file.js','./folder/newfile.js', (err) => {
            if (err) {
              throw err;
            }
            console.log('Chnage file name');
          });
        });
      });
    } else {
      throw err;
    }
  } else {
    console.log('Already exist the folder');
  }
});
