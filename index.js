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
document.body.innerHTML += "<strong>Suda cisla:</strong>";


// 6.
document.body.innerHTML += "<strong>Cisla, jejich absolutni hodnota je delitelna tremi:</strong>";


// 7.
document.body.innerHTML += "<strong>Vzdalenost cisla od cisla pet:</strong>";


// 8.
document.innerHTML += "<strong>Druhe mocniny vzdalenosti vsech cisel od cisla pet:</strong>";


// 9.
document.innerHTML += "<strong>Pocet zapornych cisel v seznamu:</strong>";


// 10.
document.body.innerHTML += "<strong>Soucet vsech cisel v poli:</strong>";
numbers.forEach((number) => {
  document.body.innerHTML += `<p></p>`
}
);


// 11.
document.body.innerHTML += "<strong>Prumer vsech cisel poli:</strong>";


// 12.
document.body.innerHTML += "<strong>Soucet vsech kladnych cisel v poli:</strong>";
