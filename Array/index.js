var languages = [
      "javascript",
      "PHP",
      "Ruby"
]

//pop: get the lastest of arrays
console.log(languages.pop())

//push: insert a new member to the end of the array
languages.push("C#")
console.log(languages)

//shift: delete the first member of the array
languages.shift()
console.log(languages)

//unshift: insert new member to the front
languages.unshift('Python')
console.log(languages)

//splice:  delete the elements, insert new elements, after that join elements
languages.splice(1, 1)
console.log(languages)
//
languages.splice(1, 0, 'PHP', 'React')
console.log(languages)

// concat: create a new array by combined more arrays together
const languages2 = ["VB.net", "Angular"]
console.log(languages.concat(languages2))

//slice:  the slice method is used to extract a portion of an array and create a new array containing the selected elements
console.log(languages.slice(-2, -1))

//...
a1 = [1, 2]
a2 = [3, 4]
a3 = [...a1,...   a2]
console.log(a3)