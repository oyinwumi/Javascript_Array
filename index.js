// 1. Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key.

// extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");
console.log('question 1')
function extractKeys (arrays, key) 
{
   let answer = [] 
   for(let obj of arrays){
    console.log(obj[key])
    answer.push(obj[key])
   }
 return answer
}

 const tt = extractKeys ([
    {name: "Elie", isInstructor:true},
    {name: "Tim", isInstructor:true},
    {name: "Matt", isInstructor:true} , 
], "name") 
console.log(tt)

   

// Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive
console.log('question 2')
function  filterLetters(arr,letter ){
    let  count =  0
    arr.forEach(value => 
    {
        if(value.toLowerCase()  ===  letter.toLowerCase()){
            count++
        }
    }
    )

 return count

}
console.log(filterLetters(["a","y","b","c","A"], "a"))

// Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.
// printFirstAndLast(['awesome','example','of','forEach'])
console.log('question 3')
function printFirstAndLast (array) {
    for (let key of array){
        console.log(key[0]+ key[key.length - 1] )
    }
}
 printFirstAndLast(['awesome','example','of','forEach'])

//  Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

console.log('question 4')
function valTimesIndex (array){
    let answer = []
    const arrayResult = array.map(n => {
       let mul = n * array.indexOf(n)
        answer.push(mul)
    })
    return answer
   
}
 console.log(valTimesIndex([3,5,7,9]))

// Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value has been added. You can do this a few ways, either by reducing starting with an empty array and making copies of the object or by starting with the actual array!
// addKeyAndValue([{name:'Joshua'},{name:'Mark'},{name:'Arthur'}],"isInstructor", true);
console.log('question 5')
function addKeyAndValue(array, key, value){
    array.forEach(element =>element[key] = value)
    return array
}
const newObjArray = addKeyAndValue([{name:'Joshua'},{name:'Mark'},{name:'Arthur'}],"isInstructor", true) 
console.log(newObjArray)

console.log('question 5')

  //Write a function called printEmails which console.log's each email for the users.
  let users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
  function printEmails(){
    for (let item of users)  {
      //  console.log(item)
        for(let key of Object.keys(item)){
            if(key == "email"){
                console.log(item[key])
            }
        }
       
    }
  }
  printEmails()
  
  console.log('question 6')
  //Write a function called printHobbies which console.log's each hobby for each user.
  function printHobbies(){
    for (let key of users){
        for (let value of Object.keys(key)){
            if (value == "hobbies"){

                key[value].map(hobby => console.log(hobby))
             //   console.log(key[value])
            }
        }
    }
  }
  printHobbies()

  

// Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in
console.log('question 7')
function  findHometownByState (state){
    for (let key of users){
      console.log(key.hometown.state)
     if (key.hometown.state === state)
  
     return key
    }
}
console.log(findHometownByState ("CA"))

// Write a function called allLanguages which returns an array of all of the unique values
console.log('question 8')
function allLanguages (){
  let languages = [];
  let ans = []
  for (let item of users) {
     languages.push(...item.favoriteLanguages)
  }

    for (let i = 0; i < languages.length; i++ ) {
        if(i == 0){
           ans.push(languages[i])
        }else{
         let fit =  ans.findIndex(element => element === languages[i])
         if(fit < 0){
           ans.push(languages[i])
         }
        }

    }

//   const newarray  = new Set(languages)
//   for (let value of newarray) {
//     ans.push(value)
//  }
return ans
}
console.log(allLanguages ())

// Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in
console.log('question 9')
function hasFavoriteEditor(editor){
  for (let key of users){
    if(key.favoriteEditor == editor)
      return true
    }
    return false
  }


console.log(hasFavoriteEditor('Visual Studio Code'))

// Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
console.log('question 10')
function  findByUsername(find){
for(let key of users){
  if(key.username == find)
  return key
}
}
console.log(findByUsername('larry'))

// Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
console.log('question 11')
function vowelCount(letter){
  let vowels = ['a','e','i', 'o','u']
  let result = {
    a : 0,
    e: 0,
    i : 0,
    o : 0,
    u: 0
  }
    for(let key of letter){
          if(vowels.includes(key)){
            result[key]++
          } 
    }
    console.log(result)
    for(let item of Object.keys(result)){
      console.log(result[item])
      if(result[item]==0){
      delete result[item]
      }
    }
    return result
}

console.log(vowelCount('incredible'))

// Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).
console.log('question 12')
function removeVowels(string){
  let result = []
  let vowels = ['a','e','i', 'o','u']
  for(let key of string){
    if(!vowels.includes(key)){
     result.push(key)
    } 
}
return result
}
console.log(removeVowels('amazing'))