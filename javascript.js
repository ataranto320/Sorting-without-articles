const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim(); //regular expression/carrot. look into this. i = incensitive
}
 
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// const sortedBands = bands.sort(function (a, b) {
//     return strip(a) > strip(b) ? 1 : -1; // one way
//     // if (strip(a) > strip(b)) { // another way
//     //     return 1;
//     // } else {
//     //     return -1;
//     // }
// });

document.querySelector('#bands'),innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

console.log(sortedBands);