const tableGenerator = {

    randomNumber(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    },

    generateIncTable(lng) {
        return new Array(lng).fill(0).map((el, i) => i);
    },

    generateRandomTable(lng, min, max) {
        const tab = [];
        for (let i=0; i<lng; i++) {
            tab.push(this.randomNumber(min, max));
        }
        return tab;
    },

    generateTableFromText(str) {
		if (typeof str === 'string') {
			return str.split(' ');
		} else {
			return [];
		}
    },

    getMaxFromTable(arr) {
    	return Math.max(...arr);
    },

    getMinFromTable(arr) {
		return Math.min(...arr);
    },

    delete(arr, index) {
        arr.splice(index, 1);
    },
}

const incArr = tableGenerator.generateIncTable(10);
console.log(incArr);

const randArr = tableGenerator.generateRandomTable(10, 1, 50);
console.log(randArr);

console.log(tableGenerator.getMinFromTable(randArr));
console.log(tableGenerator.getMaxFromTable(randArr));

console.log(randArr);
tableGenerator.delete(randArr, 2);
console.log(randArr);
