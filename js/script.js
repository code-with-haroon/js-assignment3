
let cities = ["Faisaladab",  "Karachi", "Lahore","Quetta","Pashawer", "pindi", "Gojra"];

// Simple Alert
function SimpleAlert(){
    alert ("This is a simple Alert!");
}
// print myname
function printMyName(){
    let myName =document.getElementById("inputText").value;
    if (myName === ""){
        alert("please type your name");
        return;
    }
    document.getElementById("output").innerHTML= myName;
}
// clear input
function clearInput(){
    document.getElementById("inputText").value ="";
    document.getElementById("output").innerHTML= "";
}
// Clear output
function clearOutputButton(){
    document.getElementById("output").innerHTML= "";
}
// print all cities
function printAllCities(){
    // let cities = ["Faisaladab",  "Karachi", "Lahore","Quetta","Pashawer", "pindi", "Gojra"];
    document.getElementById('output').innerHTML="";
    
    for (i=0; i< cities.length; i++){

        let num= i + 1;
        document.getElementById('output').innerHTML += num + ' ) ' + cities[i] + '<br>';
    }
}
// Add city into list
function addCity(){
    
    let city= document.getElementById("inputText").value;
    if(!city) {
        alert("Please type your city name.");
        return;
    }
    cities.push(city);
    document.getElementById("output").innerHTML= city;

}
// generate table
function generateTable(){
    let number= document.getElementById("inputText").value;
    if(!number) {
        alert("Please enter a number.");
        return;
    }
    let limit = +prompt("Give a number")
    document.getElementById("output").innerHTML= "";
    for (let index =1; index <= limit; index++){

        document.getElementById('output').innerHTML += number + " * " + index + " = " + number * index + "<br>";
    }
}
