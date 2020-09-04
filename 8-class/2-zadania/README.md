# Zadania - class

## Zadanie 1
Stwórz klasę Pets, która:
- będzie miała 2 właściwości:
    * pets -> tablica przekazywana przy tworzeniu nowej instancji - np. trzy nazwy zwierząt pisane małymi literami
    * query -> selektor przekazywany przy tworzeniu nowej instancji (np. ".button", "#button" itp)
- będzie miała metodę showPets.
    Metoda ta powinna wypisać tekst "liczba zwierząt: X" gdzie x to liczba zwierząt

- będzie miała metodę bindButton
    W metodzie tej pobierz przycisk (wykorzystaj do tego przekazany wcześniej selektor!!!)
    i podstaw pod niego kliknięcie.
    Po kliknięciu na ten guzik ma być odpalona metoda showPets

## Zadanie 2
Stwórz klasę dziedziczącą PetsBig, która w metodzie showPets pokaże tekst z głównej klasy,
oraz kolejno zwierzęta pisane dużymi literami np.
"Liczba zwierząt: 5"
"KOT",
"PIES"

## Zadanie 3
Stwórz klasę dziedziczącą PetsSmall, która w showPets pokaże tekst z głównej klasy
oraz zwierzęta pisane małymi literami

## Zadanie 4
Stwórz instancje na bazie klas PetsBig i PetsSmall. Odpal dla nich metodę bindButton.