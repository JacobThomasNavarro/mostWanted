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
      // TODO: search by traits
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
    searchByFamily(person);
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


function searchTrait(trait){
  trait = prompt("Which trait would you like to look for?")
  trait = trait.split(" ")
    for(let i = 0; i < trait.length; i++){
      if(trait[i] === trait[0]){
        trait[i].toLowerCase();
      }
      else if(trait[i] !== trait[0]){
        trait[i] = trait[i][0].toUpperCase() + trait[i].substr(1);
      }
    }
  trait = trait.join("")
  if(trait === person[0].firstName){
    alert("This is " + person[0]  + "first name: " + person[0].firstName);
  }
  else if(trait === person[0].lastName){
    alert("This is " + person[0]  + "last name: " + person[0].lastName);
  }
  else if(trait === person[0].gender){
    alert("This is " + person[0]  + "gender: " + person[0].gender);
  }
  else if(trait === person[0].dob){
    alert("This is " + person[0]  + "dat of birth: " + person[0].dob)
  }
  else if(trait === person[0].height){
    alert("This is " + person[0]  + "height: " + person[0].height)
  }
  else if(trait === person[0].weight){
    alert("This is " + person[0]  + "weight: " + person[0].weight)
  }
  else if(trait === person[0].eyeColor){
    alert("This is " + person[0] + "eye color: " + person[0].eyeColor)
  }
  else if(trait === person[0].occupation){
    alert("This is " + person[0] + "occupation: " + person[0].occupation)
  }
  else if(trait === person[0].parents){
    alert("This is " + person[0] + "parents: " + person[0].parents)
  }
  else if(trait === person[0].currentSpouse){
    alert("This is " + person[0] + "current spouse: " + person[0].currentSpouse)
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