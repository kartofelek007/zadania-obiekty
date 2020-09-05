# Zadania - obiekty

## Zadanie 1
Chcesz stworzyć 3 obiekty typu **Car**.
Każdy samochód powinien mieć ustawione właściwości:
- **name** - string,
- **brand** - string,
- **engine** - string,
- **mile** - number,
- **age** - number,

oraz metodę **printDetails()**, która ładnie wypisze powyższe właściwości.

## Zadanie 2
Stwórz klasę **Enemy**.
Każdy obiekt budowany na jego bazie powinien mieć właściwości:
- **name** - string - podawane przy tworzeniu - nazwa przeciwnika
- **live** - number - ustawione na sztywno na 5
- **speed** - number - podawany przy tworzeniu
- **attack** - number - podawane przy tworzeniu instancji obiektu
- **posX** - number - podawane przy tworzeniu instancji obiektu

Każdy obiekt powinien mieć metody:
- metodę **move()**, która ustawi przeciwnika w nowej pozycji. Pozycję wylicz odejmując od posX szybkość danego obiektu. Funkcja dodatkowo niech wypisze tekst w konsoli "Jestem NNN. Znajduję się na pozycji XXX", w którym wstaw odpowiednie właściwości obiektu.
- metodę **attackEnemy()**, która wypisze w konsoli tekst `Jestem NNN. Atakuję gracza z pozycji X z siłą XXX` wstawiając do niego odpowiednie właściwości obiektu
- metodę **hit()**, która odejmie przeciwnikowi jeden punkt życia (live). Dodatkowo niech wypisze w konsoli tekst `Jestem NNN. Mam teraz życia LLL`.

Stwórz 2 obiekty typu Enemy. Odpal dla niech kilka razy metodę `move()`. Odpal dla każdego z nich metodę `attack()` i metodę `hit()`.

## Zadanie 3
Stwórz klasę `Slider`. Obiekty budowane na jej bazie powinny mieć właściwości:
- type
- slideCount
- currentSlide
metody:
- showSlide - która wypisze w konsoli tekst "pokazuję slajd X"
- nextSlide - która zwiększa obecny slajd, a dodatkowo odpali metodę `showSlide()`
- prevSlide - która zmniejsza obecny slajd, a dodatkowo odpali metodę `showSlide()`

Stwórz klasę `SliderAnime`, która będzie rozszerzać klasę `Slider`.
Klasa powinna dziedziczyć konstruktor klasy `Slider`, a dodatkowo zmieni typ na "animowany".

Klasa ta powinna mieć też dodatkową metodę `animate()`, która po odpaleniu pokaże tekst `animuję slajd X`, gdzie x będzie numer obecnego slajdu. Metoda ta powinna być odpalana zarówno przy pokazywaniu poprzedniego jak i następnego slajdu.

Stwórz 2 obiekty na bazie powyższych klas. Odpal dla nich wszystkie metody.

## Zadanie 4
Rozbuduj obiekty typu String, dodając do ich prototypu metodę **String.sortText(char)**.
Po użyciu powinna ona sortować słowa w danym tekście, a następnie zwracać podobny tekst, tylko posortowany:
```
"Marcin-Ania-Piotrek-Beata".sortText('-');

---> "Ania-Beata-Marcin-Piotrek"
```

Wykorzystaj odpowiednie metody dzielące tekst na tablicę, sortujące tablicę i łączące ją w tekst.

## Zadanie 5
Rozbuduj obiekty typu String dodając im metodę **reverse()**, która po odpaleniu dla tekstu zwróci jego odbicie:

```
"Ala ma kota".mirror() === "atok am alA"
```

## Zadanie 6
Rozbuduj obiekty typu Array o 2 nowe metody:

**sum()**
która użyta dla danej tablicy numerów zwraca jej sumę.

```
[1,2,3].sum() === 6
```

**sortNr()**
która poprawnie sortuje tablicę liczb

```
[1,1.2,11,22,2.1].sortNr() === [1,1.2,2.1,11,22]
```