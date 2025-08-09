import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
 

inquirer
  .prompt([
   {
     message: 'Type in your URL',
     name: 'url'
   }
  ])
  .then((answers) => {
   const URL=answers.url;
    var qr_png = qr.image(URL);
    qr_png.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile('URL.txt', URL, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });