// https://oliverbalfour.github.io/javascript/2016/03/19/1d-perlin-noise.html

var canvas = document.getElementById('world');
var ctx = canvas.getContext('2d');
w = canvas.width;
h = canvas.height;

var M = 4294967296;
var A = 1664525;
var C = 1;
var Z = Math.floor(Math.random() * M);

function rand() {
  Z = (A * Z + C) % M;
  return Z / M - 0.5;
}

function interpolate(pa, pb, px) {
  var ft = px * Math.PI
  var f = (1 - Math.cos(ft)) * 0.5;
  return pa * (1 - f) + pb * f;
}

var x = 0;
var y = h / 2;
var amp = 100;
var wl = 100;
var fq = 1 / wl;
var a = rand();
var b = rand();

function generate() {
  var value = [];
  while (x < w) {
    if (x % wl === 0) {
      a = b;
      b = rand();
      y = h / 2 + a * amp;
    } else {
      y = h / 2 + interpolate(a, b, (x % wl) / wl) * amp;
    }
    value.push(y);
    x += 1;
  }
  return value;
}
