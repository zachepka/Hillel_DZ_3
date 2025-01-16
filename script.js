const ryadok1 = prompt('First ryadok:');
const ryadok2 = prompt('Second ryadok:');
const ryadok3 = prompt('Third ryadok:');

if (ryadok1.trim() === '') {
    console.log("Pole ne moze buty poroznim!");
} else if (ryadok2.trim() === '') {
    console.log("Pole ne moze buty poroznim!");
} else if (ryadok3.trim() === '') {
    console.log("Pole ne moze buty poroznim!");
} else {
    const ryadky = [ryadok1, ryadok2, ryadok3];
    console.log(`${ryadky[1]} ${ryadky[2]} ${ryadky[0]}`);
}