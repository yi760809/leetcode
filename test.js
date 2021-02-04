// var obj = new Object()

// obj.name = 'lee'
// obj.age = 28
// obj.run = function() {
//   return `my name ${this.name}, my ${this.age}`
// }

// console.log(obj.run())

// function CreateObj(name, age) {
//   var obj = new Object()
//   obj.name = name
//   obj.age = age
//   obj.run = function () {
//     return `my name ${this.name}, my ${this.age}`
//   }
//   return obj
// }
// var jason = CreateObj("jsaon_yu", 29)
// var jack = CreateObj("jack_yu", 29)
// console.log(jason.run())
// console.log(jack.run())
// console.log(jason instanceof CreateObj)


// function CreateObj (name, age) {
//   this.name = name
//   this.age = age
//   this.run = function() {
//     return `my name ${this.name}, my ${this.age}`
//   }
// } 

// var jason = new CreateObj('jason_yu', 28)
// var jack = new CreateObj('jack_yu', 29)
// console.log(jason.run())
// console.log(jack.run())
// console.log(jason instanceof CreateObj)

class CreateObj {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
  run() {
    return `my name ${this.name}, my ${this.age}`
  }
}
var jason = new CreateObj('jason_yu', 28)
console.log(jason.run())
console.log(typeof jason.run)