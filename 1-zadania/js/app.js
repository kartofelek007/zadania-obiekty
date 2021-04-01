// ## Zadanie 1
{
    const prod1 = {
        name : "Marchewka",
        price : 8,
        weight : 1.5
    }

    const prod2 = {
        name : "Buraki",
        price : 10,
        weight : 1.3
    }

    function printProduct(ob1, ob2) {
        console.log(`
            Produkt numer jeden to: ${ob1}
            Produkt numer dwa to: ${ob2}
            Produkty kosztują razem: ${ob1.price + ob2.price}zł
            Produkty ważą razem: ${ob1.weight + ob2.weight}zł
        `);
    }

    printProduct(prod1, prod2);
}


// ## Zadanie 2
{
    const ob = {
        name: "Marcin",
        surname : "Nowak",
        email : "marcin.nowak@gmail.com",
        userType : "editor",

        show() {
            console.log("Imię: ", this.name);
            console.log("Nazwisko: ", this.surname);
            console.log("Email:", this.email);
            console.log("Typ użytkownika:", this.userType);
        }
    }

    ob.show();
}



// ## Zadanie 3
{
    const book = {
        title: "Tytus Romek i Atomek",
        author: "Henryk Jerzy Chmielewski",
        pageCount : 102,
        publisher: "Nie wiem :)",

        showDetails() {
            for (let [key, val] of Object.entries(this)) {
                //if (key !== "showDetails")
                if (typeof val !== "function") {
                    console.log(`klucz: ${key}, wartość: ${val}`);
                }
            }
        }
    }

    book.showDetails();
}
