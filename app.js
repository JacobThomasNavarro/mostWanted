"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchTrait(people);
      break;
    default:
      app(people); // restart app
      break;
  }
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
     displayPerson(person[0]);
      // TODO: get person's info
    break;
    case "family":
    searchByFamily(person[0]);
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);
  let person = [];

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n"; 
  personInfo += "Gender: " + person.gender + "\n"; 
  personInfo += "DOB: " + person.dob + "\n"; 
  personInfo += "Height: " + person.height + "\n"; 
  personInfo += "Weight: " + person.weight + "\n"; 
  personInfo += "Eye Color: " + person.eyeColor + "\n"; 
  personInfo += "Occupation: " + person.occupation + "\n"; 
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();

  }

  while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

// prompt(question).trim();


// function searchByFamily(person){
//   let personFamily = "Family members include: " + person.currentSpouse + "\n" + person.parents +"\n";
//   alert(personFamily)
//}
// function searchByName(people){
//   let firstName = promptFor("What is the person's first name?", chars);
//   let lastName = promptFor("What is the person's last name?", chars);
//   let person = [];

//   let foundPerson = people.filter(function(person){
//     if(person.id === personId 

function findById(personId){
  let personInfo = ("personId" === foundPerson === people.filter(fuction(person)))
}


function searchTrait(people){
  let trait = prompt("Which trait would you like to look for?");
  trait = trait.split(" ");
    for(let i = 0; i < trait.length; i++){
      if(trait[i] === trait[0]){
        trait[i].toLowerCase();
      }
      else if(trait[i] !== trait[0]){
        trait[i] = trait[i][0].toUpperCase() + trait[i].substr(1);
      }
    }
  trait = trait.join("");

  if (trait === "gender"){
    searchGender(people);
  }
}

function searchGender(people){
  let searchResult = prompt("Do you want to search for male or female?");
  searchResult.toLowerCase();
  let results = people.filter(function(el){
    if(el.gender === searchResult){
      return true;
    }
    else{
      return false;
    }
  });
  people = results;
  yesNo = prompt("Number of results: " + people.length + "\nDo you want to search another trait to narrow your search?");
  yesNo.toLowerCase;
    if(yesNo = "yes"){
      return searchTrait(people);
    }
    else if(yesNo = "no"){
      //TO DO enter display all people in array after result
    }
}

function searchByFamily(person){
  let personFamily = "Family members include: " + person[0].currentSpouse + "\n" + person[0].parents[0];
  alert(personFamily);

}

function searchByDescendants(person){
  let personDescendants = "Descendants include: " + person[0].parents + "\n";
  personDescendants += "Descendants include: " + person[0].parents + "\n";
  alert(personDescendants);

}