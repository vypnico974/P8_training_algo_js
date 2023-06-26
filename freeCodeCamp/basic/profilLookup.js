/**Profile Lookup
We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments
has been pre-written for you.
The function should check if name is an actual contact's firstName and the
given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name then return
the string No such property. */
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
      let contact = false;
      let property = false ;
      for (let i = 0; i < contacts.length; i++) {
        //  console.log(contacts[i].firstName, contacts.length)
          if(contacts[i].firstName == name){
          //  console.log("boucle", contacts[i].firstName )
              let contact = true;
              if (contacts[i][prop]) {
                return contacts[i][prop];
              } else {
                return "No such property"
              }
            
              
          }
      
      }
      if (!contact){
        return "No such contact";
      }
  
      return "No such property"; 
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Akira", "address"))
  
  //lookUpProfile("Akira", "likes");