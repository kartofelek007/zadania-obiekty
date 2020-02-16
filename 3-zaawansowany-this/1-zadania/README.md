# Zadania - obiekty - zaawansowany this

Uwaga! To są dodatkowe zadania z obiektów. Aby je zrobić musisz poznać dodatkowy materiał dostępny na stronie:
http://kursjs.pl/kurs/obiekty/obiekty-zaawansowane-this.php

## Zadanie 1
Stwórz obiekt który ma:
- właściwość **time** - czas ok 1000
- właściwość **pets**, która zawiera tablicę kilku zwierzaków
- metodę **print()** - która po czasie `time` zrobi pętlę po tablicy pets i wypisze z osobna każde zwierzątko dużymi literami

## Zadanie 2
Mamy obiekt:

```
const ob = {
    name : "Kwiatek",

    init() {
        console.log("Nazywam się " + this.name);

        function showText() {
            console.log("Nazywam się " + this.name);
        }

        showText();
    }
}

ob.init();
```

Czy potrafisz wyjaśnić działanie powyższego kodu?


## Zadanie 2
Mamy 2 obiekty:

```
const freeza = {
    name : "Freeza",
    power : 86000000,
    print() {
        console.log(`
            Dane na temat bohatera:
            Nazwa: ${this.name}
            Moc: ${this.power}
        `);
    }
}

const goku = {
    name : "Goku",
    power : 100000000
}
```

Użyj dla goku metody `print()` z obiektu freeza. Spróbuj też stworzyć niezależną metodę dla goku za pomocą `bind()`.