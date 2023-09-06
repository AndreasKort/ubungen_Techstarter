// Kort Andreas 05.09.2023
let buch = {
    titel: "Seelen",
    autor: "Stephenie Meyer",
    jahr: 1912,
    information() {
        return `${this.titel} von ${this.autor}, veröffentlicht im Jahr ${this.jahr}`;
    }
};

delete buch.autor;

console.log(buch);
