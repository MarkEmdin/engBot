const {readFileSync, promises: fsPromises} = require('fs');

    const contents = readFileSync("Book.txt", 'utf-8');
    const arr1 = contents.split('\r\n').join(' ')
    const arr2 = arr1.replace('!','.')
    console.log(typeof arr1 )
    console.log(typeof arr2 )

    const arr = arr2.split(".");

    console.log(arr);


