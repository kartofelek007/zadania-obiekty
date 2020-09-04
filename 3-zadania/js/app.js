const book = {
    users : [],

    addUser(name, age, phone) {
        const user = {name, age, phone};
        this.users.push(user);
    },

    showUsers() {
        console.log(`Wszyscy użytkownicy w książce`);
        this.users.forEach(el => {
            console.log(el);
        });
    },

    findByName(name) {
        return this.users.find(el => el.name === name);
    },

    findByPhone(phone) {
        return this.users.find(el => el.phone === phone);
    },

    getCount() {
        return this.users.length;
    }
}

book.addUser("Marcin", 10, "500600700");
book.addUser("Mariola", 15, "700700700");
book.addUser("Ania", 20, "666700500");
book.addUser("Agnieszka", 32, "666777999");
console.log(book.findByName("Ania"))
console.log(book.findByPhone("666777999"))
console.log(book.getCount())
