# Zadania - obiekty - konstruktor

## Zadanie 1
Chcesz stworzyć 3 obiekty typu **Car**. Każdy samochód powinien mieć ustawione właściwości podawane przy tworzeniu obiektu:
- **name** - string,
- **brand** - string,
- **engine** - string,
- **mile** - number,
- **age** - number,

metodę **printDetails()**, która wypisze powyższe właściwości.
Wykorzystaj w tym zadaniu prototyp.

## Zadanie 2
Stwórz konstruktor **Enemy**.
Każdy obiekt budowany na jego bazie powinien mieć właściwości:
- **name** - string - podawane przy tworzeniu - nazwa przeciwnika
- **live** - number - ustawione na sztywno na 5
- **speed** - number - podawany przy tworzeniu
- **attack** - number - podawane przy tworzeniu instancji obiektu
- **posX** - number - podawane przy tworzeniu instancji obiektu

Za pomocą prototypu stwórz metody:
- metodę **move()**, która ustawi przeciwnika w nowej pozycji. Pozycję wylicz odejmując od posX szybkość danego obiektu. Funkcja dodatkowo niech wypisze tekst w konsoli "Jestem NNN. Znajduję się na pozycji XXX", w którym wstaw odpowiednie właściwości obiektu.
- metodę **attackEnemy()**, która wypisze w konsoli tekst `Jestem NNN. Atakuję gracza z pozycji X z siłą XXX` wstawiając do niego odpowiednie właściwości obiektu
- metodę **hit()**, która odejmie przeciwnikowi jeden punkt życia (live). Dodatkowo niech wypisze w konsoli tekst `Jestem NNN. Mam teraz życia LLL`.

Stwórz 2 obiekty typu Enemy. Odpal dla niech kilka razy metodę `move()`. Odpal dla każdego z nich metodę `attack()`. Dla drugiego z nich odpal 2x metodę `hit()`.

## Zadanie 3
Rozbuduj obiekty typu String, dodając do ich prototypu metodę **String.sortText(char)**.
Po użyciu powinna ona sortować słowa w danym tekście, a następnie zwracać podobny tekst, tylko posortowany:
```
"Marcin-Ania-Piotrek-Beata".sortText('-');

---> "Ania-Beata-Marcin-Piotrek"
```

Wykorzystaj odpowiednie metody dzielące tekst na tablicę, sortujące tablicę i łączące ją w tekst.

## Zadanie 4
Rozbuduj obiekty typu String dodając im metodę **reverse()**, która po odpaleniu dla tekstu zwróci jego odbicie:

```
"Ala ma kota".mirror() === "atok am alA"
```

## Zadanie 5
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
*/