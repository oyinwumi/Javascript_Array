function extractKeys (arrays, key) 
{
    return arrays.map(item => item[key])
}
const tt = extractKeys ([
    {name: "Elie", isInstructor:true},
    {name: "Tim", isInstructor:true},
    {name: "Matt", isInstructor:true} , 
], "name") 
console.log(tt)

function  filterLetters(arr, letter) {
    return arr.filter(item => item.toLowerCase() === letter.toLowerCase()).length;
}

function valTimesIndex (array) {
    return array.map((value, index) => value * index)
}   

function addKeyAndValue(array, key, value){
    return array.map(element =>element[key] = value)
}

function printEmails(users){
    users.forEach(user => {
        console.log(user.email)
    })
}

function printHobbies(users){
    users.forEach(user => {
        user.hobbies.forEach(hobby => {
            console.log(hobby)
        })
    })
}

function  findHometownByState (users, state){
    users.forEach(user => {
        if (user.hometown.state === state) {
            return user;
        }
    })
}

function allLanguages (users){
    return Array(Set(users.reduce((acc, user) => acc = acc.push(...user.languages), [])));
}

function hasFavoriteEditor(users, editor){
    return !!users.find(user => user.favoriteEditor === editor);
}

function vowelCount(letters){
    const count = {}
    letters.split('').forEach(letter => {
        if ("aeiou".includes(letter)) {
            if (count[letter]) {
                count[letter]++
            }else{
                count[letter] = 1;
            }
        }
    })

    return count;
}

function removeVowels(string){
    return string.split('').filter(letter => !['a', 'e', 'i', 'o', 'u'].includes(letter))
}