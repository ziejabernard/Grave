//baza:)danych
let personArray = new Array;
personArray[0] = ["Jan", "Nowak", 1, "01.01.1999"];
personArray[1] = ["Adam", "Nowak", 2, "02.02.2000"];
personArray[2] = ["Bogdan", "Mazur", 3, "03.03.2001"];
personArray[3] = ["Bogdan", "Mazur", 4, "04.04.2001"];
personArray[4] = ["Bogdan", "Witkowski", 5, "05.03.2001"];

function znajdz(name, surname){
    name = document.getElementById(`imie`);
    surname = document.getElementById(`nazwisko`);
    this.name = name.value;
    this.surname = surname.value;
    wynik = personArray.filter(person => person[0] === name.value && person[1] === surname.value);
    console.log("wynik:");
    console.log(`Wynik wyszukiawnia ${name.value} ${surname.value} to ${wynik}`);
}