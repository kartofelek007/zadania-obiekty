// ## Zadanie 1
// Chcesz stworzyć 3 obiekty typu **Car**. Każdy samochód powinien mieć ustawione właściwości podawane przy tworzeniu obiektu:
// - **name** - string,
// - **brand** - string,
// - **engine** - string,
// - **mile** - number,
// - **age** - number,


// function Car(name, brand, engine, mile, age) {
//     this.name = name;
//     this.brand = brand;
//     this.engine = engine;
//     this.mile = mile;
//     this.age = age;
// }

// Car.prototype.printDetails = function() {
//     console.log(`
//         Informacje o samochodzie:
//         Nazwa: ${this.name}
//         Marka: ${this.brand}
//         Silnik: ${this.engine}
//         Przejechano: ${this.mile} mil
//         Wiek: ${this.age}
//     `)
// }

class Car {
    constructor(name, brand, engine, mile, age) {
        this.name = name;
        this.brand = brand;
        this.engine = engine;
        this.mile = mile;
        this.age = age;
    }

    printDetails() {
        console.log(`
            Informacje o samochodzie:
            Nazwa: ${this.name}
            Marka: ${this.brand}
            Silnik: ${this.engine}
            Przejechano: ${this.mile} mil
            Wiek: ${this.age}
        `)
    }
}

const car1 = new Car("Maluch", "Fiat", "100", 10, 0);
console.log(car1);



// ## Zadanie 2
// Stwórz konstruktor **Enemy**.
// Każdy obiekt budowany na jego bazie powinien mieć właściwości:
// - **name** - string - podawane przy tworzeniu - nazwa przeciwnika
// - **live** - number - ustawione na sztywno na 5
// - **speed** - number - podawany przy tworzeniu
// - **attack** - number - podawane przy tworzeniu instancji obiektu
// - **posX** - number - podawane przy tworzeniu instancji obiektu

// Za pomocą prototypu stwórz metody:
// - metodę **move()**, która ustawi przeciwnika w nowej pozycji. Pozycję wylicz odejmując od posX szybkość danego obiektu. Funkcja dodatkowo niech wypisze tekst w konsoli "Jestem NNN. Znajduję się na pozycji XXX", w którym wstaw odpowiednie właściwości obiektu.
// - metodę **attackEnemy()**, która wypisze w konsoli tekst `Jestem NNN. Atakuję gracza z pozycji X z siłą XXX` wstawiając do niego odpowiednie właściwości obiektu
// - metodę **hit()**, która odejmie przeciwnikowi jeden punkt życia (live). Dodatkowo niech wypisze w konsoli tekst `Jestem NNN. Mam teraz życia LLL`.

// Stwórz 2 obiekty typu Enemy. Odpal dla niech kilka razy metodę `move()`. Odpal dla każdego z nich metodę `attack()`. Dla drugiego z nich odpal 2x metodę `hit()`.


// function Enemy(name, live, speed, attack, posX) {
//     this.name = name;
//     this.live = live;
//     this.speed = speed;
//     this.attack = attack;
//     this.posX = posX;
// }

// Enemy.prototype.move = function(newPos) {
//     this.posX = newPos;
// }

// Enemy.prototype.attackEnemy = function() {
//     console.log(`Jestem ${this.name}. Atakuję gracza z pozycji ${this.posX} z siłą ${this.attack}`)
// }

// Enemy.prototype.hit = function() {
//     this.live--;
//     if (this.live > 0) {
//         console.log(`Jestem ${this.name}. Mam teraz życia ${this.live}`);
//     } else {
//         console.log(`Jestem ${this.name} i właśnie umarłem`);
//     }
// }


class Enemy {
    constructor(name, live, speed, attack, posX) {
        this.name = name;
        this.live = live;
        this.speed = speed;
        this.attack = attack;
        this.posX = posX;
    }

    move(newPos) {
        this.posX = newPos;
    }

    attackEnemy() {
        console.log(`Jestem ${this.name}. Atakuję gracza z pozycji ${this.posX} z siłą ${this.attack}`)
    }

    hit() {
        this.live--;
        if (this.live > 0) {
            console.log(`Jestem ${this.name}. Mam teraz życia ${this.live}`);
        } else {
            console.log(`Jestem ${this.name} i właśnie umarłem`);
        }
    }
}

const enemy1 = new Enemy("ship", 5, 6, 3, 102);
enemy1.move(10);
enemy1.attackEnemy();
enemy1.hit();
enemy1.hit();
enemy1.hit();
enemy1.hit();
enemy1.hit();


// ## Zadanie 3
// Rozbuduj obiekty typu String, dodając do ich prototypu metodę **String.sortText(char)**.
// Po użyciu powinna ona sortować słowa w danym tekście, a następnie zwracać podobny tekst, tylko posortowany:
// ```
// "Marcin-Ania-Piotrek-Beata".sortText('-');

// ---> "Ania-Beata-Marcin-Piotrek"
// ```
// Wykorzystaj odpowiednie metody dzielące tekst na tablicę, sortujące tablicę i łączące ją w tekst.

String.prototype.sortText(char) = function(char) {
    const tab = this.split(char);
    tab.sort((a, b) => a.localCompare(b));
    return tab.join(char);
}

console.log( "Marcin-Ania-Piotrek-Beata".sortText('-') );

// ## Zadanie 4
// Rozbuduj obiekty typu String dodając im metodę **reverse()**, która po odpaleniu dla tekstu zwróci jego odbicie:

// ```
// "Ala ma kota".mirror() === "atok am alA"
// ```

String.prototype.mirror = function() {
    return [...this].reverse().join("");
}

console.log("kot".mirror())

// ## Zadanie 5
// Rozbuduj obiekty typu Array o 2 nowe metody:

// **sum()**
// która użyta dla danej tablicy numerów zwraca jej sumę.

// ```
// [1,2,3].sum() === 6
// ```

// **sortNr()**
// która poprawnie sortuje tablicę liczb

// ```
// [1,1.2,11,22,2.1].sortNr() === [1,1.2,2.1,11,22]
// ```

Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b);
}

console.log([1,2,3,4,5].sum())

Array.prototype.sortNr = function() {
    return this.sort((a, b) => a - b);
}

console.log([1,1.2,11,22,2.1].sortNr());
