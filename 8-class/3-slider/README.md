# Zadania - Class

## Zadanie 1
Do pliku index.html dołączone są 2 pliki js: slider.js, w którym jest klasa Slider, którą pisaliśmy [tutaj](https://kursjs.pl/kurs/dom/slider.php).
W pliku app.js przygotowany jest dodatkowy kod klasy MySlider, który na jej dole jest wykorzystany do stworzenia pojedynczej instancji.

Klasa ta ma w sobie funkcje odpowiedzialne za stworzenie i rysowanie okrągłego progress baru.

Po pierwsze przeanalizuj i przypomnij sobie jak stworzyliśmy klasę Slider. W konstruktorze ustawia ona sobie kilka właściwości, ale też odpala 2 funkcje: `generateSlider()` i `changeSlide(this.currentSlide)` (linijki 22,23)

Twoim celem będzie tak zmodyfikować klasę `MySlider`, by rozszerzała funkcjonalność klasy Slider o pokazywanie progress baru.

## Zadanie 1
W swoim konstruktorze klasa powinna odpalać kod konstruktora z klasy Slider przekazując do niej wszystkie parametry jakie dosłała przy tworzeniu pojedynczej instancji. Użyj tutaj rest i spread operatora.

## Zadanie 2
Rozszerz funkcję `generateSlider()`. Na początku powinna ona odpalać kod z klasy Slider, a następnie jeżeli w konfiguracji slidera został ustawiony parametr pauseTime na większy niż 0 funkcja powinna też odpalać funkcję `createTimer()` i `startTimer()`.

## Zadanie 3
Jeżeli przeanalizowałeś artykuł o budowaniu slidera, wiesz, że przy zmianie slidera odpalana jest metoda `changeSlide()`. W klasie MySlider rozszerz tą metodę tak, by na jej początku odpalany był oryginalny kod, a następnie uruchamiana była funkcja `startTimer()`.

## Dodatkowe
Dodatkowo za pomocą Object.assign w podobny sposób jak robiliśmy to przy sliderze, możesz pokusić się o rozbudowanie obiektu options o np. właściwość `showProgress`, która będzie mówić nam czy ma być pokazywany progress bar. Wykorzystaj tutaj podejście zastosowane w konstruktorze klasy Slider.




