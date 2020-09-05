# Zadania - obiekty

## Zadanie 1
Stwórz obiekt o nazwie **text**.
Obiekt ten powinien mieć metody:

1. **check(txt, word)**

    która zwraca true/false jeżeli w tekście `txt` znajduje się szukane słowo `word`

    ```
    check("ala ma kota", "kota")
    ---> true
    ```

2. **getCount(txt)**

    Zwraca liczbę liter w tekście `txt`. Uwaga znaki interpunkcyjne też traktujmy jako litery

    ```
    getCount("ala ma kota")
    ---> 11
    ```

3. **getWordsCount(txt)**

    zwraca liczbę słów w przekazanym tekście

    ```
    getWordsCount("Ala ma kota")
    ---> 3
    ```

4. **setCapitalize(txt)**

    zwraca nowy tekst tak zamieniony, że każde słowo zaczyna się z dużej litery

    ```
    setCapitalize("ala ma kota")
    ---> "Ala Ma Kota"
    ```

5. **setMix(txt)**

    zwraca nowy tekst z naprzemiennie dużymi/małymi literami. Spację i znaki interpunkcyjne traktujemy jako litery.

    ```
    setMix("ala ma kota")
    ---> "aLa mA KoTa"
    ```

6. **generateRandom(lng)**

    Generuje tekst o długości lng który składa się z losowych liter

    ```
    generateRandom(10)
    ---> "dkjiuhtjox"
    ```