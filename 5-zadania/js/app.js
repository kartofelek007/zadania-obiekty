const text = {
    check(txt, word) {
        return txt.includes(word);
    },

    getCount(txt) {
        return txt.length;
    },

    getWordsCount(txt) {
        return txt.split(" ").length;
    },

    setCapitalize() {
        const tab = txt.split(" ");
        return tab.map(word => word[0].toUpperCase() + word.substr(1)).join(" ");
    },

    setMix(txt) {
        let newText = "";
        for (let i=0; i<txt.length; i++) {
            if (i % 2 === 0) {
                newText += txt[i].toUpperCase();
            } else {
                newText += txt[i].toLowerCase();
            }
        }
        return newText;
    },

    generateRandom(lng) {
        const tab = new Array(lng).fill(0);
        const tabLetters = tab.map(el => {
            const min = 65; //A
            const max = 90;
            const random = Math.floor(Math.random()*(max-min+1)+min)
            return String.fromCharCode(random)
        });
        return tabLetters.join("");
    }
}

const txt = "Ala ma kota";

console.log( text.check(txt, "kot") );
console.log( text.getCount(txt) );
console.log( text.getWordsCount(txt) );
console.log( text.setCapitalize(txt) );
console.log( text.setMix(txt) );
console.log( text.generateRandom(20) );