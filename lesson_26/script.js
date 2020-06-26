//1
//2
//3
<<<<<<< HEAD
=======
//27.01
>>>>>>> lesson_27
function Cars(brandName, model, productionYear) {
	this.brandName = brandName;
	this.model = model;
	this.productionYear = productionYear;
}
let bmw = _.create(Cars.prototype, {
	brandName: 'BMW',
	model: 'X7',
	productionYear: '2020'
});
console.log(bmw);
let invertBmw = _.invert(bmw);
console.log(invertBmw)

let pickBmw = _.pick(bmw, 'brandName', 'productionYear');
console.log(pickBmw)
let omitBmw = _.omit(bmw, 'model');
console.log(omitBmw)