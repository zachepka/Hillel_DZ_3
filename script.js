const ryadok1 = prompt('First ryadok:');
const ryadok2 = prompt('Second ryadok:');
const ryadok3 = prompt('Thrid ryadok:');

if (ryadok1.trim() === '') {
    console.log("Pole ne moze buty poroznim!");
}
if (ryadok2.trim() === '') {
    console.log("Pole ne moze buty poroznim!");
}
if (ryadok3.trim() === '') {
    console.log("Pole ne moze buty poroznim!");
}

console.log(`${ryadok1}${ryadok2}${ryadok3}`);