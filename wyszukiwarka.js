let wynik = new Array;

function znajdz(name, surname){
    name = document.getElementById(`imie`);
    surname = document.getElementById(`nazwisko`);
    this.name = name.value;
    this.surname = surname.value;
    wynik = personArray.filter(person => person[0] === name.value && person[1] === surname.value);
    console.log("wynik:");
    if(wynik.length !== 0){
        console.log(`Wynik wyszukiawnia ${name.value} ${surname.value} to ${wynik}`);
        document.getElementById("wyniki").innerHTML = `Wynik wyszukiawnia ${name.value} ${surname.value} to ${wynik}`;
    } else {
        console.log("Niczego nie wyszukano.");
        document.getElementById("wyniki").innerHTML = `Niczego nie wyszukano.`;
    }
}