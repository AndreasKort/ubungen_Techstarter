// Hausaufgabe Kort Andreas 05.09.2023
let buch = {
    titel: "Seelen",
    autor: "Stephenie Meyer",
    jahr: 1915,
    information() {
        return `${this.titel} von ${this.autor}, veröffentlicht im Jahr ${this.jahr}`;
    }
};

buch.jahr = 1912;

console.log(buch.information());
console.log(buch);
