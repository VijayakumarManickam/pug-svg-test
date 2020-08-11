const pug = require( 'pug');

const failedCount = 0;
const passedCount = 73;
const skippedCount = 3;
const totalCount = failedCount + passedCount + skippedCount;
const diameter = 400;
const circumference = diameter*3.14/2; // Pi*r
const failedPie = (circumference*(failedCount/totalCount)) + ' ' + circumference;
const passedPie = 0 + ' ' + (circumference*(failedCount/totalCount)) + ' ' + circumference;
const skippedPie = 0 + ' '+ (circumference*(failedCount + passedCount)/totalCount) +' ' + circumference;
const html = pug.renderFile('svg-test.pug', {
    pageTitle:'welcome any time', 
    diameter: diameter, 
    passed: passedPie, 
    failed: failedPie, 
    skipped: skippedPie, 
    passedColor: 'green',
    failedColor: 'red',
    skippedColor: 'yellow'
});
console.log(html);