// ALL ABOUT PATH MODULE
const path = require("node:path");
console.log(__dirname);
console.log(__filename);


console.log(path.basename(__filename),'Get name of file along with extension');
console.log(path.basename(__dirname),'Get name of folder along with extension');


console.log(path.extname(__filename),'extension Name of the file');
console.log(path.extname(__dirname),'extension Name of the folder');

console.log(path.parse(__filename),'filename parsing');
console.log(path.parse(__dirname),'directory parsing');

const fileInfo = path.parse(__filename);

console.log(fileInfo.name);

console.log(path.format(path.parse(__filename)),'filename parsing');
console.log(path.format(path.parse(__dirname)),'directory parsing');
console.log(path.isAbsolute('../add.js')); //False
console.log(path.isAbsolute(__filename)); //True

console.log(path.join("folder1","folder2","folder3",'index.html'));
 
console.log(path.resolve(__dirname,'index.js'));
console.log(path.resolve('folder1','folder2','index.html'));
console.log(path.resolve());