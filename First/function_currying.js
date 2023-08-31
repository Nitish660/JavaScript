/*Function currying is a technique in JavaScript where a function with multiple arguments is transformed 
into a series of functions that take one argument each. This transformation allows you to create more s
pecialized and reusable functions. Currying is achieved by breaking down a function that takes multiple arguments into a 
series of nested functions, where each function takes a single argument and returns another function until all the arguments are processed.*/


// Currying

function sum(a,b,c){
    return a+b+c
}
function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
    }
}
}
const curriedSum = curry(sum)
console.log(curriedSum(11)(22)(33)) // 66

const add2 =curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)

console.log(add5) // 10