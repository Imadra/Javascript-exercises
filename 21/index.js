module.exports = Collection;
/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
	this.arr =  [];
}


// Методы коллекции
Collection.prototype.values = function () {
	return this.arr;
};
// другие методы
Collection.prototype.append = function (k) {
	if(k instanceof Collection){
		this.arr = this.arr.concat(k.values());
	}
	else {
		this.arr.push(k);
	}
};
Collection.prototype.count = function () {
	return this.arr.length;
};
Collection.prototype.at = function (ind) {
	if(ind <= 0 || ind > this.count())
		return null;
	else {
		return this.arr[ind-1];
	}
};
Collection.prototype.removeAt = function (ind) {
	if(ind <= 0 || ind > this.count())
		return false;
	else {
		q = this.arr.splice(ind-1, 1);
		return true;
	}
};

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arr) {
	d = new Collection();
	arr.forEach(function(el) {
		d.append(el);
	});
	return d;
};
