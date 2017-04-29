var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
animal = animal.toUpperCase();
text = text.replace('Papugi', animal);
console.log(text.slice(0,text.length/2));