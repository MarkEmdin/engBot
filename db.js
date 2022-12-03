const {readFileSync, promises: fsPromises} = require('fs');

module.exports = function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr1 = contents.split('\r\n').join(' ')
    const arr2 = arr1.replace('!','.')
    // arr1.replace('!','.')
    // console.log(arr1);

    const arr = arr2.split(".");

    console.log(arr.length);

    return arr;
}


// module.exports = [
//     "It was one dollar and eighty-seven cents",
//     "Two young women, Sue and Johnsy, lived in New York",
//     "In the middle of one street the policeman suddenly began to walk slowly",
//     "There was clearly nothing to do but sit down and cry",
//     "Two young women named Sue and Johnsy shared a studio apartment at the top of a three-story building",
//     "One day Tripp came in and leaned on my table",
//     "When he leaned on my table he held one hand with the other to keep from shaking",
//     "She could see the side of the brick house next to her building"]