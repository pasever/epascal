'use strict';

const fs = require('fs');

fs.readFile('resume.txt', 'utf8', (err, data) => {
    
    try {
      console.log(data);
    }
   
    catch (err) { console.error( err ) }
  
});