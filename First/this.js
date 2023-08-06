//**n JavaScript, the this keyword is a special identifier that refers to the current execution context, or more specifically, the value of the this keyword depends on how and where a function is called. It's a concept that can sometimes be a bit complex due to its dynamic nature. Here are some common scenarios where the value of this is determined: */
/*global-context When this is used outside of any function or object, it refers to the global object. In a browser environment, the global object is usually the window object./*/


/*function sayMyName(name){
    console.log(`my name is ${name}`)
}
sayMyName('Nitish')
console.log(sayMyName)*/

//Implicit binding

const person ={
    name:'Nitish',
    sayMyName: function(){
        console.log(`my name is ${this.name}`)
    },
}
//person.sayMyName()


//Explicit binding
function sayMyName(){
    console.log(`my name is ${this.name}`)
}

sayMyName.call(person)


//new binding
globalThis.name = 'superman'
function aerson(name){
    // this = {}
    this.name = name
}

const p1 = new aerson('Nitish')
console.log(p1.name)

//window binding

sayMyName()