var litroa, v1, v2;

function mathRandomInt(a, b) {
  if (a > b) {
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


litroa = mathRandomInt(0, 10);
window.alert(litroa);
if (litroa == 10) {
  window.alert(' El estanque esta lleno');
} else {
  v1 = 10 - litroa;
}
window.alert(String(v1) + ' Son los litros que faltan');
window.alert(' Comenzaremos con la carga del estanque');
v2 = v1 + litroa;
window.alert(String(v2) + ' El estanque esta lleno');