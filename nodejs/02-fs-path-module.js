// 02. Node.js Fundamentals: File System (fs) & Path Modules
const fs = require('fs');
const path = require('path');

const sampleFile = path.join(__dirname, 'sample.txt');

// 1. Write file asynchronously
fs.writeFile(sampleFile, 'Hello, Node.js File System!', (err) => {
  if (err) throw err;
  console.log('File written successfully.');

  // 2. Read file
  fs.readFile(sampleFile, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);

    // 3. Append to file
    fs.appendFile(sampleFile, '\nAppended line via fs.appendFile.', (err) => {
      if (err) throw err;
      console.log('Content appended.');
    });
  });
});
