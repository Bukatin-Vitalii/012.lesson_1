class Hamburger {
	constructor(size, stuffing) {
		this.size = size;
		this.stuffing = stuffing;
		this.toppings = [];
	}

	addTopping(topping) {
		if (!this.toppings.includes(topping)) {
			this.toppings.push(topping);
		}
	}

	removeTopping(topping) {
		if (this.toppings.includes(topping)) {
			this.toppings.splice(this.toppings.indexOf(topping), 1);
		}
	}

	getToppings() {
		return this.toppings;
	}

	getSize() {
		return this.size;
	}

	getStuffing() {
		return this.stuffing;
	}

	calculatePrice() {
		let price = 0;
		price += this.getSize().price;
		price += this.getStuffing().price;
		this.getToppings().forEach(element => {
			price += element.price;
		});
		return price;
	}

	calculateCalories() {
		let calories = 0;
		calories += this.getSize().calories;
		calories += this.getStuffing().calories;
		this.getToppings().forEach(element => {
			calories += element.calories;
		});
		return calories;
	}
}

Hamburger.SIZE_SMALL = {
	price: 50,
	calories: 20
};

Hamburger.SIZE_LARGE = {
	price: 100,
	calories: 40
};

Hamburger.STUFFING_CHEESE = {
	price: 10,
	calories: 20
};

Hamburger.STUFFING_SALAD = {
	price: 20,
	calories: 5
};

Hamburger.STUFFING_POTATO = {
	price: 15,
	calories: 10
};

Hamburger.TOPPING_MAYO = {
	price: 20,
	calories: 5
};

Hamburger.TOPPING_SAUCE = {
	price: 15,
	calories: 0
};

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());

// я вирішив видалити майонез
hamburger.removeTopping(Hamburger.TOPPING_MAYO);

// А скільки тепер коштує?
console.log("Price without sauce: " + hamburger.calculatePrice());

console.log(hamburger)