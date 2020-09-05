// ## Zadanie 1
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
class Slider {
    constructor() {
        this.type = "normal";
        this.slideCount = 5;
        this.currentSlide = 0;
    }

    showSlide() {
        console.log(`Pokazuję slajd ${this.currentSlide}`);
    }

    nextSlide() {
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = this.slideCount;
        }
        this.showSlide();
    }

    prevSlide() {
        this.currentSlide++;
        if (this.currentSlide > this.slideCount) {
            this.currentSlide = 0;
        }
        this.showSlide();
    }
}

class SliderAnime extends Slider {
    constructor(...param) {
        super(...param);
        this.type = "anime";
        console.log("jestem animowany");
    }

    animate() {
        console.log(`animuję slajd ${this.currentSlide}`);
    }

    showSlide(...param) {
        super.showSlide(...param);
        this.animate();
    }
}

const slider1 = new Slider();
slider1.nextSlide();
slider1.prevSlide();
console.log(" ");
const slider2 = new SliderAnime();
slider2.prevSlide();
slider2.nextSlide();

// ## Zadanie 4
String.prototype.sortText(char) = function(char) {
    const tab = this.split(char);
    tab.sort((a, b) => a.localCompare(b));
    return tab.join(char);
}

console.log( "Marcin-Ania-Piotrek-Beata".sortText('-') );

// ## Zadanie 5
String.prototype.mirror = function() {
    return [...this].reverse().join("");
}

console.log("kot".mirror())

// ## Zadanie 6
Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b);
}

console.log([1,2,3,4,5].sum())

Array.prototype.sortNr = function() {
    return this.sort((a, b) => a - b);
}

console.log([1,1.2,11,22,2.1].sortNr());
