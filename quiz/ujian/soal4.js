function xo(str) {
    let x = str.split('x').length - 1;
    let o = str.split('o').length - 1;
    return x === o;
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));