module.exports = function reverse (n) {
    let s = "";
    const n1 = String(n);
    for (let i = n1.length-1; i >= 0; i--){
      if (n1[i] != "-") {
        s = s + n1[i];
      }
      console.log(n1[i]);
    }
    console.log(s);
    return s;
}
