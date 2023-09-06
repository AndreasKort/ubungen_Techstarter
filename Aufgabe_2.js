// Hausaufgabe Kort Andreas 05.09.2023
Javascript
let Mensch = {
  name: "Maxi Mustermuß",
  alter: 34,
  BirthdayFestival: function() {
    this.alter++;
  }
};

console.log(Mensch.alter); 
Mensch.BirthdayFestival(); 
console.log(Mensch.alter); 
