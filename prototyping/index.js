const arr1 = ["man", "women"];
console.log(arr1);

const name = "Noman";
Object.prototype.trueLength = function () {
  console.log(`this is the true length of an variable ${this.trim().length}`);
};

console.log(name.trueLength());
