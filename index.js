const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

// 1.
document.body.innerHTML += "<strong>Vsechna cisla v seznamu:</strong>";
numbers.forEach((number) => {
  document.body.innerHTML += `<p>${number}</p>`;
});

// 2.
document.body.innerHTML += "<strong>Druha mocnina vsech cisel v seznamu:</strong>";
numbers.forEach((number) => {
  document.body.innerHTML += `<p>${number * number}</p>`
});


// 3.
document.body.innerHTML += "<strong>Zaporna cisla v seznamu jsou:</strong>";
numbers.forEach((number) => {
  if (number < 0) {
  document.body.innerHTML += `<p>${number}</p>`
  }
});


// 4.
document.body.innerHTML += "<strong>Absolutni hodnota cisel v seznamu:</strong>";
numbers.forEach((number) => {
  document.body.innerHTML += `<p>${Math.abs(number)}</p>`
});


// 5.
document.body.innerHTML += "<strong>Suda cisla v seznamu jsou:</strong>";
numbers.forEach((number) => {
  if (number % 2 === 0) {
  document.body.innerHTML += `<p>${number}</p>`
  }
});


// 6.
document.body.innerHTML += "<strong>Cisla, jejichz absolutni hodnota je delitelna tremi:</strong>";
numbers.forEach((number) => {
  if (Math.abs(number) % 3 === 0) {
    document.body.innerHTML += `<p>${number}</p>`
  }
});


// 7.
document.body.innerHTML += "<strong>Vzdalenost kazdeho cisla v seznamu od cisla pet:</strong>";
numbers.forEach((number) => {
  document.body.innerHTML += `<p>${number - 5}</p>`
});


// 8.
document.body.innerHTML += "<strong>Druhe mocniny vzdalenosti vsech cisel od cisla pet:</strong>";
numbers.forEach((number) => {
  const vzdalenost = number - 5;
  document.body.innerHTML += `<p>${vzdalenost * vzdalenost}</p>`
});

// 9.
document.innerHTML += "<strong>Pocet zapornych cisel v seznamu:</strong>";
numbers.forEach((number) => {
});


// 10.
document.body.innerHTML += "<strong>Soucet vsech cisel v poli:</strong>";
let totalNumber = 0;

numbers.forEach((number) => {
  totalNumber = totalNumber + number;
});
document.body.innerHTML += `<p>${totalNumber}</p>`


// 11.
document.body.innerHTML += "<strong>Prumer vsech cisel poli:</strong>";
let average = 0;
let sum = 0;

numbers.forEach((number) => {
  sum = sum + number;
});

average = sum / numbers.length;

document.body.innerHTML += `<p>${average}</p>`;

// 12.
document.body.innerHTML += "<strong>Soucet vsech kladnych cisel v poli:</strong>";
