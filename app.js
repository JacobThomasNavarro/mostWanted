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

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      displayPerson(person[0]);
      // TODO: get person's info
    break;
    case "family":
    person.children = [];
    findFamily(person, people);
    break;
    case "descendants":
    let descendantsResults = getDescendants(people, person);
    displayDescendants(descendantsResults);
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
  return foundPerson[0];
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
  // TODO: finish getting the rest of the informaztion to display
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
function findById(personId){
  let personInfo = ("personId" === foundPerson === people.filter(fuction(person)));
  console.log(personInfo);
}
function searchTrait(people){
  let trait = prompt("Which trait would you like to look for?");
  trait = trait.toLowerCase();
  trait = trait.replace(" ", "")
  if (trait === "gender"){
    searchGender(people);
  }
  else if (trait === "eyecolor"){
    searchEyeColor(people);
  }
  else if (trait === "height"){
    searchHeight(people);
  }
  else if (trait === "dob"){
    searchDOB(people);
  }
  else if (trait === "weight"){
    searchWeight(people);
  }
  else if (trait === "occupation"){
    searchOccupation(people);
  }
}
function searchGender(people){
  let searchResult = prompt("Do you want to search for male or female?");
  searchResult = searchResult.toLowerCase();
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
  yesNo = yesNo.toLowerCase();
    if(yesNo = "yes"){
      return searchTrait(people);
    }
    else if(yesNo = "no"){
    }
}
function searchEyeColor(people){
  let searchResult = prompt("Enter eye color.");
  searchResult = searchResult.toLowerCase();
  let results = people.filter(function(el){
    if(el.eyeColor === searchResult){
      return true;
    }
    else{
      return false;
    }
  });
  people = results;
  yesNo = prompt("Number of results: " + people.length + "\nDo you want to search another trait to narrow your search?");
  yesNo = yesNo.toLowerCase();
    if(yesNo = "yes"){
      return searchTrait(people);
    }
    else if(yesNo = "no"){
    }
}
function searchDOB(people){
  let searchResult = prompt("What is the Date of Birth?");
  searchResult = searchResult.toLowerCase();
  let results = people.filter(function(el){
    if(el.dob === searchResult){
      return true;
    }
    else{
      return false;
    }
  });
  people = results;
  yesNo = prompt("Number of results: " + people.length + "\nDo you want to search another trait to narrow your search?");
  yesNo = yesNo.toLowerCase();
    if(yesNo = "yes"){
      return searchTrait(people);
    }
    else if(yesNo = "no"){
    }
}
function searchHeight(people){
  let searchResult = prompt("What is the height in inches?");
  searchResult = parseInt(searchResult, 10)
  let results = people.filter(function(el){
    if(el.height === searchResult){
      return true;
    }
    else{
      return false;
    }
  });
  people = results;
  yesNo = prompt("Number of results: " + people.length + "\nDo you want to search another trait to narrow your search?");
  yesNo = yesNo.toLowerCase();
    if(yesNo = "yes"){
      return searchTrait(people);
    }
    else if(yesNo = "no"){
    }
}
function searchWeight(people){
  let searchResult = prompt("What is the weight in pounds?");
  searchResult = parseInt(searchResult, 10)
  let results = people.filter(function(el){
    if(el.weight === searchResult){
      return true;
    }
    else{
      return false;
    }
  });
  people = results;
  yesNo = prompt("Number of results: " + people.length + "\nDo you want to search another trait to narrow your search?");
  yesNo = yesNo.toLowerCase();
    if(yesNo = "yes"){
      return searchTrait(people);
    }
    else if(yesNo = "no"){
    }
}
function searchOccupation(people){
  let searchResult = prompt("What is their occupation?");
  searchResult = searchResult.toLowerCase();
  let results = people.filter(function(el){
    if(el.occupation === searchResult){
      return true;
    }
    else{
      return false;
    }
  });
  people = results;
  yesNo = prompt("Number of results: " + people.length + "\nDo you want to search another trait to narrow your search?");
  yesNo = yesNo.toLowerCase();
    if(yesNo = "yes"){
      return searchTrait(people);
    }
    else if(yesNo = "no"){
    }
}
function getDescendants(people, person, descendants =[]){
  people.map(function(el){
  if (el.parents[0] == person.id || el.parents[1] == person.id){
    descendants.push(el);
    getDescendants(people, el, descendants);
  }
  else{
    return false;
  }
});
  return descendants;
}
function findFamily(person, people){
  let spouseCheck = person.currentSpouse;
  let parentsCheck = person.parents;
  let childrenCheck = person.children;
  if(person.currentSpouse !== null && typeof person.currentSpouse == typeof 0){
    findSpouse(person, people);
  }
  else if(person.parents !== null && typeof person.parents[1] == typeof 0){
    findParents(person, people);
  }
  else if(person.children !== null){
    findChildren(person, people);
  }
  // else if(){
  //   // findSiblings(person, people)
  // }
}

function findSpouse(person, people){
  let spouse = person.currentSpouse;
  let results = people.filter(function(el){
    if(spouse === el.id){
      return true;
    }
    else{
      return false;
    }
  });
  spouse = results[0].firstName + " " + results[0].lastName;
  person.currentSpouse = spouse;
  return findFamily(person, people);
}

function findParents(person, people){
  let parents = person.parents;
  for(let i = 0; i < parents.length; i++){
    let results = people.filter(function(el){
      if(parents[i] === el.id){
        return true;
      }
      else{
        return false;
      }
    });
    parents[i] = results[0].firstName + " " + results[0].lastName;
  }
  person.parents = parents;
  return findFamily(person, people);
}

function findChildren(person, people){
  let children = person.children;
  let results = people.filter(function(el){
    if(el.parents[0] === person.id || el.parents[1] === person.id){
      return true;
    }
    else{
      return false;
    }
  });
  for(let i = 0; i < results.length; i++){
    children[i] = results[i].firstName + " " + results[i].lastName;
  }
  person.children = children;
  return findFamily(person, people);
}

function displayDescendants(descendantsResults){
  console.log("Descendants: ");
  for(let i = 0; i < descendantsResults.length; i++){
    displayPerson(descendantsResults[i]);
  }
  alert(displayResults);
}